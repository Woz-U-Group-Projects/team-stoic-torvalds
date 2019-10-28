import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../model/user.model';
import {ApiService} from '../../service/api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['list']);
      return;
    }
    this.apiService.getMessages()
      .subscribe( data => {
        this.users = data.result;
      });
  }

  deleteUser(user: User): void {
    this.apiService.deleteMessage(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

  editUser(user: User): void {
    window.localStorage.removeItem('editUserId');
    window.localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['edit-message']);
  }

  addUser(): void {
    this.router.navigate(['add-message']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Create } from '../../models/create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  create: string;

  constructor() { }

  ngOnInit() {


  }

}

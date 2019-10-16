import { Component, OnInit } from '@angular/core';
import { Create } from '../../models/Create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  create: Create[];

  constructor() { }

  ngOnInit() {
    this.create = [
      {
        id: 1,
        title: 'null',
        completed: true

      }
    ];

  }

}

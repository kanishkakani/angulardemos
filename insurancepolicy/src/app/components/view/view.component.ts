import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  //  users: User[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
    // this.users = this.usersService.getUsers();
  }

  }

import { Component, OnInit, inject } from '@angular/core';
import { Iuser } from '../../models/users.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  allUsers !: Array<Iuser>;
  private _userService = inject(UsersService)
  constructor() { }

  ngOnInit(): void {
    this.allUsers = this._userService.fetchAllUsers()
  }

}

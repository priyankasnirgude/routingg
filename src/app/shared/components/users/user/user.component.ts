import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId !: string;
  userInfo !: Iuser;
  
  constructor(
    private route : ActivatedRoute,
    private _userService : UsersService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    // this.userId = this.route.snapshot.params['userId'];
    // if(this.userId){
    //   this.userInfo = this._userService.fetchUser(this.userId)
    // }
    this.route.params.subscribe(res => {
      console.log(res['userId']);
      this.userId = res['userId'];
      if(this.userId){
        this.userInfo = this._userService.fetchUser(this.userId)
      }
    })
  }

  onRemoveUser(){
    this._userService.removeUser(this.userInfo)
    this._router.navigate(['/users'])
  }
}

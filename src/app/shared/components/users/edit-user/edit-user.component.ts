import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userForm !: FormGroup;
  isinEditMode : boolean = false;
  userId !: string;
  userInfo!: Iuser;
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _uuidService = inject(UuidService);
  private _userService = inject(UsersService);
  //userInfo: Iuser | undefined;
  constructor() { }

  ngOnInit(): void {
    this.createUserForm();
    this.userId = this._route.snapshot.params['userId'];
    if(this.userId){
      this.isinEditMode = true
      this.userInfo = this._userService.fetchUser(this.userId)
      this.userForm.patchValue(this.userInfo)
    }else{
      this.isinEditMode = false;
    }
  }

  createUserForm(){
    this.userForm = new FormGroup({
      userName : new FormControl(null, [Validators.required]),
      userRole : new FormControl("Candidate", [Validators.required]),
    })
  }

  onUserAdd(){
    if(this.userForm.valid){
      let newUser : Iuser = {
        ...this.userForm.value, 
        userId: this._uuidService.generateUuid()
      }
      this._userService.addNewUser(newUser);
      this.userForm.reset();
      this._router.navigate(['/users'])
    }
  }

  onUpdateUser(){
    if(this.userForm.valid){
      let updatedObj = { ...this.userForm.value, userId: this.userId }
      console.log(updatedObj);
      this._userService.updateUser(updatedObj);
      this._router.navigate(['/users'])
    }
  }

}

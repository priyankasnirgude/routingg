import { Injectable } from '@angular/core';
import { Iuser } from '../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userArr : Array<Iuser> = [
    {
      userName : "Rohit",
      userId : "123",
      userRole : "Admin"
    },
    {
      userName : "sachin",
      userId : "345",
      userRole : "Admin"
    },
    {
      userName : "Virat",
      userId : "678",
      userRole : "Candidate"
    },
    {
      userName : "Sushil",
      userId : "234",
      userRole : "Candidate"
    },
  ]
  constructor() { }

  fetchAllUsers():Array<Iuser>{
    return this.userArr
  }

  fetchUser(id:string) : Iuser{
    return this.userArr.find(user => user.userId === id) as Iuser
  }

  addNewUser(newUser : Iuser){
    this.userArr.unshift(newUser);
  }

  updateUser(updatedObj : Iuser){
    let getIndex = this.userArr.findIndex(user => user.userId === updatedObj.userId);
    this.userArr[getIndex] = updatedObj;
  }

  removeUser(userObj : Iuser){
    let getIndex = this.userArr.findIndex(
      user => user.userId === userObj.userId
    )
    this.userArr.splice(getIndex, 1);

    alert(`User ${userObj.userName} is removed successfully!!!`)
  }
}

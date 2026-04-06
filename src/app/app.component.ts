import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [UserComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users:undefined|string[];
   handleUsers(users:string[]){
    console.log(users);
    this.users=users;
   }

}

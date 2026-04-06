import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Output() getUsers = new EventEmitter();
  users = ['Aadi', 'Durgesh', 'Ram']
  ngOnInit() {
    this.getUsers.emit(this.users);
  }
}

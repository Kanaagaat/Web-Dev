import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('User Card Demo');

  users = signal<User[]>([
    { name: 'John Doe', age: 28 },
    { name: 'Jane Smith', age: 32 },
    { name: 'Mike Johnson', age: 25 }
  ]);

  onUserUpdated(index: number, updatedUser: User) {
    const currentUsers = this.users();
    currentUsers[index] = updatedUser;
    this.users.set([...currentUsers]);
    console.log('App: User updated at index', index, ':', updatedUser);
  }

  onDeleteUser(index: number) {
    const currentUsers = this.users();
    const deletedUser = currentUsers[index];
    currentUsers.splice(index, 1);
    this.users.set([...currentUsers]);
    console.log('App: User deleted at index', index, ':', deletedUser);
  }
}

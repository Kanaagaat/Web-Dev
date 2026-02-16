import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() user: User = { name: '', age: 0 };
  @Input() editable: boolean = false;

  @Output() userUpdated = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<void>();

  editedName: string = '';
  editedAge: number = 0;
  isEditing: boolean = false;

  ngOnInit() {
    console.log('UserCardComponent OnInit - User:', this.user);
    this.editedName = this.user.name;
    this.editedAge = this.user.age;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('UserCardComponent OnChanges:', changes);
    if (changes['user'] && !changes['user'].firstChange) {
      this.editedName = this.user.name;
      this.editedAge = this.user.age;
    }
  }

  ngOnDestroy() {
    console.log('UserCardComponent OnDestroy - User:', this.user);
  }

  onNameInput(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('Name input changed:', target.value);
    this.editedName = target.value;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.editedName = this.user.name;
      this.editedAge = this.user.age;
    }
  }

  updateUser() {
    const updatedUser: User = {
      name: this.editedName.trim(),
      age: this.editedAge
    };
    console.log('Updating user:', updatedUser);
    this.userUpdated.emit(updatedUser);
    this.isEditing = false;
  }

  onDelete() {
    console.log('Delete user clicked:', this.user);
    this.deleteUser.emit();
  }

  isFormValid(): boolean {
    return this.editedName.trim().length > 0 && this.editedAge > 0;
  }
}

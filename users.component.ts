import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  searchText: string = '';
  users = [
    { name: 'Amr Okasha', address: 'bns' },
    { name: 'Ali osman', address: 'bns' },
    { name: 'fatima ali', address: 'bns' },
    { name: 'esrra ahmed', address: 'bns' },
    { name: 'nour ali', address: 'bns' },
    { name: 'amir Martin', address: 'bns' },
    { name: 'yehia mahmoud', address: 'bns' },
    { name: 'omar asem', address: 'bns' },
    { name: 'asem ali', address: 'bns' },
    { name: 'mohamed wahba', address: 'bns' }
  ];

  get filteredUsers() {
    return this.searchText.trim() === '' ? this.users : this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

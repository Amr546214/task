import { Component } from '@angular/core';
interface RowData {
  id: number;
  name: string;
  email: string;
  isEditing: boolean;
}
@Component({
  selector: 'app-add-edit-delete-posts-by-angular',
  standalone: false,
  templateUrl: './add-edit-delete-posts-by-angular.component.html',
  styleUrl: './add-edit-delete-posts-by-angular.component.css'
})
export class AddEditDeletePostsByAngularComponent {
  rows: RowData[] = [];
  nextId: number = 1;

  addRow() {
      this.rows.push({ id: this.nextId++, name: '', email: '', isEditing: true });
  }

  editRow(row: RowData) {
    row.isEditing = true;
  }

  saveRow(row: RowData) {
    row.isEditing = false;
  }

  deleteRow(id: number) {
    if (confirm('Are you sure you want to delete this row?')) {
      this.rows = this.rows.filter(row => row.id !== id);
    }
  }
}

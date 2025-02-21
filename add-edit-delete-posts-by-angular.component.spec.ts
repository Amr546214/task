import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeletePostsByAngularComponent } from './add-edit-delete-posts-by-angular.component';

describe('AddEditDeletePostsByAngularComponent', () => {
  let component: AddEditDeletePostsByAngularComponent;
  let fixture: ComponentFixture<AddEditDeletePostsByAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditDeletePostsByAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDeletePostsByAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

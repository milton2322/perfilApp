import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRolComponent } from './add-edit-rol.component';

describe('AddEditRolComponent', () => {
  let component: AddEditRolComponent;
  let fixture: ComponentFixture<AddEditRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVerreComponent } from './add-edit-verre.component';

describe('AddEditVerreComponent', () => {
  let component: AddEditVerreComponent;
  let fixture: ComponentFixture<AddEditVerreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditVerreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditVerreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

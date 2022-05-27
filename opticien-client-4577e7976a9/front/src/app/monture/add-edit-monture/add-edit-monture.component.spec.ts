import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMontureComponent } from './add-edit-monture.component';

describe('AddEditMontureComponent', () => {
  let component: AddEditMontureComponent;
  let fixture: ComponentFixture<AddEditMontureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMontureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMontureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

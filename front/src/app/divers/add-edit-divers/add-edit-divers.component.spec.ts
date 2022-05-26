import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDiversComponent } from './add-edit-divers.component';

describe('AddEditDiversComponent', () => {
  let component: AddEditDiversComponent;
  let fixture: ComponentFixture<AddEditDiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDiversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

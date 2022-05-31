import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLentilleComponent } from './add-edit-lentille.component';

describe('AddEditLentilleComponent', () => {
  let component: AddEditLentilleComponent;
  let fixture: ComponentFixture<AddEditLentilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLentilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLentilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

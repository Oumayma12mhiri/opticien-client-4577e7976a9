import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFRSComponent } from './add-edit-frs.component';

describe('AddEditFRSComponent', () => {
  let component: AddEditFRSComponent;
  let fixture: ComponentFixture<AddEditFRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFRSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

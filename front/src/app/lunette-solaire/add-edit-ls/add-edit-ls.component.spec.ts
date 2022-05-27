import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLSComponent } from './add-edit-ls.component';

describe('AddEditLSComponent', () => {
  let component: AddEditLSComponent;
  let fixture: ComponentFixture<AddEditLSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

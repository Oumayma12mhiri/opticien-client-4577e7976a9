import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerreComponent } from './verre.component';

describe('VerreComponent', () => {
  let component: VerreComponent;
  let fixture: ComponentFixture<VerreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

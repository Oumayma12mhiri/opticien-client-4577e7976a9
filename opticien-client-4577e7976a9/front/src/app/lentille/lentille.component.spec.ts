import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LentilleComponent } from './lentille.component';

describe('LentilleComponent', () => {
  let component: LentilleComponent;
  let fixture: ComponentFixture<LentilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LentilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LentilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

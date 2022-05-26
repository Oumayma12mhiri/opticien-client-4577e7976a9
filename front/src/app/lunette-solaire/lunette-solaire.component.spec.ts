import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunetteSolaireComponent } from './lunette-solaire.component';

describe('LunetteSolaireComponent', () => {
  let component: LunetteSolaireComponent;
  let fixture: ComponentFixture<LunetteSolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunetteSolaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunetteSolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

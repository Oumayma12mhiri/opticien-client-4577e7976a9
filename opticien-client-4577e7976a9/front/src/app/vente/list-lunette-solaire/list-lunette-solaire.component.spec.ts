import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLunetteSolaireComponent } from './list-lunette-solaire.component';

describe('ListLunetteSolaireComponent', () => {
  let component: ListLunetteSolaireComponent;
  let fixture: ComponentFixture<ListLunetteSolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLunetteSolaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLunetteSolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

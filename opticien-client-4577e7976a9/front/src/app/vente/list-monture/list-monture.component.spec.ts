import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMontureComponent } from './list-monture.component';

describe('ListMontureComponent', () => {
  let component: ListMontureComponent;
  let fixture: ComponentFixture<ListMontureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMontureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMontureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

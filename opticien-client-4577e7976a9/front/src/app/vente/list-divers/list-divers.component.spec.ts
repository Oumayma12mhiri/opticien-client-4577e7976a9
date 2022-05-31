import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiversComponent } from './list-divers.component';

describe('ListDiversComponent', () => {
  let component: ListDiversComponent;
  let fixture: ComponentFixture<ListDiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDiversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

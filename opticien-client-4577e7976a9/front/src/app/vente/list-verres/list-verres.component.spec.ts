import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVerresComponent } from './list-verres.component';

describe('ListVerresComponent', () => {
  let component: ListVerresComponent;
  let fixture: ComponentFixture<ListVerresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVerresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVerresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

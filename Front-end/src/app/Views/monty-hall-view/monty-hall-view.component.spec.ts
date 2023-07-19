import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontyHallViewComponent } from './monty-hall-view.component';

describe('MontyHallViewComponent', () => {
  let component: MontyHallViewComponent;
  let fixture: ComponentFixture<MontyHallViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MontyHallViewComponent]
    });
    fixture = TestBed.createComponent(MontyHallViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockIndexComponent } from './clock-index.component';

describe('ClockIndexComponent', () => {
  let component: ClockIndexComponent;
  let fixture: ComponentFixture<ClockIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

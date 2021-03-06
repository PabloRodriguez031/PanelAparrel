import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticslistComponent } from './statisticslist.component';

describe('StatisticslistComponent', () => {
  let component: StatisticslistComponent;
  let fixture: ComponentFixture<StatisticslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

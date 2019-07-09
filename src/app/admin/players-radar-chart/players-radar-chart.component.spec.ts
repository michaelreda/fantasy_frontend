import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersRadarChartComponent } from './players-radar-chart.component';

describe('PlayersRadarChartComponent', () => {
  let component: PlayersRadarChartComponent;
  let fixture: ComponentFixture<PlayersRadarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersRadarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

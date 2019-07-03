import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFanIDComponent } from './register-fan-id.component';

describe('RegisterFanIDComponent', () => {
  let component: RegisterFanIDComponent;
  let fixture: ComponentFixture<RegisterFanIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFanIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFanIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

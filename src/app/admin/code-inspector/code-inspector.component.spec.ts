import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeInspectorComponent } from './code-inspector.component';

describe('CodeInspectorComponent', () => {
  let component: CodeInspectorComponent;
  let fixture: ComponentFixture<CodeInspectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeInspectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

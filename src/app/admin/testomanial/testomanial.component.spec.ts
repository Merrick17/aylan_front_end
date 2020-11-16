import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestomanialComponent } from './testomanial.component';

describe('TestomanialComponent', () => {
  let component: TestomanialComponent;
  let fixture: ComponentFixture<TestomanialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestomanialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestomanialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

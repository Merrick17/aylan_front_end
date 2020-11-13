import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AylanComponent } from './aylan.component';

describe('AylanComponent', () => {
  let component: AylanComponent;
  let fixture: ComponentFixture<AylanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AylanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AylanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

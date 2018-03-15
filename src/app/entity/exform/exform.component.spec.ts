import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExformComponent } from './exform.component';

describe('ExformComponent', () => {
  let component: ExformComponent;
  let fixture: ComponentFixture<ExformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3ListComponent } from './ex3-list.component';

describe('Ex3ListComponent', () => {
  let component: Ex3ListComponent;
  let fixture: ComponentFixture<Ex3ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

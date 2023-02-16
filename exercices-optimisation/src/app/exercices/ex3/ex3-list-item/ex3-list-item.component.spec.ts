import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3ListItemComponent } from './ex3-list-item.component';

describe('Ex3ListItemComponent', () => {
  let component: Ex3ListItemComponent;
  let fixture: ComponentFixture<Ex3ListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3ListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex3ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

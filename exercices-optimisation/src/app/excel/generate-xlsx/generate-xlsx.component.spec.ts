import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateXlsxComponent } from './generate-xlsx.component';

describe('GenerateXlsxComponent', () => {
  let component: GenerateXlsxComponent;
  let fixture: ComponentFixture<GenerateXlsxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateXlsxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateXlsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

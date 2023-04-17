import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillFormComponent } from './fill-form.component';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FillFormComponent', () => {
  let component: FillFormComponent;
  let fixture: ComponentFixture<FillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FillFormComponent],
      imports: [ReactiveFormsModule, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill in the form fields', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'Alberto';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('Alberto');

  });
});

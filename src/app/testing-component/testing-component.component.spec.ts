import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponentComponent } from './testing-component.component';
import { By } from '@angular/platform-browser';

describe('TestingComponentComponent', () => {
  let component: TestingComponentComponent;
  let fixture: ComponentFixture<TestingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should access element in DOM with debugElement.query()', () => {
    let title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.textContent).toBe('Meu título');
  });
  it('should access element in DOM with nativeElement.querySelector()', () => {
    const p = fixture.debugElement.nativeElement.querySelector('p');
    expect(p.textContent).toBe('Meu parágrafo');
  });
  it('should have a button with yes value and background-color green', () => {
    const btnYes = fixture.debugElement.query(By.css('.btn-yes')).nativeElement;
    const style = window.getComputedStyle(btnYes);
    expect(btnYes.textContent).toBe('Yes');
    expect(rgbToColorName(style.backgroundColor)).toBe('green');
  });
  it('should have a button with no value and background-color red', () => {
    const btnNo = fixture.debugElement.query(By.css('.btn-no')).nativeElement;
    const style = window.getComputedStyle(btnNo);
    expect(btnNo.textContent).toBe('No');
    expect(rgbToColorName(style.backgroundColor)).toBe('red');
  });

  function rgbToColorName(rgb: string): string {
    switch (rgb) {
      case 'rgb(0, 128, 0)': return 'green';
      case 'rgb(0, 0, 255)': return 'blue';
      case 'rgb(255, 0, 0)': return 'red';
      default: return rgb;
    }
  }
});

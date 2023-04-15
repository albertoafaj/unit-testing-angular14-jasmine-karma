import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponentComponent } from './testing-component.component';
import { By } from '@angular/platform-browser';

fdescribe('TestingComponentComponent', () => {
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
    let p = fixture.debugElement.nativeElement.querySelector('p');
    expect(p.textContent).toBe('Meu parágrafo');
  });
});

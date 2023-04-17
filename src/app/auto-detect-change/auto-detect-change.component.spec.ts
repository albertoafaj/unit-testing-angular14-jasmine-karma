import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { AutoDetectChangeComponent } from './auto-detect-change.component';
import { By } from '@angular/platform-browser';

fdescribe('AutoDetectChangeComponent', () => {
  let component: AutoDetectChangeComponent;
  let fixture: ComponentFixture<AutoDetectChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoDetectChangeComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AutoDetectChangeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title: Learning to use fixture.autoDetectChange()', () => {
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    input.value = 'Changed text';
    console.log(input.value);

    input.dispatchEvent(new Event('change'));
    expect(title.textContent).toBe('Changed text');
  });
});

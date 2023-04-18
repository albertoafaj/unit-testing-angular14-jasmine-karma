import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputComponent } from './input-output.component';
import { By } from '@angular/platform-browser';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputOutputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get a user from parent component', () => {
    const user = {
      name: 'Alberto',
      email: 'alberto@email.com',
      passwd: '123'
    };

    component.user = user;

    expect(component.user).toBe(user);

  });
  it('should emit message when button click', () => {
    const emitMessageSpy = spyOn(component.userMessage, 'emit');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(emitMessageSpy).toHaveBeenCalled();
  });
});

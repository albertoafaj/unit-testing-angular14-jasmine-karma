import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoComponent } from './extrato.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('ExtratoComponent', () => {
  let component: ExtratoComponent;
  let fixture: ComponentFixture<ExtratoComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtratoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a h1 title "Testando Rotas"', () => {
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1.textContent).toBe('Testando Rotas');
  });
  it('should have a button that when clicked navigate to "extrato" page', () => {
    const route = 'extrato';
    spyOn(router, 'navigate');
    component.navigateUrl(route);
    expect(router.navigate).toHaveBeenCalledWith(['/extrato']);
  });
});

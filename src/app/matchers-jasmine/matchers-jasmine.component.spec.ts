import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersJasmineComponent } from './matchers-jasmine.component';

describe('MatchersJasmineComponent', () => {
  let component: MatchersJasmineComponent;
  let fixture: ComponentFixture<MatchersJasmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchersJasmineComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MatchersJasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test the use of matcher toEqual', () => {
    expect(true).toEqual(true);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  })
  it('should test the use of matcher toBe', () => {
    let names = ['Alberto', 'Erica']
    expect(names[0]).toBe('Alberto');
  })
  it('should test the use of matcher toBeTruthy', () => {
    expect(true).toBeTruthy();
    expect(10).toBeTruthy();
    expect({}).toBeTruthy();
  })
  it('should test the use of matcher toBeFalsy', () => {
    expect(false).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(NaN).toBeFalsy();
  })
  it('should test the use of matcher toBeTrue', () => {
    expect(true).toBeTrue();
    expect(1 == 1).toBeTrue();
    expect('abc' == 'abc').toBeTrue();
  })
  it('should test the use of matcher toBeFalse', () => {
    expect(false).toBeFalse();
    expect(1 != 1).toBeFalse();
    expect('abc' != 'abc').toBeFalse();
  })
  it('should test the use of matcher not', () => {
    let names = ['Alberto', 'Erica']
    expect('Alberto').not.toEqual('Erica');
    expect(names[0]).not.toBe('Erica');
  })
  it('should test the use of matcher toContain', () => {
    expect('Alberto').toContain('Alb');
    expect([1, 2, 3]).toContain(1);
    expect([1, 2, 3]).not.toContain(10);
  })
  it('should test the use of matcher toBeDefined', () => {
    let name = 'Alberto';
    expect(name).toBeDefined();
  })
  it('should test the use of matcher toBeNaN', () => {

    expect(NaN).toBeNaN();
  })
  it('should test the use of matcher toBeGreaterThan', () => {

    expect(10).toBeGreaterThan(1);
  })
  it('should test the use of matcher toBeLessThan', () => {

    expect(10).toBeLessThan(20);
  })
  it('should test the use of matcher toBeCloseTo', () => {

    expect(35.2).toBeCloseTo(35.2, 1);
  })
});

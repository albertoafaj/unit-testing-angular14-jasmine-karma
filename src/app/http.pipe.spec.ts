import { HttpPipe } from './http.pipe';

fdescribe('HttpPipe', () => {
  const pipe = new HttpPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should transform http in https', () => {
    expect(pipe.transform('http://www.google.com')).toBe('https://www.google.com');
  });
});

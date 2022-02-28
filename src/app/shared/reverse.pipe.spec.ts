import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance and transform a string', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('hello')).toEqual('OLLEH');
  });
});

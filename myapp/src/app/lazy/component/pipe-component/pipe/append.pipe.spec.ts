import { AppendPipe } from './append.pipe';

describe('AppendPipe', () => {
  it('create an instance', () => {
    const pipe = new AppendPipe();
    expect(pipe).toBeTruthy();
  });
  it('create an transform',()=>{
    const pipe=new AppendPipe();
    pipe.transform('adad','ad');
    expect(pipe.transform).toBeDefined();
  })
});

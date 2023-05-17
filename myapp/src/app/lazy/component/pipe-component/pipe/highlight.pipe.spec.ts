import { HighlightPipe } from './highlight.pipe';

fdescribe('HighlightPipe', () => {
  it('create an instance', () => {
    const pipe = new HighlightPipe();
    expect(pipe).toBeTruthy();
  });
  it('create an transform',()=>{
    const pipe=new HighlightPipe();
    pipe.transform('abcd','ab');
    pipe.transform('abcd','');
    pipe.transform('abcd','efg');
    expect(pipe.transform).toBeDefined();
  })
});

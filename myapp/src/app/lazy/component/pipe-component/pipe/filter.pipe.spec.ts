import { FilterPipe } from './filter.pipe';

fdescribe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
  it('create an transform',()=>{
    const pipe=new FilterPipe();
    pipe.transform(['senthil','vinoth'],'gender','M');
    expect(pipe.transform).toBeDefined();
  })
});

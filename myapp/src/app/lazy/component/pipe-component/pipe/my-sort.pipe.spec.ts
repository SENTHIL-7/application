import { MySortPipe } from './my-sort.pipe';

describe('MySortPipe', () => {
  it('create an instance', () => {
    const pipe = new MySortPipe();
    expect(pipe).toBeTruthy();
  });
  it('create an transform for asc',()=>{
    const pipe=new MySortPipe();
    pipe.transform([{ name: 'mani', age: 23 },{ name: 'suresh', age: 21 }],'name','asc');
    expect(pipe.transform).toBeDefined();
  })
  it('create an transform for order desc',()=>{
    const pipe=new MySortPipe();
    pipe.transform([{ name: 'mani', age: 23 },{ name: 'suresh', age: 21 }],'name','desc');
    expect(pipe.transform).toBeDefined();
  })
});

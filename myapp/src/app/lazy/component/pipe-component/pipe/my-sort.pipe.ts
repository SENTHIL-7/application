// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'mySort'
// })
// export class MySortPipe implements PipeTransform {

//   transform(items: any[], property: string, order: string): any[] {
//     let tem: any[] = items.map(x => x[property]).sort();
//     if (order == 'desc') {
//       tem = tem.reverse()
//     }
//     return items.map((x, i) => {
//       for (let j = 0; i < tem.length; j++) {
//         if (items[j][property] == tem[i]) {
//           return items[j]
//         }
//       }
//     })
//   }
// }

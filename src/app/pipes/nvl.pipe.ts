import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'nvl'
    , pure: true
})

export class NvlPipe  implements PipeTransform {
    
    constructor(){ }
    
    transform(value:string, args:string[]):any {
        return value ? value : args[0];
    }
}
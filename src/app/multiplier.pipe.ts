import {Pipe , PipeTransform} from '@angular/core';

// @Pipe ({name:'Multiplier'})

// @Pipe ({name:'divider'})

@Pipe ({name:'total1'})

export class MultiplierPipe implements PipeTransform {

  // transform(value:number , multiply:number):number{
  //   //let mul = parseFloat(multiply);
  //   return multiply * value
  // }

  //  transform(value:number , divide:number):number{
  //   //let mul = parseFloat(multiply);
  //   return divide / value
  // }


  transform(value:any):any{
    //let mul = parseFloat(multiply);

     return value.physics + value.chemistry + value.maths + value.electrical + value.electronics + value.chemlab + value.physicslab;
  }

}

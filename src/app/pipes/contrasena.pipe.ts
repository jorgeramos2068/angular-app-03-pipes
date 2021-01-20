import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform
{
  transform( value:string, activate:boolean = true ): string {
    let aux = '';
    if( activate ) {
      /*for( let i in value ) {
        aux += '*';
      }*/
    }
    else {
      aux = value;
    }
    return aux;
  }
}

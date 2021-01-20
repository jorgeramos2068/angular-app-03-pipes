import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  name = 'Bruce';
  varArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10  ];
  PI = Math.PI;
  varNumber:number = 0.234;
  varCurrency:number = 1234.5;
  varJson = {
    name: "Logan",
    heroe: "Wolverine",
    age: 500,
    address: {
      street: "Fake street"
    }
  };
  varPromise = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve( 'Data is here' ), 3500 );
  } );
  varDate = new Date();
  name2 = 'bruce WayNE jimenez';
  video = 'ONg4SK39-Kg';
  activate:boolean = true;
}

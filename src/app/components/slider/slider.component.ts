import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: [
  ]
})
export class SliderComponent {
  //declaracion de arreglo...
  public products: Array<any>;
  public counter:number = 0;
  constructor() {
    //inicializacion de arreglo...
    this.products = [
      {
        id          : 1,
        title       : 'nombre del producto 1 ',
        pathImage   : '../../../assets/products-images/comida1.jpg',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet qui explicabo numquam delectus. Assumenda ullam doloremque eaque repellendus sapiente, molestias, quos veniam perferendis nulla veritatis voluptates sint repudiandae optio odit?',
        rate        : '8/10'
      },
      {
        id          : 2,
        title       : 'nombre del producto 2',
        pathImage   : '../../../assets/products-images/comida2.jpg',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet qui explicabo numquam delectus. Assumenda ullam doloremque eaque repellendus sapiente, molestias, quos veniam perferendis nulla veritatis voluptates sint repudiandae optio odit?',
        rate        : '8/10'
      },
      {
        id          : 3,
        title       : 'nombre del producto 3',
        pathImage   : '../../../assets/products-images/comida3.jpg',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet qui explicabo numquam delectus. Assumenda ullam doloremque eaque repellendus sapiente, molestias, quos veniam perferendis nulla veritatis voluptates sint repudiandae optio odit?',
        rate        : '8/10'
      },
      {
        id          : 4,
        title       : 'nombre del producto 4',
        pathImage   : '../../../assets/products-images/comida4.jpg',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet qui explicabo numquam delectus. Assumenda ullam doloremque eaque repellendus sapiente, molestias, quos veniam perferendis nulla veritatis voluptates sint repudiandae optio odit?',
        rate        : '8/10'
      },
      {
        id          : 5,
        title       : 'nombre del producto 5',
        pathImage   : '../../../assets/products-images/comida5.jpg',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet qui explicabo numquam delectus. Assumenda ullam doloremque eaque repellendus sapiente, molestias, quos veniam perferendis nulla veritatis voluptates sint repudiandae optio odit?',
        rate        : '8/10'
      }
    ];
   }


  changeToMax(){
    if(this.counter == this.products.length - 1){
      this.counter = 0;
    }
    if(this.counter >= 0 && this.counter <= this.products.length - 1){
      this.counter++;
      console.log(this.counter, 'VALOOOOOOOOOOR');
    }
    else{
      this.counter = this.products.length -1;
    }
    
  }
  
  changeToMin(){
    if(this.counter <= 0){
      this.counter = 0;
      console.log(this.counter, 'VALOOOOOOOOOOR');
    }else{
      this.counter--;
      console.log(this.counter, 'VALOOOOOOOOOOR');
    }
  }


  
}

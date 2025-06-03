import { Component } from '@angular/core';
import { Shoes } from './shoes.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  cartImg = 'img/cart.svg';
  l = 'img/black.svg';
  modeloLanding : string = '';
  nombreLanding : string = '';
  imagenLanding : string = '';
  precioLanding: number = 0;
  descripcionLanding: string = '';
  selectedShoe: number = 0;
  selectedShoeBoolean :boolean = false;
  btnCardActivo : number = 0;
  cardImagen: string ='';
  cardModelo: string = '';
  cardNombre: string = '';
  cardPrecio: number = 0;


  ngOnInit(){
    this.modeloLanding = this.shoes[0].modelo;
    this.nombreLanding = this.shoes[0].nombre;
    this.descripcionLanding = this.shoes[0].descripcion;
    this.imagenLanding = this.shoes[0].imagen;
    this.selectedShoeBoolean = true;
    this.carrouselMobile(0);
  }

  shoes: Shoes[] = [
    {
      modelo: 'Nike Air Max',
      nombre: '97 Black',
      imagen: 'img/black.svg',
      precio: 7373,
      descripcion: 'El Nike Air Max 97 "Bred" es una edición especial que combina la icónica silueta del Air Max 97 con la clásica paleta de colores negro y rojo, conocida como "Bred" (abreviatura de "Black and Red"). Esta combinación de colores "Bred" aporta un aspecto elegante y atemporal.'
    },
    {
      modelo: 'Nike Air Max',
      nombre: '97 Brown',
      imagen: 'img/brown.svg',
      precio: 4152,
      descripcion: 'El Nike Air Max 97 "Neutral Olive" es una reinterpretación moderna de la clásica silueta inspirada en los trenes bala japoneses. Este modelo combina una paleta de colores en verde oliva, blanco y negro, ofreciendo un diseño elegante y versátil para el uso diario. '
    },
    // {
    //   modelo: 'Nike Air Max',
    //   nombre: '97 Mustard',
    //   imagen: 'img/yellow.svg',
    //   precio: 4745
    // },
    {
      modelo: 'Nike Air Max',
      nombre: '97 Turquesa',
      imagen: 'img/blueblack.svg',
      precio: 2618,
      descripcion: 'El Nike Air Max 97 SE "XXXV" es una edición especial que conmemora el 35.º aniversario de la tecnología Air Max de Nike. Este modelo presenta una combinación de colores Black/Sport Turquoise/Summit White, ofreciendo un diseño elegante y moderno.'
    }
  ]

  chooseShoes(index: number){
    this.modeloLanding = this.shoes[index].modelo;
    this.nombreLanding = this.shoes[index].nombre;
    this.descripcionLanding = this.shoes[index].descripcion;
    this.imagenLanding = this.shoes[index].imagen;
    this.selectedShoe = index;
    this.selectedShoeBoolean = false;
    setTimeout(() =>{
      this.selectedShoeBoolean = true;
    }, 5);
  }

  carrouselMobile(index: number){
    let copyShoes = [...this.shoes];
    let card : Shoes = copyShoes[index];
    this.cardImagen = card.imagen;
    this.cardModelo = card.modelo;
    this.cardNombre = card.nombre;
    this.cardPrecio = card.precio;
    this.btnCardActivo = index;
  }
}

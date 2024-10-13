import { Component } from '@angular/core';
import { signUpRequest } from '../models/signUpRequest.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user: any = localStorage.getItem('user');
  cards = [
    {
      img: '../../assets/imagenes/venta-img-link.png',
      ul: ['Registrar Ventas', 'Consultar Ventas', 'Editar Ventas'],
      label: 'Ventas',
    },
    {
      img: '../../assets/imagenes/venta-img-link.png',
      ul: ['Registrar Ventas', 'Consultar Ventas', 'Editar Ventas'],
      label: 'Ventas',
    },
    {
      img: '../../assets/imagenes/venta-img-link.png',
      ul: ['Registrar Ventas', 'Consultar Ventas', 'Editar Ventas'],
      label: 'Ventas',
    },
    {
      img: '../../assets/imagenes/venta-img-link.png',
      ul: ['Registrar Ventas', 'Consultar Ventas', 'Editar Ventas'],
      label: 'Ventas',
    },
    {
      img: '../../assets/imagenes/venta-img-link.png',
      ul: ['Registrar Ventas', 'Consultar Ventas', 'Editar Ventas'],
      label: 'Ventas',
    },
    {
      img: '../../assets/imagenes/venta-img-link.png',
      ul: ['Registrar Ventas', 'Consultar Ventas', 'Editar Ventas'],
      label: 'Ventas',
    },
  ];
}

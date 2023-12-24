import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('slideDown', [
      state('void', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate('500ms ease-out', style({
          transform: 'translateY(0)',
          opacity: 1
        })),
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({
          transform: 'translateY(-100%)',
          opacity: 0
        })),
      ]),
    ]),
  ],
})
export class MenuComponent {

  links: Array<any> = [
    {
      icon: '../../assets/imagenes/home-img-link.png',
      label: 'Home',
      route: '/home',
      activeLink: false
    },
    {
      icon: '../../assets/imagenes/user-img-link.png',
      label: 'Usuarios',
      route: '/users',
      activeLink: false
    },
    {
      icon: '../../assets/imagenes/venta-img-link.png',
      label: 'Ventas',
      route: '/sells',
      activeLink: false
    },
    {
      icon: '../../assets/imagenes/compra-img-link.png',
      label: 'Compras',
      route: '/purchase',
      activeLink: false
    },
    {
      icon: '../../assets/imagenes/producto-img-link.png',
      label: 'Productos',
      route: '#',
      activeLink: false
    },
    {
      icon: '../../assets/imagenes/clientes-img-link.png',
      label: 'Clientes y Prov',
      route: '/clients',
      activeLink: false
    },
    {
      icon: '../../assets/imagenes/orden-img-link.png',
      label: 'Home',
      route: '/home',
      activeLink: false
    },
    {
      icon: '../../assets/imagenes/ajustes-img-link.png',
      label: 'Ajustes',
      route: '#',
      activeLink: false
    },
    {
      icon: '../../assets/imagenes/salir-img-link.png',
      label: 'Salir',
      route: '#',
      activeLink: false
    }
  ]
  showMenu: boolean = false

  getActiveLink(index: number){
    this.links.forEach(link =>{
      link.activeLink = false
    })
    this.links[index].activeLink = !this.links[index].activeLink
  }
}

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { loginService } from '../services/loginService';
import { FadeInAnimationDirective } from '../directives/GSAP/fade-in.directive';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
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
      route: '/products',
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
      label: 'Orden',
      route: '/orden',
      activeLink: false
    },
    {
      icon: '../../assets/imagenes/ajustes-img-link.png',
      label: 'Ajustes',
      route: '#',
      activeLink: false
    }
  ]
  showMenu: boolean = false
  islogged : string | null = ''
  constructor(private loginService: loginService){}

  OnInit(){
    this.islogged = localStorage.getItem('logged')
    if(this.islogged == 'false'){
      this.loginService.islogged = false
    }else{
      this.loginService.islogged = true
    }

  }

  getActiveLink(index: number){
    this.showMenu = false
    this.links.forEach(link =>{
      link.activeLink = false
    })
    this.links[index].activeLink = !this.links[index].activeLink
  }

  logout(){
    this.loginService.logout()
  }

  rotate(){
    gsap.to('.card', {
      rotation: 360,
      duration: 2,
      ease: 'bounce.out'
     })
  }
}

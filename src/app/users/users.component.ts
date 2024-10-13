import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  orderByOptions: Array<any> = [
    {
      label: 'Fecha',
      icon: '../../assets/imagenes/calendario-icon.svg',
      options: [
        {
          label: 'Mas recientes primero',
          filterActive: false
        },
        {
          label: 'Mas antiguos primero',
          filterActive: false
        }
      ]      
    },
    {
      label: 'Orden alfabetico',
      icon: '../../assets/imagenes/a-z-icon.svg',
      options: [
        {
          label: 'a-z',
          filterActive: false
        },
        {
          label: 'z-a',
          filterActive: false
        }
      ]   
    },
    {
      label: 'Cantidad',
      icon: '../../assets/imagenes/1-9-icon.svg',
      options: [
        {
          label: 'mayor a menor',
          filterActive: false
        },
        {
          label: 'menor a mayor',
          filterActive: false
        }
      ]   
    }
  ]

  constructor(){}

  showInfoClient: boolean = false
  showAddClientModal: boolean = false
  selectedClient : any = {
  }

  users: Array<any> = [
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
   
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },

    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      role: 'admin'
    },
  ]

  

  selectClient(client: any): void{
    this.showInfoClient = true
    this.selectedClient = client
  }
}

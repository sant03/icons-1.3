import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
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

  clients: Array<any> = [
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes',
      id: 2344432,
      adress: 'Calle 56#34 423',
      phone: '+56987654321',
      email: 'santiago@gmail.com'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes'
    }
  ]

  selectClient(client: any): void{
    this.showInfoClient = true
    this.selectedClient = client
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
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
      name: 'Plastidias',
      id: 2344432,
      adress: 'Calle 56#34 423',
      phone: '+56987654321',
      email: 'santiago@gmail.com'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Plastidias'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Plastidias'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Plasticos Universal'
    },
    {
      img: '../../assets/imagenes/user-icon.png',
      name: 'Santiago Potes'
    }
  ]

  categories: Array<any> = [
    {
      name: 'Bolsas de libra',
      products: [
        { 
          img: '',
          name: '1/2 Libra',
          status: 'Por agotarse'
        },
        { 
          name: '1/2 Libra',
          status: 'Por agotarse'
        },
        { 
          name: '1/2 Libra',
          status: 'Por agotarse'
        }
      ]
    },
    {
      name: 'Bolsas de Kilo',
      products: [
        { 
          name: '1 Kilo',
          status: 'Por agotarse'
        },
        { 
          name: '2 Kilos',
          status: 'Por agotarse'
        },
        { 
          name: '3 Kilos',
          status: 'Por agotarse'
        }
      ]
    },
    {
      name: 'Aseo',
      products: [
        { 
          name: 'Basura',
          status: 'Por agotarse'
        },
        { 
          name: 'Basura Jumbo',
          status: 'Por agotarse'
        },
        { 
          name: 'Guantes',
          status: 'Por agotarse'
        },
        { 
          name: 'Basura',
          status: 'Por agotarse'
        },
        { 
          name: 'Basura Jumbo',
          status: 'Por agotarse'
        },
        { 
          name: 'Guantes',
          status: 'Por agotarse'
        }
      ]
    }
  ]

  selectClient(client: any): void{
    this.showInfoClient = true
    this.selectedClient = client
  }
}

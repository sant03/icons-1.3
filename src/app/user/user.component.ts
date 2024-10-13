import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
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
}

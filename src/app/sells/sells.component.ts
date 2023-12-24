import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface PeriodicElement {
  id: number
  customer: string;
  sellcode: number;
  product: string;
  amount: number;
  total: number,
  paystatement: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
  {id: 2, customer: 'Freddy', sellcode: 1 , product: 'IPHONE', amount: 3, total: 3445, paystatement: 'PAGADO'},
];

@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
  styleUrls: ['./sells.component.scss'],
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
export class SellsComponent {

  displayedColumns: string[] = ['customer', 'sellcode', 'product', 'amount', 'total', 'paystatement'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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

  showNewSellModal: boolean = false


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { 
    this.paginator = {} as MatPaginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}

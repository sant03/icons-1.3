import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

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
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})
export class OrdenComponent {
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

  displayedColumns: string[] = ['customer', 'sellcode', 'product', 'amount', 'total', 'paystatement'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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

  pedidos: Array<any> = [
    {
      name: 'Bolsa Libra',
      img: '',
      date: '7/01/2024',
      client: 'Juan'
    },
    {
      name: '2 Kilo',
      img: '',
      date: '7/01/2024',
      client: 'Juan'
    },
    {
      name: 'Basura',
      img: '',
      date: '7/01/2024',
      client: 'Juan'
    },
    {
      name: 'Hielo',
      img: '',
      date: '7/01/2024',
      client: 'Juan'
    },
    {
      name: 'Bolsa Libra',
      img: '',
      date: '7/01/2024',
      client: 'Juan'
    },
    {
      name: '2 Kilo',
      img: '',
      date: '7/01/2024',
      client: 'Juan'
    },
    {
      name: 'Basura',
      img: '',
      date: '7/01/2024',
      client: 'Juan'
    },
    {
      name: 'Hielo',
      img: '',
      date: '7/01/2024',
      client: 'Juan'
    },
    {
      name: 'Bolsa Libra',
      img: '',
      date: '7/01/2024',
      client: 'Juan'
    },
    {
      name: '2 Kilo',
      img: '',
      date: '7/01/2024',
      client: 'Juan'
    },
    {
      name: 'Basura',
      img: '',
      date: '7/01/2024',
      client: 'Juan'
    },
    {
      name: 'Hielo',
      img: '',
      date: '7/01/2024',
      client: 'Juan'
    },
  ]

  selectClient(client: any): void{
    this.showInfoClient = true
    this.selectedClient = client
  }

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

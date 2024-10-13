import { Component } from '@angular/core';
import { loginService } from '../app/services/loginService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ICONS1.3';
  islogged : any = new Boolean(false)
  
  constructor(private loginService: loginService) {

  }

  ngOnInit(){
    this.islogged = this.loginService.islogged
  }
}

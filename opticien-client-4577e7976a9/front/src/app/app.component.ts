import { Component } from '@angular/core';
import { AuthenticationComponent } from './authentication/authentication.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel-layout';
  sideBarOpen !: boolean;
  constructor(public auth: AuthenticationComponent) { }

  sideBarToggler() {
   
      this.sideBarOpen = false;
    
      this.sideBarOpen = true;
  }
  
  getEtat()
  {
    let x =localStorage.getItem("logged");
    if(x!= null)
    {
      return true;
    }else
    {
      return false;
    }
    
  }
}

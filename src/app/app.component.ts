import { Component } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorie';
  constructor(){
    render(
      {
        id:"#myPaypalButtons",
        currency:"USD",
        value:"100.00",
        onApprove: (details)=>{
          alert("Transaction Successful");
        }

      }
      );
  }
}

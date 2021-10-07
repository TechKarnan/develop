import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
  show="red";
  color="red";
  names=["preetham","prajwal","gokul"];

  data=[{name:"Preetham M.N",
        age:22,
        company:"subex"
},
{name:"Nischith",
        age:22,
        company:"Tech Mahindra"
},{name:"manjunath N.K",
age:22,
company:"NTT Data"
}




]

}

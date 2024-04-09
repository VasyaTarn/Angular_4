import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users : string [] = ["Name1", "Name2", "Name3"];

  products : any[] = [
    {
      title: "Samsung",
      price: 7000,
      resolution: 1200
    },
    {
      title: "iPhoneX",
      price: 10000,
      resolution: 1400
    },
    {
      title: "iPhone15",
      price: 17000,
      resolution: 1700
    }
  ]

  show(ind : number)
  {
    alert(ind);
  }
}

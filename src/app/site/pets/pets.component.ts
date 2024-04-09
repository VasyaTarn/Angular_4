import { Component } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {
  pets : any = [
    {
      img: "assets/img/cat-1.jpg",
      name: "Purrsloud",
      species: "Cat",
      age: 7,
      foods: ["wet food", "dry food", "any food"],
    },
    {
      img: "assets/img/cat-2.jpg",
      name: "Meowsalot",
      species: "Cat",
      age: 12,
      foods: ["tuna", "catnip", "celery"],
    },
    {
      img: "assets/img/dog-1.jpg",
      name: "Barksalot",
      species: "Dog",
      age: 16,
      foods: [],
    }

  ] 
}

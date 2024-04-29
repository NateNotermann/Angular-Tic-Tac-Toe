import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template: `
    <p>
      square works!
    </p>
    <p>{{randomNumber}}</p>
  `,
  styles: ``
})
export class SquareComponent {

  randomNumber = Math.random();
}

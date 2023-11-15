import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my new app';
  currentNumber = 0;

  addCounter() {
    this.currentNumber++;
  }
  lessCounter() {
    this.currentNumber--;
  }
  resetCounter() {
    this.currentNumber = 0;
  }
}

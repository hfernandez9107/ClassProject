import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu';

@Component({
  imports: [MenuComponent],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}

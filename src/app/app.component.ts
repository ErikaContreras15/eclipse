import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClienteComponent,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tomate';
}

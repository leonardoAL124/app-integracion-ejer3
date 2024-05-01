import { Component } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {

}

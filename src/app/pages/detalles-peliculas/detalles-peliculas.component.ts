import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-peliculas.component.html',
  styleUrl: './detalles-peliculas.component.css'
})
export class DetallesPeliculasComponent {

  ruta = inject(ActivatedRoute)

  peliculas = [
    {
      id: "p01",
      nombre: 'Matrix',
      fecha: "1999",
      url: "https://consequence.net/wp-content/uploads/2019/03/The-Matrix.jpg"
    },
    {
      id: "p02",
      nombre: 'The Avengers',
      fecha: "2016",
      url: "https://lumiere-a.akamaihd.net/v1/images/eu_disneyplus_avengers-endgame_mob_m_928f44f1.jpeg?region=0,66,800,450"
    },
    {
      id: "p03",
      nombre: 'Depredador',
      fecha: "1985",
      url:"https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/OZOILOQX6BLA3BY4X67QXBOB4E.jpg"
    },
    {
      id: "p04",
      nombre: 'Titanic',
      fecha: "2001",
      url:"https://mitsloanreview.mx/wp-content/uploads/2023/02/james-cameron-secreto-titanic-cambio-climatico.jpg"
    },
    {
      id: "p05",
      nombre: 'Jhon Wick',
      fecha: "2014",
      url:"https://www.mundodeportivo.com/alfabeta/hero/2023/10/1366_2000-2.1696580965.0154.jpeg?width=768&aspect_ratio=16:9&format=nowebp"
    },
  ]

  pelicula:any
  id:any
  ngOnInit(){
    this.ruta.params.subscribe(p=>{
      console.log(p['idPeliculas']);
      this.id = p['idPeliculas']

      this.peliculas.forEach(element => {
        if(element.id == this.id){
          this.pelicula = element

        }
      });
    })
  }
}

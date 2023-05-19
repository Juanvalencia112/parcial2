import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {



  recetas: Array<Receta>=[];

  constructor(private recetaService: RecetaService) { }



  getRecetas(){

    return this.recetaService.getRecetas().subscribe(recetas=>this.recetas=recetas);

  }



  getCalificacionPromedio(){
    return (
      this.recetas.reduce((acc, receta) => acc + receta.estrellas, 0) /
      this.recetas.length)
  }


  getTotalOpiniones(){
    return this.recetas.filter(receta=>receta.cantidadOpiniones).length
  }

  ngOnInit() {
  }

}

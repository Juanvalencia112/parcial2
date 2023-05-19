export class Receta {

id: number;
nombre: string;
descripcion:string;
dificultad:string;
duracion:number;
ingredientes:string;
categoria:string;
imagen:string;
estrellas:number;
cantidadOpiniones:number;
autorReceta:string;

constructor(id: number,
  nombre: string,
  descripcion:string,
  dificultad:string,
  duracion:number,
  ingredientes:string,
  categoria:string,
  imagen:string,
  estrellas:number,
  cantidadOpiniones:number,
  autorReceta:string)
  {
    this.id=id;
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.dificultad=dificultad;
    this.duracion=duracion;
    this.ingredientes=ingredientes;
    this.categoria=categoria;
    this.imagen=imagen;
    this.estrellas=estrellas;
    this.cantidadOpiniones=cantidadOpiniones;
    this.autorReceta=autorReceta;

}


}

/*"id": 1,
"nombre": "Adobo de pollo italiano de la casa",
"descripcion": "Este adobo de pollo con aderezo italiano es una forma súper simple pero deliciosa de agregar sabor antes de asar a la parrilla.",
"dificultad": "Media",
"duracion": 120,
"ingredientes": "pollo|cerveza|sal|pimienta|cebolla",
"categoria": "carnes",
"imagen": "https://raw.githubusercontent.com/VivianGomez/ImagenesParcialDSE/main/recetas/pollo.PNG",
"estrellas": 4.5,
"cantidadOpiniones": 150,
"autorReceta": "Laure Martoun" */

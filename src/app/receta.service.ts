import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Receta } from './receta';
import{HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RecetaService {


private apiUrl=environment.baseUrl+"recetas.json";

constructor(private http:HttpClient) { }


getRecetas (): Observable <Receta[]>{


  return this.http.get<Receta[]>(this.apiUrl);

}

}

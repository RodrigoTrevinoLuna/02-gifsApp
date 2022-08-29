import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:     string    = '3OzNY7mzdAD3UfkTqKFWk50Eht6WgzWX';
  private urlService: string    = 'https://api.giphy.com/v1/gifs'
  private _historial: string[]  = [];

  
  public resultados: Gif[] = []


  get historial(){
    return [...this._historial]; //Regresa un Nuevo Arreglo
  }

  constructor(private http:HttpClient){
    //Solo se ejecuta la primera vez
    // if(localStorage.getItem('historial')){
    //   // Cambia el JSON DEL LOCALSTORAGE = HISTORIAL A UN ARRAY
    //   // para imprimirlo en el sidebar
    //   this._historial = JSON.parse( (localStorage.getItem('historial')!) ) 
    // }
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []
  }

  buscarGifs( query: string = '' ){  
    query = query.trim().toLowerCase();
    if(!this._historial.includes(query)){  // Validacion para no repetir Elementos dentro del buscador
      // busca el item que NO lo incluye dentro del array (Repetido) se ejecuta el if
      //ejecuta si el item *query* no esta Repetido dentro del Array _historial[]
      this._historial.unshift(query);//Agrega un item al principio array
      this._historial = this._historial.splice(0,10); // solo Permite tener el array de 0 a 10 item

      localStorage.setItem('historial', JSON.stringify( this._historial) );

    }
    // console.log(this._historial);
    
    const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q', query)

    this.http.get<SearchGifsResponse>(`${this.urlService}/search`, {params})
    .subscribe( ( resp: SearchGifsResponse ) => {
      // console.log(resp.data[0]);
      this.resultados = resp.data
      localStorage.setItem('resultados', JSON.stringify( this.resultados) );
    })

  }
}

// ... Rompe la Referencia utilizando el Operado Spread
//unshift Metodo en el cual agrega un item al principio del array
// splice Methodo que sirve para solo limitar la cantidad de item del array
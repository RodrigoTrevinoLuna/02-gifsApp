import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private GifsService:GifsService){

  }
  
  buscar(){
  const valor = this.txtBuscar.nativeElement.value;
  // console.log(valor);


    if( valor.trim().length === 0){ //Validacion para que no se envie el valor vacio
      return;
    }

  this.GifsService.buscarGifs(valor);
  
  this.txtBuscar.nativeElement.value = '';
  }
}
// ! non-null assertion operator Verifica que el objeto no es nulo
// ElementRef elementoDom del HTML
import { Component, NgModule} from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  get historial(){
    return this.GifsService.historial;
  }

  constructor(private GifsService:GifsService) { }
  
  buscar(termino: string){
    this.GifsService.buscarGifs(termino);
    
  }


}

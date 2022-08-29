import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent{

  get resultados(){
    return this.GifsService.resultados;
  }

  constructor(private GifsService:GifsService){}

}

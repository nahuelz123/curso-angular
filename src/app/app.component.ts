import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;//si la declaro con ? no es necesario usarla, ya que se setea como null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Mi primer App angular';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {//se inicializa cuando se carga por primera vez la pagina
    this.ArregloTarjetas=[
      {titulo:'Video 1', subtitulo: 'subtitulo video 1'},
      {titulo:'Video 2', subtitulo: 'subtitulo video 2'},
      {titulo:'Video 3', subtitulo: 'subtitulo video 3'},
    ]
  }
 
}

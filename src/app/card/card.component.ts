import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image:string="https://www.mangajam.com/wp-content/uploads/part231/how_draw_ichigo-final_bleach.jpg";
public Titulo:string= "curso de angular con interpolacion";
constructor(){ }
   ngOnInit(): void {
    
   }

}

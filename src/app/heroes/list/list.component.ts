import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[]=['Spiderman','Ironman','Hulk','Doom','Strange'];
  public deteleHero?:string;

  removeLastHero():void{
    this.deteleHero = this.heroNames.pop();
  }

}

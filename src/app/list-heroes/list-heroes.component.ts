import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss'],
})
export class ListHeroesComponent {

  @Input()characters?: any;

  constructor() { 
  }

  ngOnInit() {
  }

}

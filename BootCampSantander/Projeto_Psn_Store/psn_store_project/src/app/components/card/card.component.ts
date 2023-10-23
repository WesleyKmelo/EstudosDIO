import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() gameCover:string="";
  @Input() label: string="";
  @Input() tipoGame:string="Digital Game";
  @Input() valorGame:string="R$ 9,90";
  @Input() titleConsole:string=""


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input } from '@angular/core';
import { Information } from '../../informations';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-card',
  standalone:true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports:[CommonModule, RouterLink]
})
  export class CardComponent  {
  @Input() TabInfo!:Information;

  }

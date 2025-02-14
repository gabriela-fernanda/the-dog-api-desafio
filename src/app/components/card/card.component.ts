import { Component, Input } from '@angular/core';
import {Dog} from 'src/app/models/dogData'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() dog!: Dog;


}

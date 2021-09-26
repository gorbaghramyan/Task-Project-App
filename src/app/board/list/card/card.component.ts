import { Component, Input, OnInit } from '@angular/core';
import { CardActionsService } from 'src/app/services/cardActions.service';
import { Card } from 'src/app/utilities/classes/card.class';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private cardService: CardActionsService) { }
  @Input() card: Card = {} as Card;
  ngOnInit(): void {
  };

  onCardDelete() {
    this.cardService.cardDelete(this.card.index)
  };

}

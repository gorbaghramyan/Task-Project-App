import { Injectable, Output, EventEmitter } from '@angular/core';

import { Card } from '../utilities/classes/card.class';

@Injectable()
export class CardActionsService {

  @Output() cardDeletionEvent: EventEmitter<Card[]> = new EventEmitter<Card[]>();

  cards: Card[] = [new Card('To do first card', 'Desc', [], Date.now())];

  constructor () { };

  cardCreate (cardName: string) {
    if (cardName) {
      this.cards.push(new Card(cardName, 'Desc', [], Date.now()));
      cardName = '';
    }
  };

  cardDelete (index: number) {
    this.cards = this.cards.filter((card) => {
      return index !== card.index
    });
    this.cardDeletionEvent.emit(this.cards)
  };

  get cardData () {
    return this.cards
  }
}

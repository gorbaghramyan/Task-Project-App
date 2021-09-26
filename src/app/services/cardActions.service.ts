import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';

import { Card } from '../utilities/classes/card.class';

@Injectable()
export class CardActionsService {

  cardDeletionSubject = new Subject();

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
    this.cardDeletionSubject.next(this.cards)
  };

  get cardData () {
    return this.cards
  }
}

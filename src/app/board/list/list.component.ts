import { Card } from './../../utilities/classes/card.class';
import { ICard } from './../../utilities/interfaces/card.interface';
import { List } from '../../utilities/classes/list.class';
import { IList } from './../../utilities/interfaces/list.interface';
import { Component, Input, OnInit } from '@angular/core';
import { DragNDrop } from 'src/app/utilities/abstracts/dragndrop.abstract.class';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends DragNDrop implements IList, OnInit, List {
  @Input() cards: ICard[] = [] as ICard[];
  @Input() name: string = '';
  newCardName: string = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  createCard() {
    if (this.newCardName) {
      this.cards.push(new Card(this.newCardName, 'Desc', []));
      this.newCardName = '';
    }
  }

  deleteCard(i: number) {
    this.cards = this.cards.filter((el, i_) => {
      return i !== i_
    })
  };
}
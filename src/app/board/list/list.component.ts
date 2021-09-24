import { List } from './../../models/list.component';
import { Card } from './../../models/card.component';
import { ICard } from './../../interfaces/card.interface';
import { IList } from './../../interfaces/list.interface';
import { Component, Input, OnInit } from '@angular/core';
import { DragNDrop } from 'src/app/abstracts/dragndrop.abstract';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends DragNDrop implements IList, OnInit, List {
  @Input() cards: ICard[] = [] as ICard[];
  name: string = '';

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

  createCard() {
    if (this.name) {
      this.cards.push(new Card(this.name, 'Desc', []));
      this.name = '';
    }
  }

  deleteCard(i: number) {
    this.cards = this.cards.filter((el, i_) => {
      return i !== i_
    })
  };
}
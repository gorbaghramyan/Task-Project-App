import { Card } from './../../utilities/classes/card.class';
import { ICard } from './../../utilities/interfaces/card.interface';
import { List } from '../../utilities/classes/list.class';
import { IList } from './../../utilities/interfaces/list.interface';
import { Component, Input, OnInit } from '@angular/core';
import { DragNDrop } from 'src/app/utilities/abstracts/dragndrop.abstract.class';
import { CardActionsService } from 'src/app/services/cardActions.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[CardActionsService]
})
export class ListComponent extends DragNDrop implements IList, OnInit, List {
  @Input() cards: ICard[] = [] as ICard[];
  @Input() name: string = '';
  newCardName: string = '';

  constructor(private cardService: CardActionsService) {
    super();
  };

  ngOnInit(): void {
    this.cards = this.cardService.cardData;
    this.cardService.cardDeletionEvent.subscribe((data)=>{
      this.cards = data
    })
  };

  onCardCreate() {    
    this.cardService.cardCreate(this.newCardName)
  };


  


}
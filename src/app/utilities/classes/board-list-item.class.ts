import { AList } from '../abstract-classes/list.abstract.class';
import { IDragAndDroppable } from '../interfaces/drag-n-drop.interface.class';
import { Card } from './card.class';

export class BoardListItem extends AList<Card> implements IDragAndDroppable{
  id!: number;
  collection: Card[] = [];


  drag (): void {
  }

  drop (): void {
  }

  grab (): void {
  }

}

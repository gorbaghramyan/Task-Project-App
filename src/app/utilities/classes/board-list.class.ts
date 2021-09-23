import { ABoard } from '../abstract-classes/board.abstract.class';
import { IBoardActions } from '../interfaces/board-actions.interface';
import { BoardListItem } from './board-list-item.class';

class BoardList extends ABoard<BoardListItem> implements IBoardActions {
  id!: number;
  collection: BoardListItem [] = [];

  add (listItem: BoardListItem): BoardListItem[] {
    this.collection.push(listItem);
    return [...this.collection];
  }

  remove (listItem: BoardListItem): BoardListItem[] {
    return this.collection.filter((item) => {
      return item.id !== listItem.id;
    })
  }
}

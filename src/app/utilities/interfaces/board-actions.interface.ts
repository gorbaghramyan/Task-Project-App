import { BoardListItem } from '../classes/board-list-item.class';

export interface IBoardActions {
  add (listItem: BoardListItem): BoardListItem[],
  remove (listItem: BoardListItem): BoardListItem[],
}

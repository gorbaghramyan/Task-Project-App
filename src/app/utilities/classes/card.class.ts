import { IDragAndDroppable } from '../interfaces/drag-n-drop.interface.class';
import { ACard } from '../abstract-classes/card.abstact.class';

export class Card extends ACard implements IDragAndDroppable {
  id!: number
  description: string = '';
  subject: string = '';
  comments: string[] = []; // Must be changed to Comments array

  drag (): void {
  }

  drop (): void {
  }

  grab (): void {
  }


}

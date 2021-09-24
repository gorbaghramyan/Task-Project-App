import { ICard } from '../interfaces/card.interface';
import { IList } from '../interfaces/list.interface';

export class List implements IList {
    name: string = '';
    cards: ICard[] = [] as ICard[];

    constructor(name: string, cards: ICard[]) {
        this.name = name;
        this.cards = cards;
    }
}
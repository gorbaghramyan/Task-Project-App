import { ICard } from './../interfaces/card.interface';
import { IList } from '../interfaces/list.interface';

export class List implements IList {
    cards: ICard[] = [] as ICard[];
    name: string = '';

    constructor(name: string, cards: ICard[]) {
        this.cards = cards;
        this.name = name;
    }
}
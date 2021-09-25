import { ICard } from '../interfaces/card.interface';

export class Card implements ICard {
    constructor(
        public subject:string, 
        public description:string,
        public comments:string [],
        public index:number) { }
}
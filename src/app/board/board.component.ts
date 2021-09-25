import { Card } from './../utilities/classes/card.class';
import { List } from '../utilities/classes/list.class';
import { IList } from './../utilities/interfaces/list.interface';
import { IBoard } from '../utilities/interfaces/board.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, IBoard {
  lists: IList[] = [
    new List('To do', [new Card('To do first card', 'Desc', [])]),
    new List('Doing', [new Card('Doing first card', 'Desc', [])]),
    new List('Done', [new Card('Done first card', 'Desc', [])]),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addList(name: string): void {
    if (name) {
      this.lists.push(new List(name, []));
    }
  }
}

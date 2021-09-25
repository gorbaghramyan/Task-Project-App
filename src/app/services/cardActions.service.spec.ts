import { TestBed } from '@angular/core/testing';

import { CardActionsService } from './cardActions.service';

describe('Card.ActionsService', () => {
  let service: CardActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

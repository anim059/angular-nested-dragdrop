import { TestBed } from '@angular/core/testing';

import { DragdropListService } from './dragdrop-list.service';

describe('DragdropListService', () => {
  let service: DragdropListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragdropListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

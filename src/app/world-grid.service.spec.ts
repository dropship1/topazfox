import { TestBed } from '@angular/core/testing';

import { WorldGridService } from './world-grid.service';

describe('WorldGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldGridService = TestBed.get(WorldGridService);
    expect(service).toBeTruthy();
  });
});

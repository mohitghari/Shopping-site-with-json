import { TestBed } from '@angular/core/testing';

import { ManageShoppingCartService } from './manage-shopping-cart.service';

describe('ManageShoppingCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageShoppingCartService = TestBed.get(ManageShoppingCartService);
    expect(service).toBeTruthy();
  });
});

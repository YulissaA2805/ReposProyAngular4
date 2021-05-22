import { TestBed } from '@angular/core/testing';

import { EntradasPrincipalService } from './entradas-principal.service';

describe('EntradasPrincipalService', () => {
  let service: EntradasPrincipalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradasPrincipalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

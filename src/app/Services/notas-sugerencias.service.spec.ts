import { TestBed } from '@angular/core/testing';

import { NotasSugerenciasService } from './notas-sugerencias.service';

describe('NotasSugerenciasService', () => {
  let service: NotasSugerenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasSugerenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

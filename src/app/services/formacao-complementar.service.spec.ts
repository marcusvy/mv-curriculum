import { TestBed } from '@angular/core/testing';

import { FormacaoComplementarService } from './formacao-complementar.service';

describe('FormacaoComplementarService', () => {
  let service: FormacaoComplementarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormacaoComplementarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

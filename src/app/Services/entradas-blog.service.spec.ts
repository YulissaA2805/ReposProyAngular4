import { TestBed } from '@angular/core/testing';

import { EntradasBlogService } from './entradas-blog.service';

describe('EntradasBlogService', () => {
  let service: EntradasBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradasBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

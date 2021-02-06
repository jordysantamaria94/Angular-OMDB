import { TestBed } from '@angular/core/testing';

import { OmdbService } from './omdb.service';

import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('OmdbService', () => {
  let service: OmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(OmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

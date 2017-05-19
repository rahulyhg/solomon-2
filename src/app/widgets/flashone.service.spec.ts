import { TestBed, inject } from '@angular/core/testing';
import { FlashoneService } from './flashone.service';

describe('FlashoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlashoneService]
    });
  });

  it('should ...', inject([FlashoneService], (service: FlashoneService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { ProcesshttpmessageService } from './processhttpmessage.service';

describe('ProcesshttpmessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcesshttpmessageService = TestBed.get(ProcesshttpmessageService);
    expect(service).toBeTruthy();
  });
});

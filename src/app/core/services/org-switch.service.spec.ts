import { TestBed } from '@angular/core/testing';

import { OrgSwitchService } from './org-switch.service';

describe('OrgSwitchService', () => {
  let service: OrgSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

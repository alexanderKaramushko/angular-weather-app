import { TestBed } from '@angular/core/testing';

import { ENVIRONMENT, EnvironmentService } from './environment.service';

let environmentService: EnvironmentService;

describe('Test environment service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EnvironmentService,
        {
          provide: ENVIRONMENT,
          useValue: {
            apiUrl: 'www.example.com/v1',
            production: true,
          },
        },
      ],
    });
  });

  it('should return environment value', () => {
    environmentService = TestBed.inject(EnvironmentService);

    expect(environmentService.getValue('production')).toBe(true);
  });

  it('should throw error if environment is undefined', () => {
    TestBed.overrideProvider(ENVIRONMENT, { useValue: null });

    environmentService = TestBed.inject(EnvironmentService);

    expect(() => environmentService.getValue('apiUrl')).toThrow(new Error('No environment'));
  });
});

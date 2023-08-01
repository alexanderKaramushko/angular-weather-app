import { TestBed } from '@angular/core/testing';

import { ENVIRONMENT, EnvironmentService } from './environment.service';

describe('Test environment service', () => {
  let service: EnvironmentService;

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
    service = TestBed.inject(EnvironmentService);

    expect(service.getValue('production')).toBe(true);
  });

  it('should throw error if environment is undefined', () => {
    TestBed.overrideProvider(ENVIRONMENT, { useValue: null });

    service = TestBed.inject(EnvironmentService);

    expect(() => service.getValue('apiUrl')).toThrow(new Error('No environment'));
  });
});

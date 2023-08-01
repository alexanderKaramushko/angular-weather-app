import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';

import { Environment } from 'src/environments/model';

export const ENVIRONMENT = new InjectionToken<Environment>('environment.service');

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {

  private readonly environment: Environment | undefined;

  constructor(
    @Optional() @Inject(ENVIRONMENT) environment: Environment,
    @Optional() @SkipSelf() parentEnvironment: EnvironmentService,
  ) {
    if (parentEnvironment) {
      throw new Error('EnvironmentService already exists at root');
    }

    this.environment = environment !== null ? environment : undefined;
  }

  getValue(key: keyof Environment) {
    if (!this.environment) {
      throw new Error('No environment');
    }

    return this.environment[key];
  }

  static

}

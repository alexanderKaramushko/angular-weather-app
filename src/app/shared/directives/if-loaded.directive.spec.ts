/* eslint-disable max-classes-per-file */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IfLoadedDirective } from './if-loaded.directive';

@Component({
  selector: 'test-loaded-component',
  template: `
    <div *ifLoaded="true">
      <span data-testid="content">content</span>
    </div>
  `,
})
class TestLoadedComponent { }

@Component({
  selector: 'test-loading-component',
  template: `
    <div *ifLoaded="false; loader: loader">
      <span data-testid="content">content</span>
    </div>
    <ng-template #loader>
      <span data-testid="loader">Loading...</span>
    </ng-template>
  `,
})
class TestLoadingComponent { }

describe('IfLoadedDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfLoadedDirective, TestLoadedComponent, TestLoadingComponent],
    });
  });

  it('should be visible if loaded', () => {
    const fixture = TestBed.createComponent(TestLoadedComponent);

    const { debugElement } = fixture;

    fixture.detectChanges();

    const content = debugElement.query(
      By.css('[data-testid="content"]'),
    );

    expect(content).toBeTruthy();
  });

  it('should be show loading', () => {
    const fixture = TestBed.createComponent(TestLoadingComponent);

    const { debugElement } = fixture;

    fixture.detectChanges();

    const content = debugElement.query(
      By.css('[data-testid="content"]'),
    );

    const loader = debugElement.query(
      By.css('[data-testid="loader"]'),
    );

    expect(content).toBeFalsy();
    expect(loader).toBeTruthy();
  });
});

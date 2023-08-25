import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { LocalStorageService } from '../../services/local-storage.service';
import { AppState } from '../core.store';
import { changeThemeAction } from './settings.actions';
import { SETTINGS_KEY, SettingsEffects } from './settings.effects';
import { SettingsState, Theme } from './settings.model';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe('SettingsEffects', () => {
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let store: jasmine.SpyObj<Store<AppState>>;

  beforeEach(() => {
    localStorageService = jasmine.createSpyObj('LocalStorageService', [
      'setItem',
    ]);
    store = jasmine.createSpyObj('store', ['pipe']);
  });

  it('should call methods on LocalStorageService', () => {
    testScheduler.run((helpers) => {
      const { cold } = helpers;

      const settings: SettingsState = {
        theme: Theme.DEFAULT,
      };

      store.pipe.and.returnValue(of(settings));

      const persistAction = changeThemeAction({ theme: Theme.DEFAULT });
      const source = cold('a', { a: persistAction });
      const actions = new Actions(source);

      const effect = new SettingsEffects(
        actions,
        store,
        localStorageService,
      );

      effect.persistSettings$.subscribe(() => {
        expect(localStorageService.setItem).toHaveBeenCalledWith(
          SETTINGS_KEY,
          settings,
        );
      });
    });
  });

});

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';

import { AppState, settingsFeatureSelector } from '../core.store';
import { changeThemeAction } from './settings.actions';

export const SETTINGS_KEY = 'settings';

@Injectable()
export class SettingsEffects {

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private localStorageService: LocalStorageService,
  ) { }

  persistSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeThemeAction),
      withLatestFrom(this.store.pipe(select(settingsFeatureSelector))),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      tap(([action, settings]) => {
        this.localStorageService.setItem(SETTINGS_KEY, settings);
      }),
    ), { dispatch: false })

}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, tap, withLatestFrom } from 'rxjs';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { AppState, settingsFeatureSelector } from 'src/app/core/store/core.store';

import { changeLanguageAction, changeThemeAction } from './settings.actions';
import { languageSelector } from './settings.selectors';

export const SETTINGS_KEY = 'settings';

@Injectable()
export class SettingsEffects {

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private localStorageService: LocalStorageService,
    private translationService: TranslateService,
  ) { }

  persistSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeThemeAction, changeLanguageAction),
      withLatestFrom(this.store.pipe(select(settingsFeatureSelector))),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      tap(([action, settings]) => {
        this.localStorageService.setItem(SETTINGS_KEY, settings);
      }),
    ), { dispatch: false })

  setLanguage$ = createEffect(() =>
    this.store.pipe(
      select(languageSelector),
      distinctUntilChanged(),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      tap((language) => {
        this.translationService.use(language);
      }),
    ), { dispatch: false })

}

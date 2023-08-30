import { createAction, props } from '@ngrx/store';

import { Language, Theme } from './settings.model';

export const changeThemeAction = createAction(
  '[Settings] Change theme',
  props<{ theme: Theme }>(),
);

export const changeLanguageAction = createAction(
  '[Settings] Change language',
  props<{ language: Language }>(),
);

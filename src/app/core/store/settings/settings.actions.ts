import { createAction, props } from '@ngrx/store';

import { Theme } from './settings.model';

export const changeThemeAction = createAction(
  '[Settings] Change theme',
  props<{ theme: Theme }>(),
);

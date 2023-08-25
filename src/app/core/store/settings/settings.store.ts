import { createReducer, on } from '@ngrx/store';

import { changeThemeAction } from './settings.actions';
import { SettingsState, Theme } from './settings.model';

export const settingsFeatureKey = 'settings';

export const initialState: SettingsState = {
  theme: Theme.LIGHT,
};

export const settingsReducer = createReducer(
  initialState,
  on(changeThemeAction, (state, action) => ({ ...state, theme: action.theme })),
);

export const selectForecast = (state: SettingsState) => state.theme;

import { createReducer, on } from '@ngrx/store';

import { changeLanguageAction, changeThemeAction } from './settings.actions';
import { Language, SettingsState, Theme } from './settings.model';

export const settingsFeatureKey = 'settings';

export const initialState: SettingsState = {
  language: Language.RU,
  theme: Theme.LIGHT,
};

export const settingsReducer = createReducer(
  initialState,
  on(changeThemeAction, (state, action) => ({ ...state, theme: action.theme })),
  on(changeLanguageAction, (state, action) => ({ ...state, language: action.language })),
);

export const selectForecast = (state: SettingsState) => state.theme;

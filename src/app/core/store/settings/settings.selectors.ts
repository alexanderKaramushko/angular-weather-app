import { createSelector } from '@ngrx/store';

import { AppState, settingsFeatureSelector } from 'src/app/core/store/core.store';

import { Language, SettingsState, Theme } from './settings.model';

export const themeSelector = createSelector<AppState, SettingsState, Theme>(
  settingsFeatureSelector,
  (settings) => settings.theme,
);

export const languageSelector = createSelector<AppState, SettingsState, Language>(
  settingsFeatureSelector,
  (settings) => settings.language,
);

import { createSelector } from '@ngrx/store';

import { AppState, settingsFeatureSelector } from 'src/app/core/store/core.store';

import { SettingsState, Theme } from './settings.model';

export const themeSelector = createSelector<AppState, SettingsState, Theme>(
  settingsFeatureSelector,
  (settings) => settings.theme,
);

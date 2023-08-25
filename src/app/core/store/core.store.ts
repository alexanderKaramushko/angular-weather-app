import { ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';

import { persistReducer } from './meta-reducers/persist.reducer';
import { SettingsState, SettingsStore } from './settings/settings.model';
import { settingsFeatureKey, settingsReducer } from './settings/settings.store';

export type AppState = SettingsStore;

export const coreReducers: ActionReducerMap<AppState> = {
  settings: settingsReducer,
};

export const coreMetaReducers: MetaReducer<AppState>[] = [
  persistReducer,
];

export const settingsFeatureSelector = createFeatureSelector<SettingsState>(settingsFeatureKey);

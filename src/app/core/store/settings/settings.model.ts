export enum Theme {
  DEFAULT = 'default-theme',
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
  NATURE = 'nature-theme',
}

export type SettingsState = {
  theme: Theme;
}

export interface SettingsStore {
  settings: SettingsState;
}

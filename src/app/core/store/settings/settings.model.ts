export enum Theme {
  DEFAULT = 'default-theme',
  LIGHT = 'light-theme',
  DARK = 'black-theme',
  NATURE = 'nature-theme',
}

export enum Language {
  EN = 'en',
  RU = 'ru',
}

export type SettingsState = {
  theme: Theme;
  language: Language;
}

export interface SettingsStore {
  settings: SettingsState;
}

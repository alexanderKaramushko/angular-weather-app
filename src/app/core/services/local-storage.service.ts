/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';

const APP_PREFIX = 'WEATHER-';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  static loadInitialState() {
    return Object.entries(window.localStorage).reduce((state, [key, value]) => {
      if (key.includes(APP_PREFIX)) {
        return {
          ...state,
          [key.replace(APP_PREFIX, '')]: JSON.parse(value),
        };
      }

      return state;
    }, {});
  }

  setItem(key: string, value: unknown) {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`) || '{}');
  }

  removeItem(key: string) {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }

}

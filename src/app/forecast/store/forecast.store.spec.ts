import { Forecast } from '../model/forecast.model';
import { loadForecast } from './forecast.actions';
import * as forecastStore from './forecast.store';

describe('Test forecast reducer', () => {
  it('should return default initial state', () => {
    const { initialState } = forecastStore;
    const action = {
      type: 'Unknown',
    };
    const state = forecastStore.forecastReducer(initialState, action);

    expect(state).toBe(initialState);
  });

  it('should retrieve forecast', () => {
    const { initialState } = forecastStore;

    const forecast = new Forecast(
      50,
      50,
      undefined,
      undefined,
      {
        is_day: 1,
        temperature: 30,
        time: '2023-08-08T12:00',
        weathercode: 1,
        winddirection: 300,
        windspeed: 15,
      },
    );

    const newState = {
      forecast,
    };

    const action = loadForecast(forecast);
    const state = forecastStore.forecastReducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialState);
  });
});

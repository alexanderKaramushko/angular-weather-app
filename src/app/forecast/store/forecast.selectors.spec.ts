import { Forecast } from '../model/forecast.model';
import { forecast as forecastSelector } from './forecast.selectors';

describe('Test forecast selectors', () => {
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

  const state = {
    forecast,
  };

  it('should return forecast', () => {
    const result = forecastSelector.projector(state);

    expect(result).toEqual(forecast);
  });
});

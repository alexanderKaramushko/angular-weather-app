/* eslint-disable camelcase */

/**
 * @description Высота скорости ветра над землей
 */
export type HeightAboveGround = 10 | 80 | 120 | 180;
export type Windspeed = `windspeed_${HeightAboveGround}`;

/**
 * @description Уровень облачности по высоте над уровнем моря
 */
export type CloudCoverLevel = 'low' | 'mid' | 'high';
export type CloudCover = `cloudcover_${CloudCoverLevel}`;

export type Time = string[];

/**
 * @description Индекс отображает часы от 0 до 167
 */
export type Temperature = number[];

/**
 * @description Список выбранных hourly-переменных с описанием unit-типа
 */
export type HourlyUnits = Record<
  | 'temperature_2m'
  | 'pressure_msl'
  | 'precipitation'
  | Windspeed
  | CloudCover,
  string
>

/**
 * @description Список выбранных hourly-переменных со значениями
 */
export type Hourly = {
  temperature_2m?: Temperature[];
  time?: Time[];
}

export type CurrentWeather = {
  is_day: number;
  temperature: number;
  /**
   * @description format: 2023-08-08T12:00
   */
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
}

export class Forecast {

  constructor(
    public longitude: Longitude,
    public latitude: Latitude,
    public hourly?: Hourly,
    public hourly_units?: HourlyUnits,
    public current_weather?: CurrentWeather,
    public elevation?: number,
    public generationtime_ms?: number,
    public timezone?: string,
    public timezone_abbreviation?: string,
    public utc_offset_seconds?: number,
  ) { }

}

import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';

import { SharedModule } from '../../../shared/shared.module';
import { Forecast } from '../../model/forecast.model';
import { ForecastComponent } from './forecast.component';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  const initialState = {
    forecast: new Forecast(
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
    ),
  };

  function findById(id: string) {
    return fixture.debugElement.query(By.css(`[data-testid="${id}"]`));
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastComponent],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    });
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use map mode', () => {
    findById('mode-button').triggerEventHandler('click');

    fixture.whenStable().then(() => {
      findById('mode-map').triggerEventHandler('click');

      expect(findById('map')).toBeTruthy();
    });
  });

  it('should use inputs mode', fakeAsync(() => {
    findById('mode-button').triggerEventHandler('click');

    fixture.whenStable().then(() => {
      findById('mode-inputs').triggerEventHandler('click');

      fixture.detectChanges();

      expect(findById('inputs')).toBeTruthy();
    });
  }));
});

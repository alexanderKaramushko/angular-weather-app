import { TestScheduler } from 'rxjs/testing';

import { Notification, NotificationsService, NotificationType } from './notifications.service';

/**
 * Каждое буквенное или числовое обозначение продвигает фрейм на 1 {@link https://rxjs.dev/guide/testing/marble-testing#time-progression-syntax}
 */
const FRAME_ADVANCE = 1;

const THROTTLE_FRAME = 105;
const THROTTLE_FRAME_WITH_ADVANCE = THROTTLE_FRAME - FRAME_ADVANCE;

const INTERVAL_DELAY = 2000;
const INTERVAL_DELAY_WITH_ADVANCE = 2000 - FRAME_ADVANCE;

/**
 * @todo Добавить тест+реализацию на добавление начального уведомления
 */
describe('NotificationsService', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      // eslint-disable-next-line jasmine/no-expect-in-setup-teardown
      expect(actual).toEqual(expected);
    });
  });

  it('should pipe and remove notifications in interval', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;

      const notification1: Notification = {
        message: 'notification1',
        type: NotificationType.SUCCESS,
      };

      const notification2: Notification = {
        message: 'notification2',
        type: NotificationType.SUCCESS,
      };

      const values: Record<string, Notification[]> = {
        a: [notification1],
        b: [notification2],
      };

      const source = NotificationsService.createNotifierObservable(
        cold(`${THROTTLE_FRAME_WITH_ADVANCE}ms a ${THROTTLE_FRAME_WITH_ADVANCE}ms b`, values),
      );

      const expected = `${INTERVAL_DELAY_WITH_ADVANCE + THROTTLE_FRAME * 2}ms c ${INTERVAL_DELAY - FRAME_ADVANCE}ms d ${INTERVAL_DELAY - FRAME_ADVANCE}ms e`;

      expectObservable(source).toBe(expected, {
        c: [notification1, notification2],
        d: [notification2],
        e: [],
      });
    });
  });
});

/**
 * @description Тестирование marble diagrams в RxJS
 */

import { concatMap, delay, map, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

it('test map + delay', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });

  testScheduler.run((helpers) => {
    const { cold, time, expectObservable } = helpers;

    const values = {
      a: 2,
      b: 4,
      c: 6,
    };

    const t = time('-|');
    const input = '   -a-b-c-|';
    const expected = '--a-b-c|';

    const result = cold(
      input,
      {
        a: 1,
        b: 2,
        c: 3,
      },
    ).pipe(
      delay(t),
      map((x) => x * 2),
    );

    expectObservable(result).toBe(expected, values);
  });
});

it('test concatMap + delay', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });

  testScheduler.run((helpers) => {
    const { cold, expectObservable } = helpers;

    const input = '-a-b-c|';
    const expected = '-- 9ms a 9ms b 9ms (c|)';

    const result = cold(input).pipe(
      concatMap((d) => of(d).pipe(
        delay(10),
      )),
    );

    expectObservable(result).toBe(expected);
  });
});

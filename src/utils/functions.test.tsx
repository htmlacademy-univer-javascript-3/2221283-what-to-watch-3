import { describe } from 'vitest';
import { convertRatingToText, convertTime } from './functions';

describe.each([
  { rating: 0, expected: 'Bad' },
  { rating: 1, expected: 'Bad' },
  { rating: 2, expected: 'Bad' },
  { rating: 3, expected: 'Normal' },
  { rating: 4, expected: 'Normal' },
  { rating: 5, expected: 'Good' },
  { rating: 6, expected: 'Good' },
  { rating: 7, expected: 'Good' },
  { rating: 8, expected: 'Very good' },
  { rating: 9, expected: 'Very good' },
  { rating: 10, expected: 'Awesome' },
])('convertRatingToText tests', ({ rating, expected }) => {
  test(`should from ${rating} return ${expected}`, () => {
    const result = convertRatingToText(rating);
    expect(result).toBe(expected);
  });
});

describe.each([
  { time: 0, expected: '0h 0m' },
  { time: 99, expected: '1h 39m' },
  { time: 60, expected: '1h 0m' },
])('convertTime tests', ({ time, expected }) => {
  test(`should from ${time} return ${expected}`, () => {
    const result = convertTime(time);
    expect(result).toBe(expected);
  });
});

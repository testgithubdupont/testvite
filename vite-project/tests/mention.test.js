import { it, expect, describe } from 'vitest';
import { mention } from '../src/mention';


describe('mention AB', () => {
    it.each([
      { scenario: 'mark < 10', mark: 9, result: false },
      { scenario: 'mark = 10', mark: 10, result: true },
      {
        scenario: 'mark between 10 and 12',
        mark: 11,
        result: true
      },
      { scenario: 'mark = 12', mark: 12, result: true },
      { scenario: 'mark > 12', mark: 13, result: false }
    ])('should return $result when $scenario', ({ mark, result }) => {
      expect(mention(mark, 10, 12)).toBe(result);
    });
  });
import { it, expect, describe } from 'vitest';
import { canDrive } from '../src/candrive';

describe('canDrive', () => {
    it('should return error for invalid country code', () => {
      expect(canDrive(20, 'UK')).toMatch(/invalid/i);
    });
  
    it.each([
      { age: 15, country: 'US', result: false },
      { age: 16, country: 'US', result: true },
      { age: 17, country: 'US', result: true },
      { age: 17, country: 'FR', result: false },
      { age: 19, country: 'FR', result: true },
      { age: 18, country: 'FR', result: true }
    ])('should return $result for $age, $country', ({ age, country, result }) => {
      expect(canDrive(age, country)).toBe(result);
    });
  });
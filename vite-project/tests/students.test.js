import { it, expect, describe } from 'vitest';
import { getStudents } from '../src/students';

describe('getStudents', () => {
    it('should return an array of students', () => {
      const students = getStudents();
      expect(Array.isArray(students)).toBe(true);
      expect(students.length).toBeGreaterThan(0);
    });
  
    it('should return an array with valid student codes', () => {
      const students = getStudents();
      students.forEach((student) => {
        expect(student).toHaveProperty('name');
        expect(typeof student.name).toBe('string');
        expect(student.name).toBeTruthy();
      });
    });
  
    it('should return an array with valid marks', () => {
      const students = getStudents();
      students.forEach((student) => {
        expect(student).toHaveProperty('mark');
        expect(typeof student.mark).toBe('number');
        expect(student.mark).toBeGreaterThan(0);
        expect(student.mark).toBeLessThanOrEqual(20);
      });
    });
  });
import { findNumber } from "../index"
import NUMBERSJson from "../NUMBERS.json"

describe('server', () => {
  it('find first index integer', () => {
    const place = findNumber(NUMBERSJson, 2, 0)

    expect(place).toEqual(1);
  });

  it('find last index integer', () => {
    const place = findNumber(NUMBERSJson, 499999, 0)

    expect(place).toEqual(1000000);
  });

  it('find invalid integer', () => {
    const place = findNumber(NUMBERSJson, 90, 0)

    expect(place).toEqual(-1);
  });

  it('Invalid array', () => {
    const place = findNumber([], 1, 0)

    expect(place).toEqual(-1);
  });
});

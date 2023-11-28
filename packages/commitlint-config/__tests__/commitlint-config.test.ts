import { describe, it, expect } from 'vitest';

import rules from '../';

describe('#commitlint-config', () => {
  it('should be able to returns a valid object.', () => {
    expect(rules).toBeTypeOf('object');

    expect(Object.keys(rules).length).toStrictEqual(3);

    expect(require('../')).toBeTypeOf('object');
    expect(require('../').rules).toBeTypeOf('object');
  });
});

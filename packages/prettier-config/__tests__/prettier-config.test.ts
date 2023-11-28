import { describe, it, expect } from 'vitest';
import config from '../';

describe('#prettier-config', () => {
  it('should be able to returns an object/options', () => {
    expect(config).toBeTypeOf('object');

    expect(Object.keys(config).length).toStrictEqual(13);

    expect(require('../')).toBeTypeOf('object');
  });
});

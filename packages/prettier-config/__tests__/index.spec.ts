import { describe, expect, it } from 'vitest';

import config from '../';

describe('#prettier-config suite.', () => {
  it('should be able to returns an object/configs.', () => {
    expect(config).toBeTypeOf('object');
    expect(Object.keys(config).length).toStrictEqual(12);

    expect(require('../')).toBeTruthy();
  });
});

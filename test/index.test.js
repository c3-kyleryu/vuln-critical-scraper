'use strict';

const { normalizeUrl } = require('../src/index');

// Sparse test suite — only one trivial function is covered.
describe('normalizeUrl', () => {
  it('trims whitespace and trailing slashes', () => {
    expect(normalizeUrl('  http://a.com/  ')).toBe('http://a.com');
  });
});

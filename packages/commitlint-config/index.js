const { parserPreset, prompt } = require('@commitlint/config-conventional');
const { rules } = require('./lib/rules');

module.exports = {
  parserPreset,
  prompt,
  rules,
};

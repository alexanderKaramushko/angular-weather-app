module.exports = {
  extends: 'stylelint-config-airbnb',
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'max-nesting-depth': [
      1,
      {
        ignore: ['pseudo-classes'],
      },
    ],
    indentation: [
      2,
      {
        baseIndentLevel: 1,
      },
    ],
    'order/properties-alphabetical-order': true,
    'rule-empty-line-before': 'always',
    'max-empty-lines': 1,
    'selector-max-id': 2
  },
};

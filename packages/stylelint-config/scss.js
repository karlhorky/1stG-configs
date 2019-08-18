module.exports = {
  extends: ['./base', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-each-key-value-single-line': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['sass', 'scss'],
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-default': true,
    'scss/dollar-variable-no-missing-interpolation': true,
    // TODO: should use ['always', { except: 'only-of-namespace' }]
    // once https://github.com/postcss/postcss-selector-parser/issues/206 fixed
    'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/media-feature-value-dollar-variable': 'always',
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        ignoreInsideAtRules: ['if', 'else'],
      },
    ],
    'scss/operator-no-unspaced': true,
    'scss/selector-nest-combinators': 'never',
    'scss/selector-no-redundant-nesting-selector': true,
  },
}

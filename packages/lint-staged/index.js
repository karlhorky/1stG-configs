module.exports = {
  '*.{mdx,mjs,js,jsx,ts,tsx,vue}': ['eslint --fix', 'git add'],
  '*.{css,less}': ['stylelint --config @1stg/stylelint-config'],
  '*.{sass,scss,vue}': ['stylelint --config @1stg/stylelint-config/scss'],
  '.*rc': ['prettier --write', 'git add'],
  '*.{css,gql,html,json,less,md,sass,scss,vue,yml}': [
    'prettier --write',
    'git add',
  ],
}

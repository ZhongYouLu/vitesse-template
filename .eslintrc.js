module.exports = {
  extends: ['@antfu', '@vue/prettier'],
  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-param-reassign': ['warn', { props: true }],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },
};

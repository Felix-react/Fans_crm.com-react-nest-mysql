module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Ensure Jest testing environment is recognized
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // Ensure best practices for hooks
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    indent: ['error', 4],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'], // Use single quotes for consistency with Prettier
    semi: ['error', 'always'], // Enforce semicolons
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn on unused vars, but ignore args with "_"
    '@typescript-eslint/no-explicit-any': 'off', // Allow "any" type for flexibility
    'react/prop-types': 'off', // Turn off prop-types check for TypeScript
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};

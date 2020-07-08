module.exports = {
	env: {
		browser: false,
		commonjs: true,
		es6: true,
		node: true,
		jest: true
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 10,
		ecmaFeatures: {
			jsx: false,
			modules: true,
			experimentalObjectRestSpread: true
		}
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'prefer-rest-params': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'linebreak-style': ['error', 'unix'],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true
			}
		],
		semi: ['error', 'always'],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': [
			'error',
			{
				varsIgnorePattern: 'Fragment'
			}
		],
		'quote-props': [
			'error',
			'consistent-as-needed',
			{
				keywords: true
			}
		],
		'object-curly-spacing': ['error', 'always'],
		'no-whitespace-before-property': 2,
		'space-unary-ops': [
			2,
			{
				words: true,
				nonwords: false,
				overrides: {
					new: true,
					'=': true
				}
			}
		],
		'prefer-destructuring': [
			'error',
			{
				array: true,
				object: true
			},
			{
				enforceForRenamedProperties: false
			}
		],
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false
			}
		],
		'comma-dangle': ['error', 'never'],
		'react/prop-types': 0,
		'arrow-spacing': ['error', { before: true, after: true }],
		'block-spacing': [2, 'always'],
		'no-unused-vars': 1
	}
};

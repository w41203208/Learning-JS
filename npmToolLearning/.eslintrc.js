module.exports = {

	 // env 是指要在哪些環境執行，譬如說如果你的程式沒有要在瀏覽器執行，那就不應該有 window 或是 document 物件，ESLint 會幫你挑出這些錯誤
	env: {
		es2021: true,
		node: true,
	},

	 //通常會有 "eslint:recommend"這行代碼， 這是代表使用推薦的 ESLint 設定，可以看![ESLINT官方解釋](https://eslint.org/docs/rules/)裡面打勾的就是他的推薦設定喔。
	extends: [
		
		// 'eslint:recommended',
		// 'plugin:@typescript-eslint/recommended'
		'prettier',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',

	 // 這是指 parser 要怎麼把你的程式碼切成 AST（抽象語法樹），這裡會涉及到一些語法分析、詞語分析方面的知識。
	parserOptions: {
		ecmaVersion: 'latest',
	},

	// 一些資源Eslint的外掛套件，像是 react、flowtype...等。
	plugins: ['@typescript-eslint'],

	// 如果上面的 extends 或是 plugins 有你不想要的規則，這時候就可以用 rules 把它蓋掉
	rules: {
		'indent': ['error', 'tab', { SwitchCase: 1 }],

		// 'linebreak-style': [
		// 	'error',
		// 	'windows'
		// ],
		
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'no-const-assign': ['error'],
		'no-unused-vars': ['error'],
		'no-undef': ['error'],
		'no-alert': ['error'],
		'prefer-const': ['warn'],
		'no-empty-pattern': ['warn'],
		'array-callback-return': ['error'],
		'lines-around-comment': ['error', { beforeLineComment: true, afterLineComment: false }],
	},
};

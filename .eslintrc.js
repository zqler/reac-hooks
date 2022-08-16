module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        "react/state-in-constructor": 0,
        "comma-dangle": [0, 'always-multiline'],
        "@typescript-eslint/ban-types": [
            "off",
            {
                types: {
                    "{}": false,
                    Function: false,
                },
                extendDefaults: true,
            },
        ],
        "import/prefer-default-export": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        'func-call-spacing': [
            'error',
            'never'
        ],
        "no-useless-catch": 0,
        "@typescript-eslint/no-explicit-any":["off"],
        "@typescript-eslint/no-non-null-assertion":"off",
        "@typescript-eslint/no-empty-function": ["off", { "allow": ["functions"] }],
        "no-console": 0, //不禁用console
        "no-irregular-whitespace": 0, //不规则的空白不允许
        "no-underscore-dangle": 0,
        "array-bracket-spacing": [2, 'never'] // 指定数组的元素之间要以空格隔开(,后面)
    }
}
module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/typescript',
        "plugin:jsx-a11y/recommended",
        'plugin:@typescript-eslint/recommended',
        "plugin:promise/recommended",
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended',
        "plugin:prettier/recommended",
        "plugin:react/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ['react-refresh'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },

    rules: {
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'error',
        'no-var': 'error',
        "@typescript-eslint/no-unused-expressions": [
            "error",
            { enforceForJSX: true },
        ],
        "prettier/prettier": ["error", { endOfLine: "auto" }],

    }
}
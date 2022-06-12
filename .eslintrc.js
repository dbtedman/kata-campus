module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:jest/recommended",
        "plugin:security-node/recommended",
        "plugin:promise/recommended",
        "plugin:react/recommended",
    ],
    rules: {},
    env: {
        browser: true,
        node: true,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};

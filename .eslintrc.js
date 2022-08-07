module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:solid/typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["solid", "@typescript-eslint", "eslint-plugin-import"],
  rules: {
    "no-console": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "no-empty-pattern": "warn",
    indent: ["warn", 2, { SwitchCase: 1 }],
    "jsx-quotes": ["warn", "prefer-double"],
    // quotes: ["error", "single"],
    semi: ["warn", "always"],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
  },
};

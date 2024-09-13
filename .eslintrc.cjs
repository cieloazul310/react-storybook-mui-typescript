/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:react/jsx-runtime",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
  },
  overrides: [
    {
      files: ["*.stories.*"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "react/function-component-definition": "off",
      },
    },
  ],
};

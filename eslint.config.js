import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
      sourceType: "module",
      ecmaVersion: 2022,
    },
    rules: {
      // Possible Errors
      "no-unexpected-multiline": "error",

      // Best Practices
      "accessor-pairs": [
        "error",
        {
          getWithoutSet: false,
          setWithoutGet: true,
        },
      ],
      "block-scoped-var": "warn",
      "consistent-return": "error",
      curly: "error",
      "no-alert": "error",
      "no-caller": "error",
      "no-warning-comments": [
        "warn",
        {
          terms: ["TODO", "FIXME"],
          location: "start",
        },
      ],
      "no-with": "warn",
      radix: "warn",

      // Variables
      "no-delete-var": "error",
      "no-undef-init": "off",
      "no-undef": "error",
      "no-undefined": "off",
      "no-unused-vars": "warn",
      "no-use-before-define": "error",

      // ECMAScript 6
      "constructor-super": "error",
      "no-class-assign": "error",
      "no-const-assign": "error",
      "no-dupe-class-members": "error",
      "no-this-before-super": "error",
      "object-shorthand": ["warn"],

      // Stylistic
      "no-mixed-spaces-and-tabs": "warn",
      "no-multiple-empty-lines": "warn",
      "no-negated-condition": "warn",
      "no-unneeded-ternary": "warn",
      "keyword-spacing": ["error", { before: true, after: true }],
    },
  },
  eslintConfigPrettier,
];

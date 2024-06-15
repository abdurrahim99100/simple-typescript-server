import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "error",
      "no-undef": "error",
    },
    ignores: ["**/node_modules/", ".dist/"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];

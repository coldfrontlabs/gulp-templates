module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["standard", "plugin:jsdoc/recommended", "prettier"],
  plugins: ["jsdoc"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: ["!.*.js"],
  rules: {
    "jsdoc/tag-lines": [
      "warn",
      "always",
      {
        noEndLines: true,
        tags: {
          property: { lines: "never" },
          param: { lines: "never" },
        },
      },
    ],
  },
};

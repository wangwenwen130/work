module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "warn",
      {
        // 使用分号, 默认true
        //semi: true,
        // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
        singleQuote: false,
        // 行尾逗号,默认none,可选 none|es5|all
        // es5 包括es5中的数组、对象
        // all 包括函数对象等所有可选
        TrailingCooma: "none",
        // 对象中的空格 默认true
        // true: { foo: bar }
        // false: {foo: bar}
        bracketSpacing: true,
        // 箭头函数参数括号 默认avoid 可选 avoid| always
        // avoid 能省略括号的时候就省略 例如x => x
        // always 总是有括号
        arrowParens: "avoid"
      }
    ],
    'indent': 'off',
    'vue/script-indent': [
      'warning',
      2,
      {
        'baseIndent': 1
      }
    ]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};

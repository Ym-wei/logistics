
module.exports = {
  root: true,

  extends: ['plugin:vue/essential', '@vue/standard'], //
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: { // eslint 过滤指定变量名称
    uni: true,
    getApp: true,
    wx: true,
    uniCloud: true
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    'no-void': 0,
    indent: ['error', 2, {
      SwitchCase: 1,
      ignoredNodes: ['TemplateLiteral']
    }],
    eqeqeq: 0, // 允许双等号
    quotes: [2, 'single'],
    semi: [2, 'never'],
    camelcase: [0, { properties: 'always' }],
    'no-extra-semi': 2, // 禁止不必要的分号
    'no-console': 'off',
    'arrow-parens': ['error', 'as-needed'], // 当它们只有一个参数时，箭头函数可以省略括号
    'no-new': 0,
    'no-tabs': 'off',
    'space-before-function-paren': 0,
    'no-extend-native': 0,
    'no-trailing-spaces': 0,
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 'off',
    'no-mixed-spaces-and-tabs': 'off', // ['error', 'smart-tabs'] // 不允许使用混合空格和制表符进行缩进
    'template-curly-spacing': 'off',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['provide', 'inject'],
          ['directives', 'components'],
          ['delimiters', 'comments'],
          ['props', 'propsData'],
          'data',
          'computed',
          'filters',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render', 'renderPage'],
          'renderError'
        ]
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ],
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 2,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: false
    //     }
    //   }
    // ],
    'vue/html-indent': ['error', 2],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        // ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
        allowEmptyLines: false
      }
    ],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1
    }]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}

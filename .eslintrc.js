module.exports = {
  env: {
    browser: true,
  },
  settings: {
    "import/extensions": [".ts", ".json"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".json"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        require.resolve("eslint-config-airbnb-base"),
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:jasmine/recommended"
      ],
      parser: "@typescript-eslint/parser",
      plugins: [
        "@typescript-eslint",
        "simple-import-sort",
        "import",
        "rxjs-angular",
        "jasmine"
      ],
      rules: {
        'no-useless-constructor': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        'no-unused-vars': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            vars: 'all',
            ignoreRestSiblings: false,
          },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: 'block-like',
          },
          {
            blankLine: 'always',
            prev: 'block-like',
            next: '*',
          },
          {
            blankLine: 'always',
            prev: ['const', 'let'],
            next: ['block-like', 'expression']
          },
        ],
        'object-property-newline': 'error',
        'sort-keys': [
          'error',
          'asc',
          {
            caseSensitive: true,
            natural: false,
          },
        ],
        'object-curly-newline': [
          'error',
          {
            ObjectPattern: {
              multiline: true,
            },
            ExportDeclaration: {
              multiline: true,
              minProperties: 3,
            },
          },
        ],
        'lines-between-class-members': [
          'error',
          'always',
          {
            exceptAfterSingleLine: true,
          },
        ],
        'padded-blocks': [
          'error',
          {
            classes: 'always',
          },
        ],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            '': 'never',
            js: 'never',
            json: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'implicit-arrow-linebreak': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'linebreak-style': ['error', 'windows'],
        'max-len': [
          'error',
          {
            code: 120,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true,
          },
        ],
        'no-console': 'error',
        'no-debugger': 'error',
        'no-multiple-empty-lines': [
          'error',
          {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
          },
        ],
        quotes: ['error', 'single'],
      },
    },
    {
      files: ["*.ts"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ['@angular', '^@?\\w'],

              ['^(src)(/.*|$)'],

              ['^\\u0000'],
              ['^.+\\.?(scss)$']
            ],
          },
        ],
      },
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {
        "@angular-eslint/template/no-call-expression": "error",
        "@angular-eslint/template/no-any": "error",
        "@angular-eslint/template/no-autofocus": "error",
        "@angular-eslint/template/no-distracting-elements": "error",
        "@angular-eslint/template/accessibility-alt-text": "error",
        "@angular-eslint/template/no-positive-tabindex": "error",
        "@angular-eslint/template/no-negated-async": "error",
        "@angular-eslint/template/accessibility-valid-aria": "error",
        "@angular-eslint/template/accessibility-elements-content": "error",
        "@angular-eslint/template/accessibility-label-for": "error",
        "@angular-eslint/template/click-events-have-key-events": "error",
        "@angular-eslint/template/mouse-events-have-key-events": "error",
        "@angular-eslint/template/accessibility-table-scope": "error",
        "@angular-eslint/template/conditional-complexity": "error",
        "@angular-eslint/template/use-track-by-function": "error",
        "@angular-eslint/template/i18n": "off"
      }
    }
  ],
};

module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "mocha": true
    },
    "globals": {
        "define": true,
        "angular": true,
        "require": true
    },
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "script"
    },
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            2,
            "always"
        ],
        "no-new-object": 2,
        "no-console": 2,
        "for-direction": 2,
        "no-unused-vars": 2,
        "no-cond-assign": 1,
        "no-constant-condition": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-obj-calls": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-multiple-empty-lines": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "no-unsafe-negation": 2,
        "use-isnan": 2,
        "valid-jsdoc": 2,
        "valid-typeof": 2,
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "consistent-return": 2,
        "curly": 2,
        "eqeqeq": 2,
        "guard-for-in": 2,
        "no-caller": 2,
        "no-else-return": 2,
        "no-empty-function": 2,
        "no-extra-label": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-global-assign": 2,
        "no-lone-blocks": 2,
        "no-magic-numbers": [2, {
            "ignore": [-1, 100, 1000, 60, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
        }],
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-new": 2,
        "no-new-wrappers": 2,
        "no-octal": 2,
        "no-param-reassign": 2,
        "no-redeclare": 2,
        "no-return-assign": 2,
        "no-self-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 2,
        "no-unused-expressions": [2, {
            "allowShortCircuit": true,
            "allowTernary": true
        }],
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-escape": 2,
        "no-useless-return": 2,
        "no-warning-comments": 2,
        "no-with": 2,
        "radix": 2,
        "vars-on-top": 2,
        "wrap-iife": [2, "inside"],
        "yoda": 2,
        "no-catch-shadow": 2,
        "no-delete-var": 2,
        "no-restricted-globals": 2,
        "no-shadow": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-undefined": 2,
        "no-use-before-define": [2, {
            "functions": false
        }],
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multi-assign": 2,
        "unicode-bom": [2, "never"],
        "linebreak-style": [2, "unix"]
    }
};
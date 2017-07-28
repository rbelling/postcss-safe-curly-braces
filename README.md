# PostCSS Space Between Rules [![Build Status][ci-img]][ci]

[PostCSS] plugin that adds a white space after each rule. 

This is useful when inlining css into a Handlebars template, as back-to-back curly braces can break the template engine.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/rbellingeri@gilt.com/postcss-separate-curly-braces.svg
[ci]:      https://travis-ci.org/rbellingeri@gilt.com/postcss-separate-curly-braces

```css
@media(hover:hover){.foo {display: none}}
```

```css
@media(hover:hover){.foo {display: none} }
```

## Usage

```js
postcss([ require('postcss-separate-curly-braces') ])
```

See [PostCSS] docs for examples for your environment.

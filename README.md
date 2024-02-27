:roll_of_paper: [@string-searching/matiyasevich-knuth-morris-pratt](https://string-searching.github.io/matiyasevich-knuth-morris-pratt)
==

Knuth-Morris-Pratt algorithm for JavaScript.
See [docs](https://string-searching.github.io/matiyasevich-knuth-morris-pratt/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
// Compile a fast string/array searching function as follows.

import {build as _failureFunction} from '@string-data-structure/failure-function';
const ff = (p, pi, pj) => {
	const next = new Array(pj - pi + 1);
	_failureFunction(p, pi, pj, next, 0);
	return next;
};

import {fastScan} from '@string-searching/matiyasevich-knuth-morris-pratt';
const _findAll = (s, si, sj, p, pi, pj) => {
	assert(sj - si >= 2); // NOTE Use different methods if your
	assert(pj - pi >= 2); // inputs are that small.
	const t = ff(p, pi, pj);
	return fastScan(p, pi, pj, t, 0, s, si, sj);
};

const findAll = (text, pattern) =>
	_findAll(text, 0, text.length, pattern, 0, pattern.length);

for (const i of findAll('abracadabra', 'abra')) ... // yields 0 7
for (const i of findAll([0, 1, 1, 0, 1, 0, 0, 0], [0, 0])) ... // yields 5 6

// There is also an implementation that has a lower code footprint and handles
// all input sizes >= 1. This implementation is a constant factor slower but
// has the same worst-case linear-time guarantee.
import {lessCode} from '@string-searching/matiyasevich-knuth-morris-pratt';
```

[![License](https://img.shields.io/github/license/string-searching/matiyasevich-knuth-morris-pratt.svg)](https://raw.githubusercontent.com/string-searching/matiyasevich-knuth-morris-pratt/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@string-searching/matiyasevich-knuth-morris-pratt.svg)](https://www.npmjs.org/package/@string-searching/matiyasevich-knuth-morris-pratt)
[![Tests](https://img.shields.io/github/actions/workflow/status/string-searching/matiyasevich-knuth-morris-pratt/ci.yml?branch=main&event=push&label=tests)](https://github.com/string-searching/matiyasevich-knuth-morris-pratt/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/string-searching/matiyasevich-knuth-morris-pratt.svg)](https://github.com/string-searching/matiyasevich-knuth-morris-pratt/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/string-searching/matiyasevich-knuth-morris-pratt.svg)](https://github.com/string-searching/matiyasevich-knuth-morris-pratt/issues)
[![Downloads](https://img.shields.io/npm/dm/@string-searching/matiyasevich-knuth-morris-pratt.svg)](https://www.npmjs.org/package/@string-searching/matiyasevich-knuth-morris-pratt)

[![Code issues](https://img.shields.io/codeclimate/issues/string-searching/matiyasevich-knuth-morris-pratt.svg)](https://codeclimate.com/github/string-searching/matiyasevich-knuth-morris-pratt/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/string-searching/matiyasevich-knuth-morris-pratt.svg)](https://codeclimate.com/github/string-searching/matiyasevich-knuth-morris-pratt/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/string-searching/matiyasevich-knuth-morris-pratt/main.svg)](https://codecov.io/gh/string-searching/matiyasevich-knuth-morris-pratt)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/string-searching/matiyasevich-knuth-morris-pratt.svg)](https://codeclimate.com/github/string-searching/matiyasevich-knuth-morris-pratt/trends/technical_debt)
[![Documentation](https://string-searching.github.io/matiyasevich-knuth-morris-pratt/badge.svg)](https://string-searching.github.io/matiyasevich-knuth-morris-pratt/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@string-searching/matiyasevich-knuth-morris-pratt)](https://bundlephobia.com/result?p=@string-searching/matiyasevich-knuth-morris-pratt)

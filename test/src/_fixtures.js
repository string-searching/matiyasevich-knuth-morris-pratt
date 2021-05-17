import assert from 'assert';
import {lessCode, fastScan as _fastScan} from '../../src/index.js';

function* scan(x, s, si, sj) {
	while (si < sj) {
		if (s[si] === x) yield si;
		++si;
	}
}

function fastScan(p, pi, pj, t, ti, s, si, sj) {
	assert(pj - pi >= 1);
	return pj - pi < 2 || sj - si < 2
		? scan(p[pi], s, si, sj)
		: _fastScan(p, pi, pj, t, ti, s, si, sj);
}

import {build as _longestPrefixSuffixArray} from '@string-data-structure/longest-prefix-suffix-array';

const lpsa = (p, pi, pj) => {
	// eslint-disable-next-line unicorn/no-new-array
	const t = new Array(pj - pi + 1);
	_longestPrefixSuffixArray(p, pi, pj, t, 0);
	return t;
};

export const findAllLessCodeSlowBacktrack = (s, si, sj, p, pi, pj) => {
	const t = lpsa(p, pi, pj);
	return lessCode(p, pi, pj, t, 0, s, si, sj);
};

export const findAllFastScanSlowBacktrack = (s, si, sj, p, pi, pj) => {
	const t = lpsa(p, pi, pj);
	return fastScan(p, pi, pj, t, 0, s, si, sj);
};

import {build as _failureFunction} from '@string-data-structure/failure-function';

const ff = (p, pi, pj) => {
	// eslint-disable-next-line unicorn/no-new-array
	const next = new Array(pj - pi + 1);
	_failureFunction(p, pi, pj, next, 0);
	return next;
};

export const findAllLessCodeFastBacktrack = (s, si, sj, p, pi, pj) => {
	const t = ff(p, pi, pj);
	return lessCode(p, pi, pj, t, 0, s, si, sj);
};

export const findAllFastScanFastBacktrack = (s, si, sj, p, pi, pj) => {
	const t = ff(p, pi, pj);
	return fastScan(p, pi, pj, t, 0, s, si, sj);
};

export const algorithms = [
	findAllLessCodeSlowBacktrack,
	findAllLessCodeFastBacktrack,
	findAllFastScanSlowBacktrack,
	findAllFastScanFastBacktrack,
];

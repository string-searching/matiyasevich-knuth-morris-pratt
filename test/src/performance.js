import test from 'ava';

import {findAllFastScanFastBacktrack as findAll} from './_fixtures.js';

const _n = (m) => m * 2 + 1;

const macro = (t, m) => {
	const n = _n(m);
	const haystack = new Int32Array(n);
	haystack[m] = 1;
	const needle = new Int32Array(m);

	const hits = Array.from(findAll(haystack, 0, n, needle, 0, m));
	const expected = [0, m + 1];
	t.deepEqual(hits, expected);
};

macro.title = (title, m) => title ?? `n=${_n(m)} m=${m}`;

test(macro, 10 ** 5);
test(macro, 10 ** 6);
test(macro, 10 ** 7);
test(macro, 10 ** 8);

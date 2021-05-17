import assert from 'assert';

/**
 * Readble version of the Matiyasevich-Knuth-Morris-Pratt algorithm.
 *
 * NOTE The procedure only works when the pattern has at least one symbol.
 *
 * @param {ArrayLike} p
 * @param {number} pi
 * @param {number} pj
 * @param {ArrayLike<number>} t
 * @param {number} ti
 * @param {ArrayLike} s
 * @param {number} si
 * @param {number} sj
 * @return {IterableIterator<number>}
 */
export default function* lessCode(p, pi, pj, t, ti, s, si, sj) {
	assert(pj - pi >= 1);
	const n = pj - pi;
	let m = 0;
	while (si < sj) {
		while (s[si] !== p[pi + m]) {
			m = t[ti + m];
			if (m === -1) break;
		}

		++m;
		++si;
		if (m === n) {
			yield si - m;
			m = t[ti + m];
		}
	}
}

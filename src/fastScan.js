import assert from 'assert';

/**
 * Version of the Matiyasevich-Knuth-Morris-Pratt algorithm that runs quickly
 * when the first symbol of the pattern is not found.
 *
 * NOTE The procedure only works when the pattern and the text have each at
 * least two symbols. Use another method otherwise.
 *
 * TODO Find a way to pad pattern and text to avoid explicit bound checks.
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
export default function* fastScan(p, pi, pj, t, ti, s, si, sj) {
	assert(pj - pi >= 2);
	assert(sj - si >= 2);
	const pn = pj - pi;
	const m0 = t[ti + pn];
	assert(m0 !== -1);
	const pk0 = pi + m0;
	const x = p[pi];
	loop: while (true) {
		assert(si < sj);

		// NOTE Match the first symbol of the pattern
		while (s[si] !== x) {
			if (++si === sj) return;
		}

		assert(si < sj);
		if (++si === sj) return;

		let pk = pi + 1;
		while (true) {
			assert(pk > pi);
			// NOTE Match as much as possible
			while (s[si] === p[pk]) {
				if (++pk === pj) {
					yield ++si - pn;
					if (si === sj) return;
					if (m0 === 0) continue loop;
					pk = pk0;
				} else if (++si === sj) return;
			}

			// NOTE Backtrack on the pattern until it matches
			let m = pk - pi;
			do {
				m = t[ti + m];
				if (m === 0) continue loop;
				if (m === -1) {
					if (++si === sj) return;
					continue loop;
				}
			} while (s[si] !== p[pi + m]);

			pk = pi + m;
		}
	}
}

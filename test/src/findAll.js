import test from 'ava';

import {single, data} from '@string-searching/specification';

import {algorithms} from './_fixtures.js';

single({
	test,
	algorithms,
	data,
	skipEmptyString: true,
	skipEmptyPattern: true,
});

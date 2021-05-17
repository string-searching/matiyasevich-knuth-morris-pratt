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

single({
	test,
	algorithms,
	data: [
		{
			string: 'abcd',
			patterns: [
				{
					pattern: 'dcba',
					hits: [],
				},
			],
		},
		{
			string: 'aaaa',
			patterns: [
				{
					pattern: 'a',
					hits: [0, 1, 2, 3],
				},
				{
					pattern: 'aa',
					hits: [0, 1, 2],
				},
				{
					pattern: 'aaa',
					hits: [0, 1],
				},
				{
					pattern: 'aaaa',
					hits: [0],
				},
			],
		},
		{
			string: 'aaaaaaaaaab',
			patterns: [
				{
					pattern: 'aaa',
					hits: [0, 1, 2, 3, 4, 5, 6, 7],
				},
			],
		},
	],
});

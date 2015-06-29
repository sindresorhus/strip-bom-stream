'use strict';
var fs = require('fs');
var test = require('ava');
var concat = require('concat-stream');
var fn = require('./');

test('main', function (t) {
	t.plan(1);

	fs.createReadStream('fixture')
		.pipe(fn())
		.pipe(concat(function (data) {
			t.assert(data.toString() === 'Unicorn\n');
		}));
});

test('low `highWaterMark`', function (t) {
	t.plan(1);

	fs.createReadStream('fixture', {highWaterMark: 1})
		.pipe(fn())
		.pipe(concat(function (data) {
			t.assert(data.toString() === 'Unicorn\n');
		}));
});

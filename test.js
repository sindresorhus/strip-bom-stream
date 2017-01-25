import fs from 'fs';
import test from 'ava';
import getStream from 'get-stream';
import m from '.';

test('main', async t => {
	const ret = await getStream(fs.createReadStream('fixture').pipe(m()));
	t.is(ret, 'Unicorn\n');
});

test('low `highWaterMark`', async t => {
	const ret = await getStream(fs.createReadStream('fixture', {highWaterMark: 1}).pipe(m()));
	t.is(ret, 'Unicorn\n');
});

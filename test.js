import fs from 'fs';
import test from 'ava';
import getStream from 'get-stream';
import stripBomStream from '.';

test('main', async t => {
	const result = await getStream(fs.createReadStream('fixture').pipe(stripBomStream()));
	t.is(result, 'Unicorn\n');
});

test('low `highWaterMark`', async t => {
	const result = await getStream(fs.createReadStream('fixture', {highWaterMark: 1}).pipe(stripBomStream()));
	t.is(result, 'Unicorn\n');
});

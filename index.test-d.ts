/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import fs from 'node:fs';
import {expectType} from 'tsd';
import stripBomStream, {StripBomStream} from './index.js';

expectType<StripBomStream>(stripBomStream());

fs.createReadStream('unicorn.txt')
	.pipe(stripBomStream())
	.pipe(fs.createWriteStream('unicorn.txt'));

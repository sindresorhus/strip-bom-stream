/// <reference types="node"/>
import * as fs from 'fs';
import {expectType} from 'tsd';
import stripBomStream = require('.');

expectType<stripBomStream.StripBomStream>(stripBomStream());

fs.createReadStream('unicorn.txt')
	.pipe(stripBomStream())
	.pipe(fs.createWriteStream('unicorn.txt'));

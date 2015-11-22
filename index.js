'use strict';
var firstChunk = require('first-chunk-stream');
var stripBom = require('strip-bom');

module.exports = function () {
	return firstChunk({chunkLength: 3}, function (err, chunk, enc, cb) {
		if (err) {
			return cb(err);
		}
		cb(null, stripBom(chunk));
	});
};

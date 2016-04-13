const test = require('ava');
const electronDetectLoadurl = require('./');

test('it work!', t => {
	const result = electronDetectLoadurl();
	t.is(result, 42);
});

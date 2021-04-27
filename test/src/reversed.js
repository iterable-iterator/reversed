import test from 'ava';

import {reversed} from '../../src/index.js';

const macro = (t, A, B) => {
	t.deepEqual(Array.from(reversed(A)), B);
	t.deepEqual(Array.from(reversed(B)), A);
};

macro.title = (title, A, B) =>
	title ?? `reversed(${JSON.stringify(A)}) = ${JSON.stringify(B)}`;

test(macro, [], []);
test(macro, [1], [1]);
test(macro, [1, 2, 3], [3, 2, 1]);
test(macro, [1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]);
test(macro, [1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1]);

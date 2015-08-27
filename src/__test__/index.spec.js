var test = require('tape');

test('basic arithmetic', function(t) {
  t.plan(4);

  t.equal(2 + 3, 5);
  t.equal(7 * 8 + 9, 65);
  t.equal(1 + 2 , 3);
  t.equal(3 + 4 , 7);
});
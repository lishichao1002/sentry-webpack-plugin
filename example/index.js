var bar = require('./bar');

require('./bar?00');
require('./bar?01');
require('./bar?02');
require('./bar?03');
require('./bar?04');
require('./bar?05');
require('./bar?06');
require('./bar?07');
require('./bar?08');
require('./bar?09');

require('./bar?10');
require('./bar?11');
require('./bar?12');
require('./bar?13');
require('./bar?14');
require('./bar?15');
require('./bar?16');
require('./bar?17');
require('./bar?18');
require('./bar?19');


function foo() {
  bar('test');
}

foo();

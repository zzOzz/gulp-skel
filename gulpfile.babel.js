// Kreativgebiet GmbH
//
// Require all gulp tasks from the subfolder
// and let them call themselfes
var _ = require('lodash');
require('require-dir')('./tasks', { recurse: true });

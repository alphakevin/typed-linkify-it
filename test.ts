/// <reference path="typings/main.d.ts" />
/// <reference path="bundle/main.d.ts" />

import assert = require('assert');
import LinkifyIt = require('linkify-it');

assert.ok(typeof LinkifyIt === 'function');

const linkifier = new LinkifyIt();

let failText = "nothing to see here";
let failResult = linkifier.test(failText);
assert.ok(!failResult);

let passText = "https://github.com/typings/registry";
let passResult = linkifier.test(passText);
assert.ok(passResult);

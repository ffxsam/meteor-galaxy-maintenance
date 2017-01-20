// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from 'meteor/tinytest';

// Import and rename a variable exported by galaxy-maintenance.js.
import { name as packageName } from 'meteor/galaxy-maintenance';

// Write your tests here!
// Here is an example.
Tinytest.add('galaxy-maintenance - example', function (test) {
  test.equal(packageName, 'galaxy-maintenance');
});

Package.describe({
  name: 'ffxsam:galaxy-maintenance',
  version: '0.7.0',
  // Brief, one-line summary of the package.
  summary: 'Galaxy maintenance tracking',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ffxsam/meteor-galaxy-maintenance',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.mainModule('src/rest-api.js', 'server');
  api.mainModule('src/publications.js', 'server')
  api.mainModule('src/collection.js');
  api.mainModule('src/db-setup.js', 'server');
});

// Package.onTest(function (api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('galaxy-maintenance');
//   api.mainModule('galaxy-maintenance-tests.js');
// });

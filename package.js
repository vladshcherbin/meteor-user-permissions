Package.describe({
  name: 'shcherbin:users',
  version: '1.0.0',
  summary: '',
  git: '',
  documentation: 'readme.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.1');

  api.use([
    'underscore',
    'mongo',
    'templating',
    'accounts-password'
  ]);

  api.addFiles([
    'lib/collections/permissions.js',
    'lib/collections/users.js',
    'lib/helpers.js'
  ], ['client', 'server']);

  api.addFiles([
    'server/fixtures/permissions.js',
    'server/fixtures/users.js',
    'server/hooks/users.js',
    'server/publications/users.js'
  ], 'server');

  api.addFiles([
    'client/helpers.js'
  ], 'client');

  api.export('Permissions');
  api.export('Users');
});
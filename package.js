Package.describe({
  name: 'shcherbin:users',
  version: '0.1.1',
  summary: 'Users and permissions system, every user has his own permissions. Based on accounts-password.',
  git: 'https://github.com/VladShcherbin/meteor-user-permissions',
  documentation: null
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
    'lib/permissions.js'
  ], ['client', 'server']);

  api.addFiles([
    'server/fixtures/users.js',
    'server/hooks/users.js',
    'server/methods/permissions.js',
    'server/publications/permissions.js',
    'server/publications/users.js'
  ], 'server');

  api.addFiles([
    'client/helpers.js'
  ], 'client');

  api.export('Accounts');
  api.export('Permissions');
  api.export('Users');
});
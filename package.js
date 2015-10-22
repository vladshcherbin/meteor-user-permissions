Package.describe({
  name: 'shcherbin:permissions',
  version: '0.1.0',
  summary: 'User permissions/roles system, based on accounts-password. Simple and easy to use.',
  git: 'https://github.com/VladShcherbin/meteor-user-permissions',
  documentation: 'readme.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use([
    'underscore',
    'mongo',
    'accounts-password'
  ]);

  api.use('blaze-html-templates', 'client', {weak: true});

  api.use('react', ['client', 'server'], {weak: true});

  api.imply([
    'accounts-password'
  ]);

  api.addFiles([
    'both/lib/collections/permissions.js',
    'both/lib/collections/users.js',
    'both/lib/permissions.js',
    'both/PermissionsMixin.jsx'
  ], ['client', 'server']);

  api.addFiles([
    'server/fixtures/users.js',
    'server/hooks/users.js',
    'server/methods/permissions.js',
    'server/publications/permissions.js',
    'server/publications/users.js'
  ], 'server');

  api.addFiles([
    'client/blaze-helpers.js'
  ], 'client');

  api.export([
    'Permissions',
    'Users',
    'PermissionsMixin'
  ]);
});
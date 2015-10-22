Package.describe({
  name: 'shcherbin:permissions',
  version: '0.2.1',
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
  //
  api.imply([
    'accounts-password'
  ]);

  api.addFiles([
    'both/lib/collections/permissions.js',
    'both/lib/collections/users.js',
    'both/lib/permissions.js'
  ], ['client', 'server']);

  api.addFiles([
    'server/fixtures/users.js',
    'server/hooks/users.js',
    'server/methods/permissions.js',
    'server/publications/permissions.js',
    'server/publications/users.js'
  ], 'server');

  api.export([
    'Permissions',
    'Users'
  ]);

  // Blaze and React

  api.use('jsx');

  api.use('react@0.1.13', ['client', 'server'], {weak: true});

  api.use('blaze-html-templates', 'client', {weak: true});

  api.addFiles([
    'both/PermissionsMixin.jsx'
  ], ['client', 'server']);

  api.addFiles([
    'client/blaze-helpers.js'
  ], 'client');

  api.export('PermissionsMixin');
});
Package.describe({
  name: 'shcherbin:user-permissions-react',
  version: '0.1.0',
  summary: 'User permissions system, based on accounts-password. Easy to use. For React.',
  git: 'https://github.com/VladShcherbin/meteor-user-permissions',
  documentation: 'readme.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use([
    'shcherbin:user-permissions-core@0.1.0',
    'react'
  ]);

  api.imply([
    'shcherbin:user-permissions-core@0.1.0'
  ]);

  api.addFiles([
    'client/PermissionsMixin.jsx'
  ], 'client');

  api.export('PermissionsMixin');
});
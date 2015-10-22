Package.describe({
  name: 'shcherbin:user-permissions-react',
  version: '0.1.0',
  summary: 'React mixin with functions for the shcherbin:user-permissions package.',
  git: 'https://github.com/VladShcherbin/meteor-user-permissions/tree/master/react',
  documentation: 'readme.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use([
    'shcherbin:user-permissions-core@0.1.0',
    'react@0.1.13'
  ]);

  api.imply([
    'shcherbin:user-permissions-core@0.1.0'
  ]);

  api.addFiles([
    'client/PermissionsMixin.jsx'
  ], 'client');

  api.export('PermissionsMixin');
});
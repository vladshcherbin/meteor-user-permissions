Package.describe({
  name: 'shcherbin:user-permissions-blaze',
  version: '0.1.0',
  summary: 'Blaze helpers for the shcherbin:user-permissions package.',
  git: 'https://github.com/VladShcherbin/meteor-user-permissions/tree/master/blaze',
  documentation: 'readme.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use([
    'shcherbin:user-permissions-core@0.1.0',
    'blaze-html-templates@1.0.1'
  ]);

  api.imply([
    'shcherbin:user-permissions-core@0.1.0'
  ]);

  api.addFiles([
    'client/helpers.js'
  ], 'client');
});
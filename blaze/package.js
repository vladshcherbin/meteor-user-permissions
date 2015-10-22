Package.describe({
  name: 'shcherbin:permissions-blaze',
  version: '0.1.0',
  summary: 'Blaze template helpers for the shcherbin:permissions package.',
  git: 'https://github.com/VladShcherbin/meteor-user-permissions/tree/master/blaze',
  documentation: 'readme.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use([
    'shcherbin:permissions@0.1.0',
    'blaze-html-templates@1.0.1'
  ]);

  api.imply([
    'shcherbin:permissions@0.1.0'
  ]);

  api.addFiles([
    'client/helpers.js'
  ], 'client');
});
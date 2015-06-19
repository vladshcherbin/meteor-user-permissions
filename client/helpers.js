Template.registerHelper('hasPermission', function (permission) {
  return Permissions.has(Meteor.userId(), permission);
});

Template.registerHelper('hasAllPermissions', function (permissions) {
  permissions = permissions.split('|');

  return Permissions.hasAllFrom(Meteor.userId(), permissions);
});

Template.registerHelper('hasAnyPermission', function (permissions) {
  permissions = permissions.split('|');

  return Permissions.hasAnyFrom(Meteor.userId(), permissions);
});

Template.registerHelper('isAdmin', function () {
  return Permissions.isAdmin(Meteor.userId());
});
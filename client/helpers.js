Template.registerHelper('hasPermission', function (permission) {
  return Permissions.has(Meteor.userId(), permission);
});

Template.registerHelper('hasAnyPermission', function (permissions) {
  permissions = permissions.split('|');

  return Permissions.hasAnyFrom(Meteor.userId(), permissions);
});
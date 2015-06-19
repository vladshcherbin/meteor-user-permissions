// Send all permissions except admin.all for non-admin
Meteor.publish('admin.permissions.all', function () {
  if (Permissions.isAdmin(this.userId)) {
    return Permissions.find();
  }

  if (Permissions.has(this.userId, 'admin.permissions.index')) {
    return Permissions.find({is_visible: true});
  }

  return this.ready();
});

// Send the permission, based on its title
Meteor.publish('admin.permissions.single', function (title) {
  check(title, String);

  if (Permissions.isAdmin(this.userId)) {
    return Permissions.find({title: title});
  }

  if (Permissions.has(this.userId, 'admin.permissions.show')) {
    return Permissions.find({title: title, is_visible: true});
  }

  return this.ready();
});
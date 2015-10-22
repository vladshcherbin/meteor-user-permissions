// Send the user permissions to client
Meteor.publish(null, function () {
  var userId = this.userId,
      fields = {permissions: 1};

  return userId ? Meteor.users.find({_id: userId}, {fields: fields}) : this.ready();
});

// Send all users data except admin.all ones
Meteor.publish('admin.users.all', function () {
  if (Permissions.isAdmin(this.userId)) {
    return Meteor.users.find();
  }

  if (Permissions.has(this.userId, 'admin.users.index')) {
    return Meteor.users.find({
      permissions: {$nin: ['admin.all']}
    });
  }

  return this.ready();
});

// Send single user with admin check
Meteor.publish('admin.users.single', function (username) {
  check(username, String);

  if (Permissions.isAdmin(this.userId)) {
    var user = Meteor.users.findOne({username: username}),
        permissions = user.permissions;

    return [
      Meteor.users.find({username: username}),
      Permissions.find({title: {$in: permissions}})
    ];
  }

  if (Permissions.has(this.userId, 'admin.users.show')) {
    if (Permissions.has(this.userId, 'admin.permissions.index')) {
      var user = Meteor.users.findOne({
            username: username,
            permissions: {$nin: ['admin.all']}
          }),
          permissions = user.permissions;

      return [
        Meteor.users.find({
          username: username,
          permissions: {$nin: ['admin.all']}
        }),
        Permissions.find({title: {$in: permissions}, is_visible: true})
      ];
    } else {
      return Meteor.users.find({
        username: username,
        permissions: {$nin: ['admin.all']}
      });
    }
  }

  return this.ready();
});
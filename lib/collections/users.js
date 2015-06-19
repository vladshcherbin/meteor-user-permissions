Users = Meteor.users;

Users.allow({
  insert: function () {
    return false;
  },
  update: function (userId) {
    return Boolean(Permissions.has(userId, 'admin.users.update'));
  },
  remove: function (userId) {
    return Boolean(Permissions.isAdmin(userId));
  }
});
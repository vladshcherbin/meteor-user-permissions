Users = Meteor.users;

Users.allow({
  insert: function () {
    return false;
  },
  update: function (userId) {
    return Permissions.has(userId, 'admin.users.update');
  },
  remove: function (userId) {
    return Permissions.isAdmin(userId);
  }
});
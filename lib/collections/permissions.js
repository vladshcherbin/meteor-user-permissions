Permissions = new Mongo.Collection('permissions');

Permissions.allow({
  insert: function (userId) {
    return Boolean(Permissions.isAdmin(userId));
  },
  update: function (userId) {
    return Boolean(Permissions.isAdmin(userId));
  },
  remove: function () {
    return false;
  }
});
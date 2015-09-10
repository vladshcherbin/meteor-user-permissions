Permissions = new Mongo.Collection('permissions');

Permissions.allow({
  insert: function (userId) {
    return Permissions.isAdmin(userId);
  },
  update: function (userId) {
    return Permissions.isAdmin(userId);
  },
  remove: function () {
    return false;
  }
});
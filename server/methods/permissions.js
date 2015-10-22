Meteor.methods({
  removePermission: function (title) {
    check(title, String);

    if (Permissions.isAdmin(this.userId)) {
      Users.update({
        permissions: title
      }, {
        $pull: {
          permissions: title
        }
      }, {multi: true}, function () {
        Permissions.remove({title: title});
      });

      return true;
    }

    return false;
  }
});
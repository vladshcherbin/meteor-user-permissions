Meteor.startup(function () {
  if (Permissions.find().count() === 0) {
    var permissions = [
      {
        title: 'admin.login',
        descriptions: 'Enter the admin panel'
      }
    ];

    _.each(permissions, function (permission) {
      Permissions.insert(permission);
    });
  }
});
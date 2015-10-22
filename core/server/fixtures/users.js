Meteor.startup(function () {
  if (Users.find().count() === 0) {
    Accounts.createUser({
      username: 'admin',
      email: 'admin@admin.admin',
      password: 'admin',
      permissions: [
        'admin.all'
      ]
    });
  }
});
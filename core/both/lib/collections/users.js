Users = Meteor.users;

Users.deny({
  update: function (userId) {
    return true;
  }
});
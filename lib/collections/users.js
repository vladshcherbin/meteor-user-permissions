Users = Meteor.users;

Users.deny({
  update: function () {
    return true;
  }
});
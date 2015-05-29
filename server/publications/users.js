// Send the user permissions to client
Meteor.publish(null, function () {
  var userId = this.userId,
      fields = {permissions: 1};

  return userId ? Meteor.users.find({_id: userId}, {fields: fields}) : this.ready();
});

// If the user has permissions - send all the users data
Meteor.publish('users.all', function () {
  return Permissions.has(this.userId, null) ? Meteor.users.find() : this.ready();
});
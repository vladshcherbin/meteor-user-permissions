// Check if the user has permission
Permissions.has = function (userId, permission) {
  var user = Users.findOne({_id: userId});

  if (!user || !user.permissions) {
    return false;
  }

  if (_.contains(user.permissions, 'admin.all')) {
    return true;
  }

  return Boolean(_.contains(user.permissions, permission));
};

// Check if the user has all of the permissions
Permissions.hasAllFrom = function (userId, permissions) {
  var user = Users.findOne({_id: userId});

  if (!user || !user.permissions) {
    return false;
  }

  if (_.contains(user.permissions, 'admin.all')) {
    return true;
  }

  var matchesFound = _.intersection(user.permissions, permissions),
      difference = _.difference(permissions, matchesFound);

  return !Boolean(difference.length > 0);
};

// Check if the user has any of the permissions
Permissions.hasAnyFrom = function (userId, permissions) {
  var user = Users.findOne({_id: userId});

  if (!user || !user.permissions) {
    return false;
  }

  if (_.contains(user.permissions, 'admin.all')) {
    return true;
  }

  var matchesFound = _.intersection(user.permissions, permissions);

  return Boolean(matchesFound.length > 0);
};

// Check only admin.all permission
Permissions.isAdmin = function (userId) {
  var user = Users.findOne({_id: userId});

  if (!user || !user.permissions) {
    return false;
  }

  return Boolean(_.contains(user.permissions, 'admin.all'));
};
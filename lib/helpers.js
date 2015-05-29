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

Permissions.hasAnyFrom = function (userId, permissions) {
  var user = Users.findOne({_id: userId});

  if (!user || !user.permissions) {
    return false;
  }

  if (_.contains(user.permissions, 'admin.all')) {
    return true;
  }

  var matchFound = _.intersection(user.permissions, permissions);

  return Boolean(matchFound.length > 0);
};
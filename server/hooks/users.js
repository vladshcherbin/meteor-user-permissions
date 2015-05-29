Accounts.onCreateUser(function (options, user) {
  user.permissions = options.permissions ? options.permissions : [];

  return user;
});
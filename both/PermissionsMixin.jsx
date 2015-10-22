if (Package['react']) {
  PermissionsMixin = {
    hasPermission(permission) {
      return Permissions.has(Meteor.userId(), permission);
    },
    hasAllPermissions(permissions) {
      permissions = permissions.split('|');

      return Permissions.hasAllFrom(Meteor.userId(), permissions);
    },
    hasAnyPermission(permissions) {
      permissions = permissions.split('|');

      return Permissions.hasAnyFrom(Meteor.userId(), permissions);
    },
    isAdmin() {
      return Permissions.isAdmin(Meteor.userId());
    }
  };
}
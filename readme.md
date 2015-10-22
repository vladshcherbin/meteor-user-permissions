# Meteor User Permissions

**Table of contents**

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
- [Blaze helpers](#blaze-helpers)
- [React mixin](#react-mixin)
- [Publications](#publications)
- [License](#license)

## About

The package uses the **accounts-password** package and adds permissions to users, that help you restrict private data or functionality. The idea is to have a set of permissions (in permissions collection) or roles and add some permissions to user.

## Installation

It is highly recommended to install this package before you have any users as it creates the **admin** user with admin permissions.

There is a core version and versions for Blaze and React on top of it.

```sh
// Blaze
meteor add shcherbin:user-permissions-blaze

// React
meteor add shcherbin:user-permissions-react

// Core (maybe you use something different, like Angular?)
meteor add shcherbin:user-permissions-core
```

## Usage

After installation, two collections will be created for you: **users** and **permissions**. New user will be created for you with all permissions (**admin.all**). You can auth with login **admin** and password **admin** then to create new permissions, new users, grant permissions, etc. *You should also change the password for the **admin** user*.

> All users with the permission **admin.all** are admins.

## Methods

### Both

**Permissions.isAdmin(userId)**

Use this method to check, if the user is admin.

```js
if (Permissions.isAdmin(Meteor.userId()) {
  // do something
}
```

**Permissions.has(userId, permission)**

Use this method to check, if the user has the permission. True for admins.

```js
if (Permissions.has(Meteor.userId(), 'admin.users.create')) {
  // do something
}
```

**Permissions.hasAllFrom(userId, permissions)**

Use this method to check, if the user has all permissions from the array. True for admins.

```js
if (Permissions.hasAllFrom(Meteor.userId(), ['admin.login', 'admin.users.create'])) {
  // do something
}
```

**Permissions.hasAnyFrom(userId, permissions)**

Use this method to check, if the user has any of the permissions from the array. True for admins.

```js
if (Permissions.hasAnyFrom(Meteor.userId(), ['admin.login', 'admin.users.create'])) {
  // do something
}
```

### Server

**removePermission** (only for admin)

Use this method to remove the permission from the collection. The permission is removed from all users and then from the permissions collection.

```js
Meteor.call('removePermission', 'admin.users.create', function (error, result) {
 // check for error
}
```

## Blaze helpers

There are some helpers in the Blaze package, that you can use in your templates:

**isAdmin**

Same as **Permissions.isAdmin()**.

```html
{{#if isAdmin}}
  {{> privatePart}}
{{/if}}
```

**hasPermission**

Same as **Permissions.has()**.

```html
{{#if hasPermission 'admin.orders.create'}}
  {{> privatePart}}
{{/if}}
```

**hasAllPermissions**

Same as **Permissions.hasAllFrom()**. Permissions are separated with '|'.

```html
{{#if hasAllPermissions 'admin.login|admin.users.create'}}
  {{> privatePart}}
{{/if}}
```

**hasAnyPermission**

Same as **Permissions.hasAnyFrom()**. Permissions are separated with '|'.

```html
{{#if hasAnyPermission 'admin.login|admin.users.create'}}
  {{> privatePart}}
{{/if}}
```

## React mixin

There is a mixin with functions in the React package, that you can use:

```js
Component = React.createClass({
  mixins: [PermissionsMixin],
  // ...
});
```

**isAdmin**

Same as **Permissions.isAdmin()**.

```jsx
if (this.isAdmin()) {
  return <PrivatePart />;
}
```

**hasPermission**

Same as **Permissions.has()**.

```jsx
if (this.hasPermission('admin.orders.create')) {
  return <PrivatePart />;
}
```

**hasAllPermissions**

Same as **Permissions.hasAllFrom()**. Permissions are separated with '|'.

```jsx
if (this.hasAllPermissions('admin.login|admin.users.create')) {
  return <PrivatePart />;
}
```

**hasAnyPermission**

Same as **Permissions.hasAnyFrom()**. Permissions are separated with '|'.

```jsx
if (this.hasAnyPermission('admin.login|admin.users.create')) {
  return <PrivatePart />;
}
```

## Publications

### Users

If the user is logged in, his permissions array will be automatically published to client.

**admin.users.all**

- If the logged in user is admin, all users will be published.

- If the logged in user has the 'admin.users.index' permission, all users will be published, except the admin users.

**admin.users.single** (username)

- If the logged in user is admin, the user will be published with his permissions array and his permissions from the permissions collection.

- If the logged in user has 'admin.users.show' permission, the user will be published with his permissions array (but except the 'admin.all' permission). The data from the permissions collection won't be published.

- If the logged in user has also the 'admin.permissions.index' permission, the permissions collection data will also be published.

### Permissions

**admin.permissions.all**

- If the logged in user is admin, all permissions will be published.

- If the logged in user has 'admin.permissions.index' permission, all permissions with **is_visible: true** will be published.

**admin.permissions.single** (title)

- If the logged in user is admin, the permission will be published.

- If the logged in user has 'admin.permissions.show' permission, the permissions with **is_visible: true** will be published.

## License

MIT
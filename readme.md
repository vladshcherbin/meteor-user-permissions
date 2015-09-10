# Meteor User Permissions

**Table of contents**

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Collections](#hooks)
- [Methods](#methods)
- [Publications](#publications)
- [License](#license)

## About

The package uses the **accounts-password** package and adds permissions to users, that help you restrict private data or functionality. The idea is to have a set of permissions (in permissions collection) and add some permissions to user.

## Installation

It is highly recommended to install this package before you have any users as it creates the **admin** user with all permissions.

```sh
meteor add shcherbin:users
```

## Usage

After installation, two collections will be created for you: **users** and **permissions**. New user will be created for you with all permissions (**admin.all**). You can auth with login **admin** and password **admin** then to create new permissions, new users, grant permissions, etc. *You should also change the password for the **admin** user*.

> All users with the permission **admin.all** are admins.

## Collections

Allow\deny rules:

### Users

**insert**

You can't insert users. Use **Accounts.createUser** method to create a user.

**update**

You can update the user if you have the 'admin.users.update' permission.

**remove**

You can remove the user if you have the 'admin.all' permission (if you are admin).

#### User Hooks

When a new user is created, a **permissions** array is added, even if the user has no permissions granted.

### Permissions

**insert**

You can insert a new permission if you have the 'admin.all' permission (if you are admin).

**update**

You can update the permission if you have the 'admin.all' permission (if you are admin).

**remove**

You can't remove the permission. Use the **removePermission** method, which is described below.

> You need to add a **is_visible** field to your permissions collection to hide the permission from showing and adding.

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

### Client

There are some helpers, that you can use in your templates:

**isAdmin**

Same as **Permissions.isAdmin()**.

```html
{{#if isAdmin}}
  <a href="{{route 'admin.permissions.create'}}">Add a permission</a>
{{/if}}
```

**hasPermission**

Same as **Permissions.has()**.

```html
{{#if hasPermission 'admin.orders.create'}}
  <a href="{{route 'admin.orders.create'}}">Add an order</a>
{{/if}}
```

**hasAllPermissions**

Same as **Permissions.hasAllFrom()**. Permissions are separated with '|'.

```html
{{#if hasAllPermissions 'admin.login|admin.users.create'}}
<div class="admin">
  {{> adminNav}}
  <main>
    {{> Template.dynamic template=main}}
  </main>
</div>
{{else}}
  {{> notFound}}
{{/if}}
```

**hasAnyPermission**

Same as **Permissions.hasAnyFrom()**. Permissions are separated with '|'.

```html
{{#if hasAnyPermission 'admin.login|admin.users.create'}}
  {{> privatePart}}
{{/if}}
```

### Server

**removePermission** (only for admin)

Use this method to remove the permission from the collection. The permission is removed from all users and then from the permissions collection.

```js
Meteor.call('removePermission', 'admin.users.create', function (error, result) {
 // check for error
}
```

## Publications

### Users

If the user has id, his permissions array will be automatically published to client.

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
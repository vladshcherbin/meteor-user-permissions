# Meteor User Permissions React Package

## About

This package has the React mixin for the [user-permissions-core](https://atmospherejs.com/shcherbin/user-permissions-core) package.

## Installation

```sh
// React
meteor add shcherbin:user-permissions-react
```

## Usage

The full docs are in the [core package](https://atmospherejs.com/shcherbin/user-permissions-core).

### React mixin

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

## License

MIT
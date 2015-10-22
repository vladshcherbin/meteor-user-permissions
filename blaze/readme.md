# Meteor User Permissions Blaze Package

This package has Blaze template helpers for the [shcherbin:permissions](https://atmospherejs.com/shcherbin/permissions) package.

## Installation

```sh
meteor add shcherbin:permissions-blaze
```

## Usage

The full docs are in the [core package](https://atmospherejs.com/shcherbin/permissions). There are some helpers, that you can use in your templates:

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

## License

MIT
# Msg/UpdateAdmin

UpdateAdmin is successful when:
  - admin is admin account

  UpdateAdmin has the following outcomes:
  - message response returned
  - Admin is updated in state
  - EventUpdateAdmin is emitted

## The admin must be the admin account

### Background

_Given_ admin

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y="
}
```

### admin is admin account

_When_ msg update admin

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_admin": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect no error.

### admin is not admin account

_When_ msg update admin

```
{
  "admin": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "new_admin": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect the error

```
admin chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: admin account chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
```

## The message response is returned

### Background

_Given_ admin

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y="
}
```

### message response returned

_When_ msg update admin

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_admin": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect response

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_admin": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

## Admin is updated in state

### Background

_Given_ admin

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y="
}
```

### state admin updated

_When_ msg update admin

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_admin": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect state admin

```
{
  "address": "hEyiXxUCaFQmkbuhO9r+QDscjIY="
}
```

## EventUpdateAdmin emitted

### Background

_Given_ admin

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y="
}
```

### event update admin emitted

_When_ msg update admin

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_admin": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect event update

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_admin": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

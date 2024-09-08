# Admin

## valid admin

_Given_ admin

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y="
}
```

_When_ validate admin

_Then_ expect no error.

## an error is returned if address is empty

_Given_ admin

```
{}
```

_When_ validate admin

_Then_ expect the error

```
address: empty address string is not allowed: parse error
```

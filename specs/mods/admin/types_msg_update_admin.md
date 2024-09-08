# MsgUpdate

## valid message

_Given_ message

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_admin": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_When_ validate message

_Then_ expect no error.

## an error is returned if admin is empty

_Given_ message

```
{}
```

_When_ validate message

_Then_ expect the error

```
admin: empty address string is not allowed: invalid address
```

## an error is returned if admin is not a bech32 address

_Given_ message

```
{
  "admin": "foo"
}
```

_When_ validate message

_Then_ expect the error

```
admin: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

## an error is returned if new admin is empty

_Given_ message

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_When_ validate message

_Then_ expect the error

```
new admin: empty address string is not allowed: invalid address
```

## an error is returned if new admin is not a bech32 address

_Given_ message

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_admin": "foo"
}
```

_When_ validate message

_Then_ expect the error

```
new admin: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

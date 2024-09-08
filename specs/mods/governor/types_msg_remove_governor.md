# MsgRemoveGovernor

## valid message

_Given_ message

```
{
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_When_ validate message

_Then_ expect no error.

## an error is returned if address is empty

_Given_ message

```
{}
```

_When_ validate message

_Then_ expect the error

```
address: empty address string is not allowed: invalid address
```

## an error is returned if address is not a bech32 address

_Given_ message

```
{
  "address": "foo"
}
```

_When_ validate message

_Then_ expect the error

```
address: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

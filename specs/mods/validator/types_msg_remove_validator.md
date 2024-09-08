# MsgRemoveValidator

## valid message

_Given_ message

```
{
  "operator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_When_ validate message

_Then_ expect no error.

## an error is returned if operator is empty

_Given_ message

```
{}
```

_When_ validate message

_Then_ expect the error

```
operator: empty address string is not allowed: invalid address
```

## an error is returned if operator is not a bech32 address

_Given_ message

```
{
  "operator": "foo"
}
```

_When_ validate message

_Then_ expect the error

```
operator: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

## an error is returned if address is empty

_Given_ message

```
{
  "operator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
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
  "operator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "address": "foo"
}
```

_When_ validate message

_Then_ expect the error

```
address: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

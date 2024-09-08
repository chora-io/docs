# MsgUpdateSubjectSteward

## valid message

_Given_ message

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_steward": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
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

## an error is returned if steward is empty

_Given_ message

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4"
}
```

_When_ validate message

_Then_ expect the error

```
steward: empty address string is not allowed: invalid address
```

## an error is returned if steward is not a bech32 address

_Given_ message

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "foo"
}
```

_When_ validate message

_Then_ expect the error

```
steward: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

## an error is returned if new steward is empty

_Given_ message

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_When_ validate message

_Then_ expect the error

```
new steward: empty address string is not allowed: invalid address
```

## an error is returned if new steward is not a bech32 address

_Given_ message

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_steward": "foo"
}
```

_When_ validate message

_Then_ expect the error

```
new steward: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

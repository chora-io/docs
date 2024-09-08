# MsgIssue

## valid message

_Given_ message

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ validate message

_Then_ expect no error.

## an error is returned if id is empty

_Given_ message

```
{}
```

_When_ validate message

_Then_ expect the error

```
id: empty or zero is not allowed: invalid request
```

## an error is returned if issuer is empty

_Given_ message

```
{
  "id": 1
}
```

_When_ validate message

_Then_ expect the error

```
issuer: empty address string is not allowed: invalid address
```

## an error is returned if issuer is not a bech32 address

_Given_ message

```
{
  "id": 1,
  "issuer": "foo"
}
```

_When_ validate message

_Then_ expect the error

```
issuer: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

## an error is returned if recipient is empty

_Given_ message

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_When_ validate message

_Then_ expect the error

```
recipient: empty address string is not allowed: invalid address
```

## an error is returned if recipient is not a bech32 address

_Given_ message

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "foo"
}
```

_When_ validate message

_Then_ expect the error

```
recipient: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

## an error is returned if amount is empty

_Given_ message

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_When_ validate message

_Then_ expect the error

```
amount: empty string is not allowed: invalid request
```

## an error is returned if amount is zero

_Given_ message

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "0"
}
```

_When_ validate message

_Then_ expect the error

```
amount: expected a positive decimal, got 0.000000000000000000: invalid decimal string: invalid request
```

## an error is returned if amount is negative

_Given_ message

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "-1.25"
}
```

_When_ validate message

_Then_ expect the error

```
amount: expected a positive decimal, got -1.250000000000000000: invalid decimal string: invalid request
```

## an error is returned if expiration is empty

_Given_ message

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25"
}
```

_When_ validate message

_Then_ expect the error

```
expiration: empty timestamp is not allowed: invalid request
```

## an error is returned if metadata is empty

_Given_ message

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_When_ validate message

_Then_ expect the error

```
metadata: empty string is not allowed: invalid request
```

## an error is returned if metadata exceeds 128 characters

_Given_ message

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_And_ metadata with length "129"

_When_ validate message

_Then_ expect the error

```
metadata: exceeds max length 128: invalid request
```

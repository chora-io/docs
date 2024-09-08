# Msg/UpdatePolicy

UpdatePolicy is successful when:
  - admin is the admin address

  UpdatePolicy has the following outcomes:
  - Policy is updated in state
  - EventUpdatePolicy is emitted
  - MsgUpdatePolicyResponse is returned

## The admin must be the admin address

### Background

_Given_ admin "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"

_And_ policy

```
{
  "signedBlocksWindow": 100
}
```

### admin is admin address

_When_ msg update policy

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "signedBlocksWindow": 100
}
```

_Then_ expect no error.

### admin is not admin address

_When_ msg update policy

```
{
  "admin": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "signedBlocksWindow": 100
}
```

_Then_ expect the error

```
admin: expected chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: received chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: unauthorized
```

## Policy is updated in state

### Background

_Given_ admin "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"

_And_ policy

```
{
  "signedBlocksWindow": 100
}
```

### policy updated

_When_ msg update policy

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "signedBlocksWindow": 200
}
```

_Then_ expect policy

```
{
  "signedBlocksWindow": 200
}
```

## EventUpdatePolicy emitted

### Background

_Given_ admin "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"

_And_ policy

```
{
  "signedBlocksWindow": 100
}
```

### event remove emitted

_When_ msg update policy

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "signedBlocksWindow": 200
}
```

_Then_ expect event update policy

```
{
  "signedBlocksWindow": 200
}
```

## MsgUpdatePolicyResponse returned

### Background

_Given_ admin "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"

_And_ policy

```
{
  "signedBlocksWindow": 100
}
```

### message response returned

_When_ msg update policy

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "signedBlocksWindow": 200
}
```

_Then_ expect response

```
{
  "signedBlocksWindow": 200
}
```

# Msg/Issue

Msg/Issue is successful when:
  - issuer is the voucher issuer
  - expiration must be in the future

  Msg/Issue has the following outcomes:
  - message response returned
  - Balance is added to or updated in state
  - EventIssue is emitted

## The issuer must be the voucher issuer

### Background

_Given_ block time "2020-01-01T00:00:00Z"

_And_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### issuer is voucher issuer

_When_ msg issue

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_Then_ expect no error.

### issuer is not voucher issuer

_When_ msg issue

```
{
  "id": 1,
  "issuer": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_Then_ expect the error

```
issuer chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: voucher issuer chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
```

## The expiration must be in the future

### Background

_Given_ block time "2020-01-01T00:00:00Z"

_And_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### expiration is greater than current block time

_When_ msg issue

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_Then_ expect no error.

### expiration is equal to current block time

_When_ msg issue

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25",
  "expiration": "2020-01-01T00:00:00Z"
}
```

_Then_ expect the error

```
expiration must be in the future: received 2020-01-01 00:00:00 +0000 UTC: invalid request
```

### expiration is less than current block time

_When_ msg issue

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25",
  "expiration": "2019-01-01T00:00:00Z"
}
```

_Then_ expect the error

```
expiration must be in the future: received 2019-01-01 00:00:00 +0000 UTC: invalid request
```

## The message response is returned

### Background

_Given_ block time "2020-01-01T00:00:00Z"

_And_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### message response returned

_When_ msg issue

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_Then_ expect response

```
{
  "id": 1
}
```

## Balance is added to or updated in state

### Background

_Given_ block time "2020-01-01T00:00:00Z"

_And_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### state balance added

_When_ msg issue

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_Then_ expect state balance

```
{
  "id": 1,
  "address": "hEyiXxUCaFQmkbuhO9r+QDscjIY=",
  "amount": "1.250000000000000000",
  "expiration": "2021-01-01T00:00:00Z"
}
```

### state balance updated

_Given_ balance

```
{
  "id": 1,
  "address": "hEyiXxUCaFQmkbuhO9r+QDscjIY=",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_When_ msg issue

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_Then_ expect state balance

```
{
  "id": 1,
  "address": "hEyiXxUCaFQmkbuhO9r+QDscjIY=",
  "amount": "2.500000000000000000",
  "expiration": "2021-01-01T00:00:00Z"
}
```

## EventIssue is emitted

### Background

_Given_ block time "2020-01-01T00:00:00Z"

_And_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### event issue emitted

_When_ msg issue

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "recipient": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_Then_ expect event issue

```
{
  "id": 1
}
```

### event issue emitted with metadata

_When_ msg issue

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

_Then_ expect event issue

```
{
  "id": 1,
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

# Msg/UpdateIssuer

UpdateIssuer is successful when:
  - issuer is the voucher issuer

  UpdateIssuer has the following outcomes:
  - message response returned
  - Content is updated in state
  - EventUpdateIssuer is emitted

## The issuer must be the voucher issuer

### Background

_Given_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### issuer is voucher issuer

_When_ msg update issuer

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_issuer": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect no error.

### issuer is not voucher issuer

_When_ msg update issuer

```
{
  "id": 1,
  "issuer": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "new_issuer": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect the error

```
issuer chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: voucher issuer chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
```

## The message response is returned

### Background

_Given_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### message response returned

_When_ msg update issuer

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_issuer": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect response

```
{
  "id": 1
}
```

## Content is updated in state

### Background

_Given_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### state voucher updated

_When_ msg update issuer

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_issuer": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect state voucher

```
{
  "id": 1,
  "issuer": "hEyiXxUCaFQmkbuhO9r+QDscjIY=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

## EventUpdateIssuer emitted

### Background

_Given_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### event update issuer emitted

_When_ msg update issuer

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_issuer": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect event update issuer

```
{
  "id": 1
}
```

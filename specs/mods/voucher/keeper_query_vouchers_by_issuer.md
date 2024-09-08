# Query/VouchersByIssuer

Query/VouchersByIssuer is successful when:
  - issuer is a bech32 address

  Query/VouchersByIssuer has the following outcomes:
  - query response returned

## The issuer address must be a valid bech32 address

### valid issuer address

_When_ query vouchers by issuer

```
{
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect no error.

### invalid issuer address

_When_ query vouchers by issuer

```
{
  "issuer": "foo"
}
```

_Then_ expect the error

```
issuer: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

## The query response is returned

### Background (voucher by different issuer)

_Given_ voucher

```
{
  "id": 1,
  "issuer": "hEyiXxUCaFQmkbuhO9r+QDscjIY=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### response with no vouchers by issuer

_When_ query vouchers by issuer

```
{
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect response

```
{
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "vouchers": [],
  "pagination": {}
}
```

### response with one voucher by issuer

_Given_ voucher

```
{
  "id": 2,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ query vouchers by issuer

```
{
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect response

```
{
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "vouchers": [
    {
      "id": 2,
      "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
    }
  ],
  "pagination": {
    "total": 1
  }
}
```

### response with two vouchers by issuer

_Given_ voucher

```
{
  "id": 2,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Given_ voucher

```
{
  "id": 3,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
}
```

_When_ query vouchers by issuer

```
{
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect response

```
{
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "vouchers": [
    {
      "id": 2,
      "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
    },
    {
      "id": 3,
      "metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
    }
  ],
  "pagination": {
    "total": 2
  }
}
```

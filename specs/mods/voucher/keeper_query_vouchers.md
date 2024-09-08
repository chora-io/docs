# Query/Vouchers

Query/Vouchers is successful when:
  - always (an error is never returned)

  Query/Vouchers has the following outcomes:
  - query response returned

## An error is never returned

### never error

_When_ query vouchers

```
{}
```

_Then_ expect no error.

## The query response is returned

### response with no vouchers

_When_ query vouchers

```
{}
```

_Then_ expect response

```
{
  "vouchers": [],
  "pagination": {}
}
```

### response with one voucher

_Given_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ query vouchers

```
{}
```

_Then_ expect response

```
{
  "vouchers": [
    {
      "id": 1,
      "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
    }
  ],
  "pagination": {
    "total": 1
  }
}
```

### response with two vouchers

_Given_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Given_ voucher

```
{
  "id": 2,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
}
```

_When_ query vouchers

```
{}
```

_Then_ expect response

```
{
  "vouchers": [
    {
      "id": 1,
      "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
    },
    {
      "id": 2,
      "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
    }
  ],
  "pagination": {
    "total": 2
  }
}
```

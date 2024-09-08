# Query/Voucher

Query/Voucher is successful when:
  - voucher with identifier exists

  Query/Voucher has the following outcomes:
  - query response returned

## The voucher must exist

### Background

_Given_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### voucher exists

_When_ query voucher

```
{
  "id": 1
}
```

_Then_ expect no error.

### voucher does not exist

_When_ query voucher

```
{
  "id": 2
}
```

_Then_ expect the error

```
voucher with id 2: not found
```

## The query response is returned

### Background

_Given_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### query response returned

_When_ query voucher

```
{
  "id": 1
}
```

_Then_ expect response

```
{
  "id": 1,
  "issuer": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

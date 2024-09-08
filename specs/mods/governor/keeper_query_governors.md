# Query/Governors

Query/Governors is successful when:
  - always (an error is never returned)

  Query/Governors has the following outcomes:
  - query response returned

## An error is never returned

### never error

_When_ query governors

```
{}
```

_Then_ expect no error.

## The query response is returned

### response with no governors

_When_ query governors

```
{}
```

_Then_ expect response

```
{
  "governors": [],
  "pagination": {}
}
```

### response with one governor

_Given_ governor

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ query governors

```
{}
```

_Then_ expect response

```
{
  "governors": [
    {
      "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
    }
  ],
  "pagination": {
    "total": 1
  }
}
```

### response with two governors

_Given_ governor

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Given_ governor

```
{
  "address": "hEyiXxUCaFQmkbuhO9r+QDscjIY=",
  "metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
}
```

_When_ query governors

```
{}
```

_Then_ expect response

```
{
  "governors": [
    {
      "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
    },
    {
      "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
      "metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
    }
  ],
  "pagination": {
    "total": 2
  }
}
```

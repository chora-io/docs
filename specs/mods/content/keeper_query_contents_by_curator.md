# Query/ContentsByCurator

Query/ContentsByCurator is successful when:
  - curator is a bech32 address

  Query/ContentsByCurator has the following outcomes:
  - query response returned

## The curator address must be a valid bech32 address

### valid curator address

_When_ query contents by curator

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect no error.

### invalid curator address

_When_ query contents by curator

```
{
  "curator": "foo"
}
```

_Then_ expect the error

```
curator: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

## The query response is returned

### response with no contents by curator

_Given_ content

```
{
  "curator": "hEyiXxUCaFQmkbuhO9r+QDscjIY=",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ query contents by curator

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect response

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "contents": [],
  "pagination": {}
}
```

### response with one content by curator

_Given_ content

```
{
  "curator": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ query contents by curator

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect response

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "contents": [
    {
      "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
    }
  ],
  "pagination": {
    "total": 1
  }
}
```

### response with two contents by curator

_Given_ content

```
{
  "curator": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Given_ content

```
{
  "curator": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "hash": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
}
```

_When_ query contents by curator

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect response

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "contents": [
    {
      "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
    },
    {
      "hash": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
    }
  ],
  "pagination": {
    "total": 2
  }
}
```

# Query/Contents

Query/Contents is successful when:
  - always (an error is never returned)

  Query/Contents has the following outcomes:
  - query response returned

## An error is never returned

### never error

_When_ query contents

```
{}
```

_Then_ expect no error.

## The query response is returned

### response with no contents

_When_ query contents

```
{}
```

_Then_ expect response

```
{
  "contents": [],
  "pagination": {}
}
```

### response with one content

_Given_ content

```
{
  "curator": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ query contents

```
{}
```

_Then_ expect response

```
{
  "contents": [
    {
      "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
    }
  ],
  "pagination": {
    "total": 1
  }
}
```

### response with two contents

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

_When_ query contents

```
{}
```

_Then_ expect response

```
{
  "contents": [
    {
      "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
    },
    {
      "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "hash": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
    }
  ],
  "pagination": {
    "total": 2
  }
}
```

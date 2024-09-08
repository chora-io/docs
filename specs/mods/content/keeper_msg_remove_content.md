# Msg/RemoveContent

RemoveContent is successful when:
  - curator is the content curator

  RemoveContent has the following outcomes:
  - message response returned
  - Content is removed from state
  - EventRemoveContent is emitted

## The curator must be the content curator

### Background

_Given_ content

```
{
  "curator": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### curator is content curator

_When_ msg remove content

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect no error.

### curator is not content curator

_When_ msg remove content

```
{
  "curator": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect the error

```
curator chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: content curator chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
```

## The message response is returned

### Background

_Given_ content

```
{
  "curator": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### message response returned

_When_ msg remove content

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect response

```
{
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

## Content is removed from state

### Background

_Given_ content

```
{
  "curator": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### state content removed

_When_ msg remove content

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect no state content with hash "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf".

## EventRemoveContent emitted

### Background

_Given_ content

```
{
  "curator": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### event delete emitted

_When_ msg remove content

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect event remove content

```
{
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

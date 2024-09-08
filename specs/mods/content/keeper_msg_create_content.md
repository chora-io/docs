# Msg/CreateContent

Msg/CreateContent is successful when:
  - always (an error is never returned)

  Msg/CreateContent has the following outcomes:
  - message response returned
  - Content is added to state
  - EventCreateContent is emitted

## An error is never returned

### never error

_When_ msg create content

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect no error.

## The message response is returned

### message response returned

_When_ msg create content

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

## Content is added to state

### state content added

_When_ msg create content

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect state content

```
{
  "curator": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

## EventCreateContent is emitted

### event create emitted

_When_ msg create content

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect event create content

```
{
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

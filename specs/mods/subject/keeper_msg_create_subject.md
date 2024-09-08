# Msg/CreateSubject

Msg/CreateSubject is successful when:
  - always (an error is never returned)

  Msg/CreateSubject has the following outcomes:
  - message response returned
  - Subject is added to state
  - EventCreateSubject is emitted

## An error is never returned

### never error

_Given_ subject sequence

```
{
  "sequence": "0"
}
```

_When_ msg create subject

```
{
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect no error.

## The message response is returned

### message response returned

_Given_ subject sequence

```
{
  "sequence": "0"
}
```

_When_ msg create subject

```
{
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect response

```
{
  "address": "chora140dhknrxj0vjsn4serghtw7wydm2a6mykxmkl3lmecegk4pp32dqf6sw5n"
}
```

## Subject is added to state

### state subject added

_Given_ subject sequence

```
{
  "sequence": "0"
}
```

_When_ msg create subject

```
{
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect state subject

```
{
  "address": "q9t7TGaT2ShOsMjRdbvOI3au62Sxt2/H+84yi1Qhipo=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

## EventCreateSubject is emitted

### event create emitted

_Given_ subject sequence

```
{
  "sequence": "0"
}
```

_When_ msg create subject

```
{
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect event create subject

```
{
  "address": "chora140dhknrxj0vjsn4serghtw7wydm2a6mykxmkl3lmecegk4pp32dqf6sw5n"
}
```

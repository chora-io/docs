# Msg/CreateValidator

Msg/CreateValidator is successful when:
  - always (an error is never returned)

  Msg/CreateValidator has the following outcomes:
  - Validator is added to state
  - EventCreateValidator is emitted
  - MsgCreateValidatorResponse is returned

## The operator must be the validator operator

### never error

_When_ msg create validator

```
{
  "operator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect no error.

## Validator is added to state

### state validator added

_When_ msg create validator

```
{
  "operator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect state validator

```
{
  "operator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

## EventCreateValidator is emitted

### event add emitted

_When_ msg create validator

```
{
  "operator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect event add

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

## MsgCreateValidatorResponse is returned

### message response returned

_When_ msg create validator

```
{
  "operator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Then_ expect response

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

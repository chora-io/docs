# Msg/RemoveGovernor

RemoveGovernor is successful when:
  - address is the governor address
  - governor with address exists

  RemoveGovernor has the following outcomes:
  - Governor is removed from state
  - EventRemoveGovernor is emitted
  - MsgRemoveGovernorResponse is returned

## The admin must be the governor address

### Background

_Given_ governor

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### address is governor address

_When_ msg remove governor

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect no error.

### address is not governor address

_When_ msg remove governor

```
{
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect the error

```
governor with address chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: not found: not found
```

## The governor must exist

### Background

_Given_ governor

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### governor exists

_When_ msg remove governor

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect no error.

### governor does not exist

_When_ msg remove governor

```
{
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect the error

```
governor with address chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: not found: not found
```

## Governor is removed from state

### Background

_Given_ governor

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### state governor removed

_When_ msg remove governor

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect no governor with address "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38".

## EventRemoveGovernor emitted

### Background

_Given_ governor

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### event remove emitted

_When_ msg remove governor

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect event remove

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

## MsgRemoveGovernorResponse is returned

### Background

_Given_ governor

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### message response returned

_When_ msg remove governor

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect response

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

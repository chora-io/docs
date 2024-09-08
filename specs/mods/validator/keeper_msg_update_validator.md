# Msg/UpdateValidator

UpdateValidator is successful when:
  - validator with address exists

  UpdateValidator has the following outcomes:
  - Validator is updated in state
  - EventUpdateValidator is emitted
  - MsgUpdateValidatorResponse is returned

## The validator must exist

### Background

_Given_ validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### validator exists

_When_ msg update validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
}
```

_Then_ expect no error.

### validator does not exist

_When_ msg update validator

```
{
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "new_metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
}
```

_Then_ expect the error

```
validator with address chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: not found: not found
```

## Validator is updated in state

### Background

_Given_ validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### state validator updated

_When_ msg update validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
}
```

_Then_ expect state validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
}
```

## EventUpdateValidator emitted

### Background

_Given_ validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### event update validator emitted

_When_ msg update validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
}
```

_Then_ expect event update validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

## MsgUpdateValidatorResponse is returned

### Background

_Given_ validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### message response returned

_When_ msg update validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
}
```

_Then_ expect response

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

# Msg/RemoveValidator

RemoveValidator is successful when:
  - validator with address exists

  RemoveValidator has the following outcomes:
  - Validator is removed from state
  - ValidatorSigningInfo is removed from state
  - EventRemoveValidator is emitted
  - MsgRemoveValidatorResponse is returned

## The validator must exist

### Background

_Given_ validator

```
{
  "operator": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_And_ validator signing info

```
{
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "missed_blocks": [],
  "missed_blocks_count": 0
}
```

### validator exists

_When_ msg remove validator

```
{
  "operator": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect no error.

### validator does not exist

_When_ msg remove validator

```
{
  "operator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect the error

```
validator with address chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: not found: not found
```

## Validator is removed from state

### Background

_Given_ validator

```
{
  "operator": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_And_ validator signing info

```
{
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "missed_blocks": [],
  "missed_blocks_count": 0
}
```

### state validator removed

_When_ msg remove validator

```
{
  "operator": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect no validator with address "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup".

## ValidatorSigningInfo is removed from state

### Background

_Given_ validator

```
{
  "operator": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_And_ validator signing info

```
{
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "missed_blocks": [],
  "missed_blocks_count": 0
}
```

### state validator removed

_When_ msg remove validator

```
{
  "operator": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect no validator signing info with address "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup".

## EventRemoveValidator emitted

### Background

_Given_ validator

```
{
  "operator": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_And_ validator signing info

```
{
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "missed_blocks": [],
  "missed_blocks_count": 0
}
```

### event remove emitted

_When_ msg remove validator

```
{
  "operator": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect event remove

```
{
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

## MsgRemoveValidatorResponse is returned

### Background

_Given_ validator

```
{
  "operator": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_And_ validator signing info

```
{
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "missed_blocks": [],
  "missed_blocks_count": 0
}
```

### message response returned

_When_ msg remove validator

```
{
  "operator": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect response

```
{
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

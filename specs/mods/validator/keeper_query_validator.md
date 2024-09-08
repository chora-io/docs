# Query/Validator

Query/Validator is successful when:
  - validator with address exists

  Query/Validator has the following outcomes:
  - query response returned

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

_When_ query validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect no error.

### validator does not exist

_When_ query validator

```
{
  "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect the error

```
validator with address chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: not found
```

## The query response is returned

### Background

_Given_ validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### query response returned

_When_ query validator

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect response

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

# Msg/UpdateSubjectSteward

UpdateSubjectSteward is successful when:
  - steward is the subject steward

  UpdateSubjectSteward has the following outcomes:
  - message response returned
  - Content is updated in state
  - EventUpdateSubjectSteward is emitted

## The steward must be the subject steward

### Background

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### steward is subject steward

_When_ msg update subject steward

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_steward": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect no error.

### steward is not subject steward

_When_ msg update subject steward

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
  "new_steward": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect the error

```
steward chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: subject steward chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
```

## The message response is returned

### Background

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### message response returned

_When_ msg update subject steward

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_steward": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect response

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4"
}
```

## Content is updated in state

### Background

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### state subject updated

_When_ msg update subject steward

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_steward": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect state subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "hEyiXxUCaFQmkbuhO9r+QDscjIY=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

## EventUpdateSubjectSteward emitted

### Background

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### event update subject steward emitted

_When_ msg update subject steward

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_steward": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect event update subject steward

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4"
}
```

# Msg/RemoveSubject

Msg/RemoveSubject is successful when:
  - steward is the subject steward

  Msg/RemoveSubject has the following outcomes:
  - message response returned
  - Subject is removed from state
  - EventRemoveSubject is emitted

## Steward is the subject steward

### steward is subject steward

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ msg remove subject

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect no error.

### steward is not subject steward

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ msg remove subject

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup"
}
```

_Then_ expect the error

```
steward chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup: subject steward chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38: unauthorized
```

## The message response is returned

### message response returned

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ msg remove subject

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect response

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4"
}
```

## Subject is removed from state

### state subject removed

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ msg remove subject

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect no state subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0="
}
```

## EventRemoveSubject is emitted

### event remove emitted

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ msg remove subject

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect event remove subject

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4"
}
```

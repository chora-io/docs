# Query/Subject

Query/Subject is successful when:
  - subject with identifier exists

  Query/Subject has the following outcomes:
  - query response returned

## The subject must exist

### Background

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### subject exists

_When_ query subject

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4"
}
```

_Then_ expect no error.

### subject does not exist

_When_ query subject

```
{
  "address": "chora1jugw586lv99apafk3x7vczldmm6s2judwl599xhfh9hvq7zm0tgs7jccnn"
}
```

_Then_ expect the error

```
subject with address chora1jugw586lv99apafk3x7vczldmm6s2judwl599xhfh9hvq7zm0tgs7jccnn: not found
```

## The query response is returned

### Background

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

### query response returned

_When_ query subject

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4"
}
```

_Then_ expect response

```
{
  "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

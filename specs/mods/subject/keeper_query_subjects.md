# Query/Subjects

Query/Subjects is successful when:
  - always (an error is never returned)

  Query/Subjects has the following outcomes:
  - query response returned

## An error is never returned

### never error

_When_ query subjects

```
{}
```

_Then_ expect no error.

## The query response is returned

### response with no subjects

_When_ query subjects

```
{}
```

_Then_ expect response

```
{
  "subjects": [],
  "pagination": {}
}
```

### response with one subject

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ query subjects

```
{}
```

_Then_ expect response

```
{
  "subjects": [
    {
      "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
      "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
    }
  ],
  "pagination": {
    "total": 1
  }
}
```

### response with two subjects

_Given_ subject

```
{
  "address": "G+ksLYTNBuzyqdTij+Xkx1ztGDzOMACTUcjF6iEkiH0=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_Given_ subject

```
{
  "address": "lxDqH19hS9D1Nom8zAvt3vUFS4136FKa6bluwHhbetE=",
  "steward": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
}
```

_When_ query subjects

```
{}
```

_Then_ expect response

```
{
  "subjects": [
    {
      "address": "chora1r05jctvye5rweu4f6n3gle0ycaww6xpueccqpy63erz75gfy3p7snu2hw4",
      "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
    },
    {
      "address": "chora1jugw586lv99apafk3x7vczldmm6s2judwl599xhfh9hvq7zm0tgs7jccnn",
      "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "metadata": "chora:13toVfwypkE1AwUzQmuBHk28WWwCa5QCynCrBuoYgMvN2iroywJ5Vi1.rdf"
    }
  ],
  "pagination": {
    "total": 2
  }
}
```

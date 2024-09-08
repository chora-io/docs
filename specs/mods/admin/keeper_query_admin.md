# Query/Admin

Query/Admin is successful when:
  - admin with identifier exists

  Query/Admin has the following outcomes:
  - query response returned

## The query response is returned

### Background

_Given_ admin

```
{
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y="
}
```

### query response returned

_When_ query admin

```
{}
```

_Then_ expect response

```
{
  "admin": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

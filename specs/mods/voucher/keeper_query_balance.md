# Query/Balance

Query/Balance is successful when:
  - always (an error is never returned)

  Query/Balance has the following outcomes:
  - query response returned

## An error is never returned

### Background

_Given_ balance

```
{
  "id": 1,
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

### balance exists

_When_ query balance

```
{
  "id": 1,
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect no error.

### balance does not exist

_When_ query balance

```
{
  "id": 2,
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect no error.

## The query response is returned

### query response returned with no amounts

_When_ query balance

```
{
  "id": 1,
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect response

```
{
  "id": 1,
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "total_amount": "0.000000000000000000",
  "amounts": []
}
```

### query response returned with one amount

_Given_ balance

```
{
  "id": 1,
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "amount": "1.250000000000000000",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_When_ query balance

```
{
  "id": 1,
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect response

```
{
  "id": 1,
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "total_amount": "1.250000000000000000",
  "amounts": [
    {
      "amount": "1.250000000000000000",
      "expiration": "2021-01-01T00:00:00Z"
    }
  ]
}
```

### query response returned with multiple amounts

_Given_ balance

```
{
  "id": 1,
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_Given_ balance

```
{
  "id": 1,
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "amount": "1.25",
  "expiration": "2022-01-01T00:00:00Z"
}
```

_When_ query balance

```
{
  "id": 1,
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_Then_ expect response

```
{
  "id": 1,
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "total_amount": "2.500000000000000000",
  "amounts": [
    {
      "amount": "1.25",
      "expiration": "2021-01-01T00:00:00Z"
    },
    {
      "amount": "1.25",
      "expiration": "2022-01-01T00:00:00Z"
    }
  ]
}
```

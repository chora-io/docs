# Query/BalancesByVoucher

Query/BalancesByVoucher is successful when:
  - always (an error is never returned)

  Query/BalancesByVoucher has the following outcomes:
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

_When_ query balances by voucher

```
{
  "id": 1
}
```

_Then_ expect no error.

### balance does not exist

_When_ query balances by voucher

```
{
  "id": 2
}
```

_Then_ expect no error.

## The query response is returned

### query response returned with no amounts

_When_ query balances by voucher

```
{
  "id": 1
}
```

_Then_ expect response

```
{
  "id": 1,
  "total_amounts": [],
  "pagination": {}
}
```

### query response returned with one address

_Given_ balance

```
{
  "id": 1,
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_When_ query balances by voucher

```
{
  "id": 1
}
```

_Then_ expect response

```
{
  "id": 1,
  "total_amounts": [
    {
      "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "total_amount": "1.250000000000000000"
    }
  ],
  "pagination": {
    "total": 1
  }
}
```

### query response returned with multiple addresses

_Given_ balance

```
{
  "id": 1,
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_And_ balance

```
{
  "id": 1,
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "amount": "1.25",
  "expiration": "2022-01-01T00:00:00Z"
}
```

_And_ balance

```
{
  "id": 1,
  "address": "hEyiXxUCaFQmkbuhO9r+QDscjIY=",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_When_ query balances by voucher

```
{
  "id": 1
}
```

_Then_ expect response

```
{
  "id": 1,
  "total_amounts": [
    {
      "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
      "total_amount": "2.500000000000000000"
    },
    {
      "address": "chora1s3x2yhc4qf59gf53hwsnhkh7gqa3eryxnu6nup",
      "total_amount": "1.250000000000000000"
    }
  ],
  "pagination": {
    "total": 3
  }
}
```

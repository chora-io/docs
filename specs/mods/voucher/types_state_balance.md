# Balance

## valid balance

_Given_ balance

```
{
  "id": 1,
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "amount": "1.25",
  "expiration": "2021-01-01T00:00:00Z"
}
```

_When_ validate balance

_Then_ expect no error.

## an error is returned if id is empty

_Given_ balance

```
{}
```

_When_ validate balance

_Then_ expect the error

```
id: empty or zero is not allowed: parse error
```

## an error is returned if address is empty

_Given_ balance

```
{
  "id": 1
}
```

_When_ validate balance

_Then_ expect the error

```
address: empty address string is not allowed: parse error
```

## an error is returned if amount is empty

_Given_ balance

```
{
  "id": 1,
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y="
}
```

_When_ validate balance

_Then_ expect the error

```
amount: empty string is not allowed: parse error
```

## an error is returned if amount is zero

_Given_ balance

```
{
  "id": 1,
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "amount": "0"
}
```

_When_ validate balance

_Then_ expect the error

```
amount: expected a positive decimal, got 0.000000000000000000: invalid decimal string: parse error
```

## an error is returned if amount is negative

_Given_ balance

```
{
  "id": 1,
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "amount": "-1.25"
}
```

_When_ validate balance

_Then_ expect the error

```
amount: expected a positive decimal, got -1.250000000000000000: invalid decimal string: parse error
```

## an error is returned if expiration is empty

_Given_ balance

```
{
  "id": 1,
  "address": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "amount": "1.25"
}
```

_When_ validate balance

_Then_ expect the error

```
expiration: empty timestamp is not allowed: parse error
```

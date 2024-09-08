# Voucher

## valid voucher

_Given_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ validate voucher

_Then_ expect no error.

## an error is returned if id is empty

_Given_ voucher

```
{}
```

_When_ validate voucher

_Then_ expect the error

```
id: empty or zero is not allowed: parse error
```

## an error is returned if issuer is empty

_Given_ voucher

```
{
  "id": 1
}
```

_When_ validate voucher

_Then_ expect the error

```
issuer: empty address string is not allowed: parse error
```

## an error is returned if metadata is empty

_Given_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y="
}
```

_When_ validate voucher

_Then_ expect the error

```
metadata: empty string is not allowed: parse error
```

## an error is returned if metadata exceeds 128 characters

_Given_ voucher

```
{
  "id": 1,
  "issuer": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y="
}
```

_And_ metadata with length "129"

_When_ validate voucher

_Then_ expect the error

```
metadata: exceeds max length 128: parse error
```

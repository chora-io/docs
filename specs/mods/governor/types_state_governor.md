# Governor

## valid governor

_Given_ governor

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ validate governor

_Then_ expect no error.

## an error is returned if address is empty

_Given_ governor

```
{}
```

_When_ validate governor

_Then_ expect the error

```
address: empty address string is not allowed: parse error
```

## an error is returned if address is not a bech32 address

_Given_ governor

```
{
  "address": "foo"
}
```

_When_ validate governor

_Then_ expect the error

```
address: decoding bech32 failed: invalid bech32 string length 3: parse error
```

## an error is returned if metadata is empty

_Given_ governor

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_When_ validate governor

_Then_ expect the error

```
metadata: empty string is not allowed: parse error
```

## an error is returned if metadata exceeds 128 characters

_Given_ governor

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_And_ metadata with length "129"

_When_ validate governor

_Then_ expect the error

```
metadata: exceeds max length 128: parse error
```

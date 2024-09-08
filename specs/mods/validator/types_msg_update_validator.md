# MsgUpdateValidator

## valid message

_Given_ message

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "new_metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ validate message

_Then_ expect no error.

## an error is returned if address is empty

_Given_ message

```
{}
```

_When_ validate message

_Then_ expect the error

```
address: empty address string is not allowed: invalid address
```

## an error is returned if address is not a bech32 address

_Given_ message

```
{
  "address": "foo"
}
```

_When_ validate message

_Then_ expect the error

```
address: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

## an error is returned if new metadata is empty

_Given_ message

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_When_ validate message

_Then_ expect the error

```
new metadata: empty string is not allowed: invalid request
```

## an error is returned if new metadata exceeds 128 characters

_Given_ message

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_And_ new metadata with length "129"

_When_ validate message

_Then_ expect the error

```
new metadata: exceeds max length 128: invalid request
```

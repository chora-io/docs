# MsgCreateSubject

## valid message

_Given_ message

```
{
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "metadata": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ validate message

_Then_ expect no error.

## an error is returned if steward is empty

_Given_ message

```
{}
```

_When_ validate message

_Then_ expect the error

```
steward: empty address string is not allowed: invalid address
```

## an error is returned if steward is not a bech32 address

_Given_ message

```
{
  "steward": "foo"
}
```

_When_ validate message

_Then_ expect the error

```
steward: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

## an error is returned if metadata is empty

_Given_ message

```
{
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_When_ validate message

_Then_ expect the error

```
metadata: empty string is not allowed: invalid request
```

## an error is returned if metadata exceeds 128 characters

_Given_ message

```
{
  "steward": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_And_ metadata with length "129"

_When_ validate message

_Then_ expect the error

```
metadata: exceeds max length 128: invalid request
```

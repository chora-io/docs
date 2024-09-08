# MsgDelete

## valid message

_Given_ message

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ validate message

_Then_ expect no error.

## an error is returned if curator is empty

_Given_ message

```
{}
```

_When_ validate message

_Then_ expect the error

```
curator: empty address string is not allowed: invalid address
```

## an error is returned if curator is not a bech32 address

_Given_ message

```
{
  "curator": "foo"
}
```

_When_ validate message

_Then_ expect the error

```
curator: decoding bech32 failed: invalid bech32 string length 3: invalid address
```

## an error is returned if hash is empty

_Given_ message

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_When_ validate message

_Then_ expect the error

```
hash: empty string is not allowed: invalid request
```

## an error is returned if hash exceeds 128 characters

_Given_ message

```
{
  "curator": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_And_ hash with length "129"

_When_ validate message

_Then_ expect the error

```
hash: exceeds max length 128: invalid request
```

# ValidatorSigningInfo

## valid validator signing info

_Given_ validator signing info

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38",
  "missedBlocksCount": 10
}
```

_When_ validate validator signing info

_Then_ expect no error.

## valid validator signing info with zero value

_Given_ validator signing info

```
{
  "address": "chora1q5m97jdcksj24g9enlkjqq75ygt5q6ak54jk38"
}
```

_When_ validate validator signing info

_Then_ expect no error.

## an error is returned if address is empty

_Given_ validator signing info

```
{}
```

_When_ validate validator signing info

_Then_ expect the error

```
address: empty address string is not allowed: parse error
```

## an error is returned if address is not a bech32 address

_Given_ validator signing info

```
{
  "address": "foo"
}
```

_When_ validate validator signing info

_Then_ expect the error

```
address: decoding bech32 failed: invalid bech32 string length 3: parse error
```

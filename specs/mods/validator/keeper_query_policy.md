# Query/Policy

Query/Policy is successful when:
  - always (an error is never returned)

  Query/Policy has the following outcomes:
  - query response returned

## An error is never returned

### never error

_Given_ policy

```
{
  "signedBlocksWindow": 100
}
```

_When_ query policy

_Then_ expect no error.

### never error with zero value

_When_ query policy

_Then_ expect no error.

## The query response is returned

### query response returned

_Given_ policy

```
{
  "signedBlocksWindow": 100
}
```

_When_ query policy

_Then_ expect response

```
{
  "signedBlocksWindow": 100
}
```

### query response returned with zero value

_Given_ policy

```
{
  "signedBlocksWindow": 0
}
```

_When_ query policy

_Then_ expect response

```
{
  "signedBlocksWindow": 0
}
```

# Content

## valid content

_Given_ content

```
{
  "curator": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y=",
  "hash": "chora:13toVfvC2YxrrfSXWB5h2BGHiXZURsKxWUz72uDRDSPMCrYPguGUXSC.rdf"
}
```

_When_ validate content

_Then_ expect no error.

## an error is returned if curator is empty

_Given_ content

```
{}
```

_When_ validate content

_Then_ expect the error

```
curator: empty address string is not allowed: parse error
```

## an error is returned if hash is empty

_Given_ content

```
{
  "curator": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y="
}
```

_When_ validate content

_Then_ expect the error

```
hash: empty string is not allowed: parse error
```

## an error is returned if hash exceeds 128 characters

_Given_ content

```
{
  "curator": "BTZfSbi0JKqguZ/tIAPUIhdAa7Y="
}
```

_And_ hash with length "129"

_When_ validate content

_Then_ expect the error

```
hash: exceeds max length 128: parse error
```

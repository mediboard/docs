---
sidebar_position: 1
---

# Search

Lesigraphically search treatments. Returns a list of names and IDs

## Endpoint

**URL** : `/treatments/search?<query_params>`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

| parameter  | value                                            | data type  |
|------------|--------------------------------------------------|------------|
| q          | search query - typically the name of a treatment | string     |
| conditions | condition ids the treatment was studied on       | array[int] |


## Examples

```jsx title="GET https://api.mediboard.fyi/treatments/search?q=ambien"
treatments: [
  {
    id: 
  }
]
```


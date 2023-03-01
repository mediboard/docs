---
sidebar_position: 1
---

# Search

Lesigraphically search treatments. Returns a list of names and IDs

## Endpoint

**URL** : `/api/treatments/search?<query_params>`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

| parameter  | value                                            | data type  |
|------------|--------------------------------------------------|------------|
| q          | search query - typically the name of a treatment | string     |
| conditions | condition ids the treatment was studied on       | array[int] |


## Examples

```jsx title="GET https://api.mediboard.fyi/api/treatments/search?q=ambien"
"results": [
  {
    "description": null,
    "from_study": null,
    "id": 277,
    "name": "zolpidem",
    "no_studies": null,
    "treatment_group": null
  }
]
```


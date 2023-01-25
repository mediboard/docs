---
sidebar_position: 1
---

# Search

Semantically search studies by title and description. Returns a list of studies and their IDs

## Endpoint

**URL** : `/studies/search?<query_params>`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

| parameter  | value                                               | data type  |
|------------|-----------------------------------------------------|------------|
| q          | search query                                        | string     |
| conditions | condition ids where the effects came from           | array[int] |
| treatments | treatment ids that the studies investigated         | array[int] |
| gender     | filter studies by gender                            | string     |
| phase      | study phase                                         | string     |
| results    | does the study have results                         | boolean    |
| reason     | reason trial was canceled if any                    | string     |
| add_ons    | additional treatments added on to primary treatment | boolean    |


## Examples

```jsx title="GET https://api.mediboard.fyi/treatments/search?q=ambien"
treatments: [
  {
    id: 
  }
]
```
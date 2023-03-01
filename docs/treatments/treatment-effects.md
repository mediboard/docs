---
sidebar_position: 3
---

# Effects

List adverse effects a treatment split by studies

## Endpoint

**URL** : `/api/treatments/<treatment_ids>/effects?<query_params>`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

| parameter  | value                                               | data type  |
|------------|-----------------------------------------------------|------------|
| conditions | condition ids where the effects came from           | array[int] |
| gender     | gender the adverse effects were tested on           | string     |
| strict     | allow effects from additional treatments            | boolean    |


## Examples

```jsx title="GET https://api.mediboard.fyi/treatments/search?q=ambien"
treatments: [
  {
    id: 
  }
]
```

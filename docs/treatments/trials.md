---
sidebar_position: 6
---

# Trials

List the clinical trials that studied the treament(s)

## Endpoint

**URL** : `/treatments/<treatment_ids:list[int]>/trials?<query_params>`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

| parameter  | value                                               | data type  |
|------------|-----------------------------------------------------|------------|
| conditions | condition ids where the effects came from           | array[int] |
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

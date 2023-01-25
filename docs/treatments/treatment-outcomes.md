---
sidebar_position: 2
---

# Outcomes

Get the data points associated with a treatment.

## Endpoint

**URL** : `/treatments/<treatment_ids>/outcomes?<query_params>`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

| parameter  | value                                                           | data type  |
|------------|-----------------------------------------------------------------|------------|
| q          | search query for semantic search                                | string     |
| conditions | condition ids the outcomes came from                            | array[int] |
| string     | allow outcomes from additional treatments                       | boolean    |



## Examples

```jsx title="GET https://api.mediboard.fyi/treatments/33/outcomes?conditions=14,23&add_ons=12,23"
treatments: [
  {
    id: 
  }
]
```

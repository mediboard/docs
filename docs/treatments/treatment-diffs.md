---
sidebar_position: 5
---

# Diffs

Get datapoints directly comparing two treatments i.e ambien vs lunesta, ambien vs placebo

## Endpoint

**URL** : `/treatments/diffs?<query_params>`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

| parameter  | value                                            | data type  |
|------------|--------------------------------------------------|------------|
| group_a    | list of treatments in group_a                    | array[int] |
| group_b    | list of treatments in group_b                    | array[int] |

- To list all diffs containing a treatment, leave group_b empty


## Examples

```jsx title="GET https://api.mediboard.fyi/treatments/search?q=ambien"
treatments: [
  {
    id: 
  }
]
```

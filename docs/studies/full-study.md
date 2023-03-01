---
sidebar_position: 2
---

# Full Study

Gather all data from a study

## Endpoint

**URL** : `/api/studies/<study_id>`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None


## Examples

```jsx title="GET https://api.mediboard.fyi/api/studies/1234"
{
    "studies": [
        {
            "completion_date": "2010-06-01",
            "conditions": [
                {
                    "condition_group": null,
                    "id": 1044,
                    "name": "Japanese Encephalitis"
                }
            ],
            "description": "The objective is to assess immunogenicity of a commercial IC51 batch at 3 different time points post filling (12, 18, 24 months) in terms of Geometric Mean Titers (GMT) for anti-JEV neutralizing antibodies at Day 56 after the first vaccination.",
            "external_ids": [
                "NCT00776230"
            ],
            "gender": "gender.ALL",
            "id": 1239,
            "intervention_type": "intervention_type.SINGLE_GROUP_ASSIGNMENT",
            "max_age": -1,
            "min_age": 18,
            "min_age_units": "max_age_units.NA",
            "official_title": "Immunogenicity of a Commercial Batch of the Japanese Encephalitis Vaccine IC51 up to Twenty-four Months Post Filling. An Open-label, Multicenter, Phase 3 Study",
            "phase": "Phase 3",
            "purpose": "Prevention",
            "responsible_party": "NA",
            "results_summary": null,
            "short_title": "Immunogenicity of a Commercial Batch of JEV IC51 up to 24 Months Post Filling",
            "sponsor": "Valneva Austria GmbH",
            "status": "Completed",
            "stopped_reason": "NA",
            "treatments": [
                {
                    "description": null,
                    "from_study": null,
                    "id": 15,
                    "name": "vaccines",
                    "no_studies": null,
                    "treatment_group": null
                }
            ],
            "type": "Interventional",
            "upload_date": "Tue, 01 Mar 2016 00:00:00 GMT"
        }
    ]
}
```
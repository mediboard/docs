---
sidebar_position: 1
slug: /
---

# Intro

MediBoard is a comprehensive database that provides developers with access to the latest and greatest clinical data for thousands of treatments and procedures.

With MediBoard, you can access **totally structured data** that can be used for training machine learning models, on-the-fly meta-analysis, or displaying up-to-date clinical information. All data is updated in real time on our end.

MediBoard can be accessed via an HTTP REST API.

In this documentation, you'll find all the information you need to get started with MediBoard API, including API endpoints, request and response formats, authentication and authorization methods, and more. We encourage you to explore the documentation thoroughly and reach out to us if you have any questions or feedback.

## Getting Started

Get started by **creating a new account** on our main site: **[mediboard.fyi](https://app.mediboard.fyi)**.

Navigate to the **settings page** and **register for API access**. After purchase you should be able to see a key in your account settings page.


## Making a Request 

Lets's look at all the **effects** for a **treatment**.

First let's **find the name** of the treatment we want:

```bash
curl -X GET "https://api.mediboard.fyi/api/treatments/search?q=gabapentin" \
-H "Authorization: Bearer <your_access_token>"

```

```json
{
    "results": [
        {
            "description": null,
            "from_study": null,
            "id": 12,
            "name": "gabapentin",
            "no_studies": null,
            "treatment_group": null
        }
    ]
}
```

Now that we know the name, we can query for the side effects:
```bash
curl -X GET "https://api.mediboard.fyi/api/treatments/gabapentin/effects" \
-H "Authorization: Bearer <your_access_token>"

```

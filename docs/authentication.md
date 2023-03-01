---
sidebar_position: 5
---

# Authentication

This API uses **bearer token** authentication to authorize requests. To authenticate a request, include a bearer token in the Authorization header of the request.

```bash
curl -X GET "https://api.mediboard.fyi/api/treatments/search?q=gabapentin" \
-H "Authorization: Bearer <your_access_token>"

```

Replace **<your_access_token>** with your actual access token. To obtain an access token, please contact the API provider.

If the request is not properly authenticated or the token is invalid, the API will respond with a **401 Unauthorized** status code.



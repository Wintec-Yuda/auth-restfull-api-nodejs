# API Specification for User Operations

### Endpoint: POST /api/register

Request Body:

```json
{
  "name": "user",
  "email": "user@gmail.com",
  "password": "iwoiwhdodd8uu983yd89yduwdh",
  "role": "user | admin"
}
```

Response Body Success:

```json
{
  "data": {
    "id": "ijui3h38yr748ryhui4ry84y49823yr",
    "name": "user",
    "email": "user@gmail.com",
    "role": "user | admin"
  }
}
```

Response Body Error:

```json
{
  "errors": "Validation error"
}
```

### Endpoint: POST /api/login

Request Body:

```json
{
  "email": "user@gmail.com",
  "password": "iwoiwhdodd8uu983yd89yduwdh"
}
```

Response Body Success:

```json
{
  "data": {
    "id": "ijui3h38yr748ryhui4ry84y49823yr",
    "name": "user",
    "email": "user@gmail.com",
    "role": "user | admin"
  },
  "token": "jwt token"
}
```

Response Body Error:

```json
{
  "errors": "Validation error"
}
```

### Endpoint: GET /api/users

Response Body Success:

```json
{
  "data": [
    {
      "id": "huggf874yf784fy73uiehd8734y78yg378",
      "name": "user1",
      "email": "user1@gmail.com",
      "role": "user | admin"
    },
    {
      "id": "iuy786qwe987wer234sdfw3456sdfg987",
      "name": "user2",
      "email": "user2@gmail.com",
      "role": "user | admin"
    }
  ]
}
```

Response Body Error:

```json
{
  "errors": "Internal Server error"
}
```

## Delete User

### Endpoint: DELETE /api/users/{id}

Response Body Success:

```json
{
  "data": "User deleted successfully"
}
```

Response Body Error:

```json
{
  "errors": "User not found"
}
```

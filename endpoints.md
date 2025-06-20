
# API Documentation

This document describes the available endpoints for interacting with the Neo4j database.

Responses may not be correct.

---

## -1. Get Person to Person

- **Endpoint**: `/api/get-person-to-person/name1/:name1/name2/:name2`
- **Method**: GET
- **Description**: Getting the route from one person to another

**Example Request**:
```
GET /api/get-person-to-person/name1/Mia Garcia/name2/Layla Williams
```

**Example Response**:
```json
{
  "message": "Yes"
}
```

## 1. Get Area Connections

- **Endpoint**: `/api/get-area-connection`
- **Method**: GET
- **Description**: Retrieves all immediate connections related under an area, including suites, and persons connected to the area.

**Example Request**:
```
GET /api/get-area-connection
```

**Example Response**:
```json
{
  "message": "Connected to Neo4j",
  "data": [
    {
      "startNode": {
        "name": "Area 1",
        "id": 2
      },
      "relationship": "areaToSuite",
      "connectedNode": {
        "name": "Suite A",
        "id": 3
      }
    }
  ]
}
```

---

## 2. Get Department Connections

- **Endpoint**: `/api/get-department-connection`
- **Method**: GET
- **Description**: Retrieves connections related to a department, including areas, and persons.

**Example Request**:
```
GET /api/get-department-connection
```

**Example Response**:
```json
{
  "message": "Connected to Neo4j",
  "data": [
    {
      "startNode": {
        "name": "Enterprise Technology",
        "id": 1
      },
      "relationship": "departmentToArea",
      "connectedNode": {
        "name": "Area 1",
        "id": 2
      }
    }
  ]
}
```

---

## 3. Get Everything Connected

- **Endpoint**: `/api/get-everything`
- **Method**: GET
- **Description**: Retrieves all nodes and relationships.

**Example Request**:
```
GET /api/get-everything
```

**Example Response**:
```json
{
  "message": "Connected to Neo4j",
  "data": [
    {
      "startNode": {
        "name": "Enterprise Technology",
        "id": 1
      },
      "relationship": "departmentToArea",
      "connectedNode": {
        "name": "Area 1",
        "id": 2
      }
    }
  ]
}
```

---

## 4. Get Node by ID, Name, or Description

- **Endpoint**: `/api/get-node/id/:id`, `/api/get-node/name/:name`, `/api/get-node/description/:description`
- **Method**: GET
- **Description**: Retrieves a node based on ID, name, or description.

**Query Parameters**:
- `id` (optional)
- `name` (optional)
- `description` (optional)

**Example Requests**:
```
GET /api/get-node/id=1
GET /api/get-node/name=Enterprise%20Technology
GET /api/get-node/description=All%20the%20technology%20plus%20all%20the%20enterprise
```

**Example Response**:
```json
{
  "nodes": [
    {
      "id": 1,
      "name": "Enterprise Technology",
      "description": "All the technology plus all the enterprise"
    }
  ]
}
```

---

## 5. Get People in a Team

- **Endpoint**: `/api/get-people-in-team`
- **Method**: GET
- **Description**: Retrieves all persons connected to all respective teams.

**Example Request**:
```
GET /api/get-people-in-team
```

**Example Response**:
```json
{
  "team": "Team Alpha",
  "people": [
    {
      "name": "John Doe",
      "role": "Developer"
    }
  ]
}
```

---

## 6. Get Product Relations

- **Endpoint**: `/api/get-prod-relations`
- **Method**: GET
- **Description**: Retrieves all relationships connected to a all respective products.

**Example Request**:
```
GET /api/get-prod-relations
```

**Example Response**:
```json
{
  "product": "Product X",
  "relations": [
    {
      "type": "teamToProduct",
      "connectedNode": {
        "name": "Team Alpha"
      }
    }
  ]
}
```

---

## 7. Get Suite Connections

- **Endpoint**: `/api/get-suite-connection`
- **Method**: GET
- **Description**: Retrieves all connections related to a suite.

**Example Request**:
```
GET /api/get-suite-connection
```

**Example Response**:
```json
{
  "message": "Connected to Neo4j",
  "data": [
    {
      "startNode": {
        "name": "Suite A",
        "id": 3
      },
      "relationship": "suiteToTeam",
      "connectedNode": {
        "name": "Team Alpha",
        "id": 4
      }
    }
  ]
}
```

---

## 8. Get Team-Owned Products

- **Endpoint**: `/api/get-team-owned-products`
- **Method**: GET
- **Description**: Retrieves all products owned by their teams.

**Example Request**:
```
GET /api/get-team-owned-products
```

**Example Response**:
```json
{
  "team": "Team Alpha",
  "products": [
    {
      "name": "Product X",
      "description": "A revolutionary product"
    }
  ]
}
```

---

## 9. Send Query

- **Endpoint**: `/api/send-query`
- **Method**: POST
- **Description**: Allows sending a custom Cypher query to Neo4j.

**Request Body**:
```json
{
  "query": "MATCH (n) RETURN n LIMIT 10"
}
```

**Example Response**:
```json
{
  "data": [
    {
      "id": 1,
      "name": "Enterprise Technology"
    }
  ]
}
```

---

## 10. Test Route

- **Endpoint**: `/test`
- **Method**: GET
- **Description**: A test endpoint to verify server and Neo4j connection.

**Example Request**:
```
GET /test
```

**Example Response**:
```json
{
  "message": "Server is running and connected to Neo4j"
}
```
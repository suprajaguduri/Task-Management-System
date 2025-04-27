
# 📋 Task Management System

## 📑 Table of Contents

📄 About the Project
📁 Project Structure
🚀 Features
🛠️ Tech Stack
📦 Installation
📚 API Endpoints
🧪 Example API Requests
📝 Validation Rules
🔥 How to Test
✨ Future Improvements


### 📄 About the Project
Task Management REST API is a backend service built using Node.js and Express.js.
It allows users to create, read, update, and delete tasks with proper input validation, error handling, pagination, and filtering.

The project focuses on:

Building a scalable and modular backend structure

Implementing best practices for API development

Applying validation and error handling

Managing tasks using a local JSON file (for simplicity)

This project is ideal for learning how to structure a Node.js/Express API, perform data validation, handle asynchronous operations with async/await, and properly manage HTTP requests and responses.

---

## 📦 Project Structure
Task-Management-System
├── controllers/
│   └── taskController.js
├── services/
│   └── taskService.js
├── middlewares/
│   ├── errorHandler.js
│   └── validateRequest.js
├── validations/
│   └── taskValidation.js
├── routes/
│   ├── app.js      (tasks routes)
│   ├── users.js    (default route)
├── tasks.json      (task storage)
├── app.js
├── package.json
├── README.md


controllers/
taskController.js: Handles all task-related API requests (create, read, update, delete) and sends responses.

routes/
index.js: Defines all task API routes and maps them to the respective controller methods.

services/
taskService.js: Contains the business logic for handling tasks like reading, creating, updating, deleting from the tasks.json file.

middlewares/
errorHandler.js: Centralized middleware to handle errors and send clean error responses.
validateRequest.js: Middleware to validate incoming request data using Joi schemas.
logger.js: (Optional) Used to manually log request details if needed.

validations/
taskValidation.js: Defines Joi schemas for validating task creation and updating.

tasks.json
Local JSON file acting as the in-memory database to store all tasks.

server.js
Entry point of the application. Sets up Express app, applies middlewares, and mounts the routes.

package.json
Lists all project dependencies, scripts, and project metadata.

README.md
Documentation explaining project setup, API endpoints, features, and usage instructions.

.gitignore
Unnecessary files will be automatically ignored.


## 🎯 Features
- CRUD operations on tasks(Create, Read, Update, Delete)
- Input validation using Joi
- Proper error handling (400, 404, 500 status codes)
- Request logging with morgan
- Rate limiting (30 requests/minute)
- Pagination (`/tasks?page=1&limit=10`)
- Filtering by status (`/tasks?status=pending`)
- Task storage in a JSON file (`tasks.json`)

## 🛠️ Tech Stack
- Node.js
- Express.js
- Joi (validation)
- fs-extra (for file operations)
- uuid (for unique IDs)
- morgan (HTTP request logger)
- express-rate-limit (rate limiter)

### 🚀 Getting Started
📦 Installation
1. Clone the repository
```bash
git clone https://github.com/suprajaguduri/Task-Management-System.git
cd task-manager
```

2.Install dependencies
```bash
npm install
```

3.Run the server
```bash
npm start
```

The server runs at:  
`http://localhost:5000`



## 📚 API Endpoints
1. Create Task (POST /tasks)
2. Get All Tasks (GET /tasks)
3. Get Task by ID (GET /tasks/:id)
4. Update Task (PUT /tasks/:id)
5. Delete Task (DELETE /tasks/:id)
6. Pagination (GET /tasks?page=2&limit=5)
7. Filter Tasks by Status (GET /tasks?status=completed)


## 🚀 Example API Requests
Postman and cURL commands to test all API endpoints for Task Management System:

1. 📩 Create a New Task (POST /tasks)
✅ POST http://localhost:5000/tasks

Body (raw → JSON):
```bash
json
{
  "title": "Finish Node.js Assignment",
  "status": "pending"
}
```
cURL:
```bash
bash
curl --request POST 'http://localhost:5000/tasks' \
--header 'Content-Type: application/json' \
--data-raw '{
  "title": "Finish Node.js Assignment",
  "status": "pending"
}'
```
✅ Expected Response:
```bash
json
{
  "id": "generated-uuid",
  "title": "Finish Node.js Assignment",
  "status": "pending"
}
```

2. 📄 Get All Tasks (GET /tasks)
✅ GET http://localhost:5000/tasks
cURL:
```bash
bash
curl --request GET 'http://localhost:5000/tasks'
```
✅ Expected Response:
```bash
json
{
  "total": 1,
  "page": 1,
  "limit": 10,
  "tasks": [
    {
      "id": "generated-uuid",
      "title": "Finish Node.js Assignment",
      "status": "pending"
    }
  ]
}
```
3. 🔎 Get Single Task by ID (GET /tasks/:id)
✅ GET http://localhost:5000/tasks/{id}

Replace {id} with the actual ID you got from create response.

Example cURL:
```bash
bash
curl --request GET 'http://localhost:5000/tasks/4c8a331b-535d-44ef-87da-0de1c7f4d6f5'
```
✅ Expected Response:
```bash
json
{
  "id": "4c8a331b-535d-44ef-87da-0de1c7f4d6f5",
  "title": "Finish Node.js Assignment",
  "status": "pending"
}
```
4. ✏️ Update a Task (PUT /tasks/:id)
✅ PUT http://localhost:5000/tasks/{id}

Body (raw → JSON):
```bash
json
{
  "status": "completed"
}
```
cURL:
```bash
bash
curl --request PUT 'http://localhost:5000/tasks/4c8a331b-535d-44ef-87da-0de1c7f4d6f5' \
--header 'Content-Type: application/json' \
--data-raw '{
  "status": "completed"
}'
```
✅ Expected Response:
```bash
json
{
  "id": "4c8a331b-535d-44ef-87da-0de1c7f4d6f5",
  "title": "Finish Node.js Assignment",
  "status": "completed"
}
```

5. 🗑️ Delete a Task (DELETE /tasks/:id)
✅ DELETE http://localhost:5000/tasks/{id}

Example cURL:
```bash
bash
curl --request DELETE 'http://localhost:5000/tasks/4c8a331b-535d-44ef-87da-0de1c7f4d6f5'
```
✅ Expected Response:
```bash
204 No Content
6. 📚 Get Tasks with Pagination
✅ GET http://localhost:5000/tasks?page=2&limit=5
```

Example cURL:
```bash
curl --request GET 'http://localhost:5000/tasks?page=2&limit=5'
```
✅ Expected Response:
```bash
json
{
  "total": 12,
  "page": 2,
  "limit": 5,
  "tasks": [
    { "id": "id6", "title": "Task 6", "status": "pending" },
    { "id": "id7", "title": "Task 7", "status": "completed" },
    ...
  ]
}
```
7. 📋 Filter Tasks by Status
✅ GET http://localhost:5000/tasks?status=completed

Example cURL:
```bash
bash
curl --request GET 'http://localhost:5000/tasks?status=completed'
```
✅ Expected Response:
```bash
json
{
  "total": 5,
  "page": 1,
  "limit": 10,
  "tasks": [
    { "id": "id2", "title": "Task 2", "status": "completed" },
    ...
  ]
}
```

## 📝 Validation Rules
- `title`: required, must be a string
- `status`: required, must be either "pending" or "completed"

## 🔥 How to Test
You can test using:
- Postman
- cURL

Example Postman requests are given above (refer to full request samples).

## 📈 Future Improvements (Optional)
- Connect with MongoDB 
- Add User Authentication (JWT)
- Write Unit Tests using Jest
- Production Deployment



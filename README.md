
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


## 🧪 Example API Requests

### Create a Task
```bash
POST /tasks
Content-Type: application/json

{
  "title": "Complete NodeJS Assignment",
  "status": "pending"
}
```

### Get All Tasks (with Pagination)
```bash
GET /tasks?page=1&limit=5
```

### Get Tasks by Status
```bash
GET /tasks?status=completed
```

### Update a Task
```bash
PUT /tasks/:id
Content-Type: application/json

{
  "status": "completed"
}
```

### Delete a Task
```bash
DELETE /tasks/:id
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



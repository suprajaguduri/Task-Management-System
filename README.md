# Task Management System

## Setup

1. Clone the repo
2. Run `npm install`
3. Start server: `npm start`

## API Endpoints

- `GET /tasks` - list all tasks
- `GET /tasks/:id` - get task by ID
- `POST /tasks` - create task
- `PUT /tasks/:id` - update task
- `DELETE /tasks/:id` - delete task

Use Postman or cURL to test.



# 📋 Task Management System

A simple and clean RESTful API to manage tasks, built using Node.js, Express.js, and Joi.  
Includes features like CRUD operations,input validation, pagination, filtering, rate limiting, and error handling.

---

## 📦 Project Structure

```
task-manager/
├─ controllers/
│   └── taskController.js
├── services/
│   └── taskService.js
├── middlewares/
│   ├── errorHandler.js
│   └── validateRequest.js
├── validations/
│   └── taskValidation.js
├── routes/
│   ├── index.js      (tasks routes)
│   ├── users.js    (default route)
├── tasks.json      (task storage)
├── app.js
├── package.json
├── README.md


### 🚀 Getting Started

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

## 🛠️ Tech Stack
- Node.js
- Express.js
- Joi (validation)
- fs-extra (for file operations)
- uuid (for unique IDs)
- morgan (HTTP request logger)
- express-rate-limit (rate limiter)


## 📚 API Endpoints
1. Create Task (POST /tasks)
2. Get All Tasks (GET /tasks)
3. Get Task by ID (GET /tasks/:id)
4. Update Task (PUT /tasks/:id)
5. Delete Task (DELETE /tasks/:id)
6. Pagination (GET /tasks?page=2&limit=5)
7. Filter Tasks by Status (GET /tasks?status=completed)

## 🎯 Features
- CRUD operations on tasks
- Input validation using Joi
- Proper error handling (400, 404, 500 status codes)
- Request logging with morgan
- Rate limiting (30 requests/minute)
- Pagination (`/tasks?page=1&limit=10`)
- Filtering by status (`/tasks?status=pending`)
- Task storage in a JSON file (`tasks.json`)


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
- Any API client tool

Example Postman requests are given above (refer to full request samples).

## 📈 Future Improvements (Optional)

- Connect with MongoDB 
- Add User Authentication (JWT)
- Write Unit Tests using Jest
- Production Deployment

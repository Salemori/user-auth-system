# User Authentication System

A backend system that provides secure user registration, login, and access to protected routes using JWT authentication and hashed passwords.

**Live URL:** [https://user-auth-system-837a.onrender.com](https://user-auth-system-837a.onrender.com)

## Features

- Register new users
- Login and receive a JWT token
- Access a protected user profile route
- Passwords securely hashed using bcrypt
- JWT-based authentication
- Swagger API documentation
- Deployed on Render
- MongoDB storage

---

## Technologies Used

- Node.js (Express)
- MongoDB (via Mongoose)
- bcrypt
- jsonwebtoken (JWT)
- Swagger (OpenAPI 3.0)
- Render for deployment

---

## API Endpoints

| Method | Endpoint     | Description                  | Auth Required |
|--------|--------------|------------------------------|---------------|
| POST   | `/register`  | Register a new user          | No            |
| POST   | `/login`     | Login and receive JWT token  | No            |
| GET    | `/profile`   | View user profile            | Yes           |

---

## API Documentation

Access the live API documentation here:  
**Swagger UI** → [https://user-auth-system-837a.onrender.com/api-docs](https://user-auth-system-837a.onrender.com/api-docs)

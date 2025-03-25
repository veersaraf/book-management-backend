# Book Management Backend

## Description

This repository contains the backend for a Book Management application built with Node.js, Express, and MongoDB. The primary purpose of this project is to provide a robust API for managing a collection of books, enabling users to create, read, update, and delete book entries securely. It serves as the server-side component of a MERN stack application, designed to handle data persistence and user authentication for a seamless book management experience.

## Value Proposition

The backend offers a RESTful API with endpoints for CRUD operations on books (`/books`) and user authentication (`/users/register`, `/users/login`). It integrates JWT-based authentication to secure sensitive operations (e.g., creating, editing, and deleting books), ensuring only authorized users can modify the data. This solves the problem of securely managing a book catalog, providing benefits like data integrity, user access control, and scalability for future enhancements such as additional book metadata or user roles.

## Setup and Usage

### Prerequisites

- Node.js version 14 or higher
- MongoDB (local instance or MongoDB Atlas)
- Docker (optional, for containerized setup)
- npm (Node Package Manager)

### Local Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/veersaraf/book-management-backend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd book-management-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory with the following variables:
   ```sh
   PORT=5555
   MONGO_URL=mongodb://localhost:27017/books-collection
   JWT_SECRET=your_secret_key_here
   ```
   Replace `your_secret_key_here` with a secure key for JWT signing.
5. Start the application:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:5555`.

### Docker Setup

1. Ensure Docker is installed and running.
2. Create a shared Docker network (run this once):
   ```sh
   docker network create mern-network
   ```
3. Navigate to the project directory:
   ```sh
   cd book-management-backend
   ```
4. Build and start the containers:
   ```sh
   docker-compose up --build -d
   ```
   This starts MongoDB and the backend on `http://localhost:5555`.
5. To stop the containers:
   ```sh
   docker-compose down
   ```

## Testing

The backend does not currently include automated tests in this repository. However, manual testing has been performed to ensure all endpoints (`GET /books`, `POST /books`, `PUT /books/:id`, `DELETE /books/:id`, `POST /users/register`, `POST /users/login`) function correctly with valid inputs and proper authentication. No failing or broken tests exist as no test suite is implemented yet.

### Executing Tests

Since automated tests are not present, you can manually test the API using tools like Postman or curl:

- Test registration:
  ```sh
  POST http://localhost:5555/users/register
  ```
  JSON body:
  ```json
  {"username": "test", "email": "test@example.com", "password": "password123"}
  ```
- Test login:
  ```sh
  POST http://localhost:5555/users/login
  ```
  JSON body:
  ```json
  {"email": "test@example.com", "password": "password123"}
  ```
- Test protected routes: Use the JWT token from login in the `Authorization: Bearer <token>` header for `POST /books`, `PUT /books/:id`, and `DELETE /books/:id`.




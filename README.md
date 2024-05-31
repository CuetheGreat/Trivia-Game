### Trivia App

This is the backend for a Trivia App. It is built using Node.js, Express, and MongoDB. The backend provides APIs for managing and answering trivia questions.

## Features

- CRUD operations for trivia questions
- Random question retrieval
- Answer submission and validation
- Basic authentication for admin routes
- Error handling and validation
- Security enhancements (Helmet, CORS, Rate Limiting)
- Environment configuration

## Prerequisites

- Node.js
- npm or yarn
- MongoDB

## Getting Started

### Installation

1. Clone the repository

```bash
git clone https://github.com/CuetheGreat/Trivia-Game.git
cd trivia-game
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

Create a `.env` file in the root of the project with the following content:

```env
MONGO_URI=[your-mongo-db-url]
PORT=3000
```

### Running the Server

```bash
npm start
# or
yarn start
```

The server will start on `http://localhost:3000`.

### API Endpoints

#### Public Routes

- **GET `/api/questions`**: Retrieve all questions.
- **GET `/api/question`**: Retrieve a random question.
- **POST `/api/answer`**: Submit an answer to a question.

#### Admin Routes

- **POST `/api/admin/questions`**: Create a new question.
- **PUT `/api/admin/questions/:id`**: Update an existing question.
- **DELETE `/api/admin/questions/:id`**: Delete a question.
- **GET `/api/admin/questions`**: Retrieve all questions.

### Project Structure

```plaintext
trivia-app/
├── config/
│   └── db.js
├── controllers/
│   ├── questionController.js
│   └── questionAdminController.js
├── middlewares/
│   ├── asyncHandler.js
│   └── errorHandler.js
├── models/
│   └── questionModel.js
├── routes/
│   ├── questionRoutes.js
│   └── adminRoutes.js
├── utils/
│   └── customError.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

### Error Handling

Errors are handled centrally by `errorHandler.js`. Custom errors are defined in `customError.js`.

### Security

- **Helmet**: Sets security-related HTTP headers.
- **CORS**: Cross-Origin Resource Sharing enabled for all origins.
- **Rate Limiting**: Limits repeated requests to public APIs.

### Validation

Request data validation is done using `joi`.

### Logging

HTTP requests are logged using `morgan`.

### License

This project is licensed under the MIT License.
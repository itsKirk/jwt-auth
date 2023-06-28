# MERN App with Passport JWT Authentication

This is a sample MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates the implementation of Passport JWT (JSON Web Token) authentication functionality. Passport JWT is a popular authentication strategy for Node.js that uses JWTs for user authentication.


## Features

- User registration: Users can create new accounts by providing a unique username and password.

- User login: Registered users can log in using their credentials and receive a JWT for authentication.

- Protected routes: Certain routes in the application require authentication, and only authenticated users with valid JWTs can access them.

- User authentication persistence: Once authenticated, users can access protected routes by including the JWT in the request headers.

## Prerequisites

To run this application, make sure you have the following dependencies installed on your system:

- Node.js (v14 or above)

- Mongoose

## Installation

1\. Clone this repository to your local machine.

2\. Navigate to the project directory.

3\. Install the dependencies for both the server and client:


  ` cd server`

   `npm install`

  ` cd ../client`

  ` npm install`


4\. Configure the environment variables:

   - In the `server` directory, create a `.env` file based on the provided `.env` file. Update the MongoDB connection *MONGO_URL* and *JWT_SECRET* variables.

   - Make sure you have a running MongoDB server with the specified connection URL.

## Usage

1\. Start the server:

   - In the `server` directory, run the following command:


     `npm run dev`


2\. Start the client:

   - In the `client` directory, run the following command:


    ` npm run dev`


3\. Access the application:

   - Open your web browser and visit `http://localhost:3000`.

   - You will be redirected to the login page if you're not authenticated.

   - Register for a new account or log in with an existing one.

   - Once logged in, you can access the protected dashboard route.

## Folder Structure

The project structure is organized as follows:

- `client`: React.js frontend application.

- `server`: Express.js backend application.

  - `middleware`: Custom middleware functions.

  - `models`: Mongoose models.

  - `routes`: API routes.
- `README.md`: This README file.


## Technologies Used

- **MongoDB**: NoSQL database for storing user information and session data.

- **Express.js**: Web application framework for building the backend server.

- **React.js**: JavaScript library for building the user interface.

- **Node.js**: JavaScript runtime environment for server-side development.

- **Passport.js**: Authentication middleware used for JWT authentication strategy.

- **bcryptjs**: Library for password hashing.

- **axios**: HTTP client for making API requests from the client-side.

- **React Router**: Routing library for handling navigation in the React application.

- **Tailwind CSS**: CSS framework for styling the application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Passport.js](http://www.passportjs.org/)

- [MongoDB](https://www.mongodb.com/)

- [React.js](https://reactjs.org/)

- [Express.js](https://expressjs.com/)
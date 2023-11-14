# User API

This acts as a back-end server which facililates CRUD operations on users. This server has been fully containerised using Docker Compose.

1. Fork and clone the repository

2. Install required `npm` dependencies
   ```sh
   cd server
   npm install #install dependencies from package.json
   ```
3. Run the containerised application

   ```sh
   cd ..
   docker compose up
   ```

   > **Warning**: The Docker daemon must be running for the above command to be able to execute properly.

4. Go to the `http://localhost:${port}` link outputted in the terminal to access the back-end server

   ```sh
   API listening on port: http://localhost:3000 #exemplar output
   ```

## Routes

| Route        | Method | Response                                                                                                                                                                                                                   |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`          | `GET`  | Returns a JSON object containing a simple description, and a list of the accessible endpoints.                                                                                                                             |
| `/users`     | `GET`  | Returns a JSON object containing all of the users.                                                                                                                                                                         |
| `/users`     | `POST` | Accepts a JSON object and uses it to create and store a new user.                                                                                                                                                          |
| `/users/:id` | `GET`  | Returns a JSON object representing a single user from the collection, selected by `:id`. If the id is invalid (non-numeric or out-of-bounds), returns a JSON object explaining the problem, with `404` as the status code. |

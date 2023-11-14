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

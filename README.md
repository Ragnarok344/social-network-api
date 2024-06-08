# Social Network API

This is a back-end API for a social network application. It provides endpoints to manage users, thoughts, and reactions.

## Features

- User management: Add, update, and delete users.
- Thought management: Create, update, and delete thoughts.
- Reaction management: Add and remove reactions to thoughts.

## API Endpoints

### User

- `POST /api/users`: Create a new user.
- `GET /api/users`: Get all users.
- `GET /api/users/:id`: Get a user by ID.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.

### Thought

- `POST /api/thoughts`: Create a new thought.
- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:id`: Get a thought by ID.
- `PUT /api/thoughts/:id`: Update a thought by ID.
- `DELETE /api/thoughts/:id`: Delete a thought by ID.

### Reaction

- `POST /api/thoughts/:id/reactions`: Add a reaction to a thought.
- `DELETE /api/thoughts/:id/reactions/:reactionId`: Remove a reaction from a thought.

## Demonstration
[Running the server](https://www.loom.com/share/14b373096c034801b6bf2583e18e1086)

[Insomnia server responses](https://www.loom.com/share/a27f55f891a74f099b7f6c22fe854e2f)



## Usage
Clone the repository
cd to your folder
do npm install
then you can start the server by npm start 
server will run on http://localhost:3001


## Credits

Various sources from stack overflow

various videos on youtube

Tutoring from school tutor robert

Guidence from instructor Sebastion

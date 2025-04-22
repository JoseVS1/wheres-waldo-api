# Where's Waldo API
A RESTful API backend for the "Where's Waldo" game application built with Express.js and PostgreSQL.

## Overview
This backend server provides the API endpoints for the Where's Waldo game, handling character positions, position validation, and highscore tracking. The API integrates with a PostgreSQL database using Prisma ORM to store character data and highscores.

## Features
- **Character Management**: Retrieve character data including coordinates
- **Position Validation**: Check if a user-clicked position matches a character's location
- **Highscore System**: Record and retrieve game completion times
- **RESTful API Design**: Structured endpoints for frontend integration
- **CORS Support**: Configured for secure cross-domain requests

## Technology Stack
- **Server**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Security**: CORS middleware for cross-origin requests
- **Environment**: dotenv for configuration management

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/JoseVS1/wheres-waldo-api.git
   cd wheres-waldo-api
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/whereswaldo"
   PORT=3000
   ```
4. Set up the database using Prisma:
   ```
   npx prisma migrate dev --name init
   ```
5. Seed the database with character data (create a seed script or manually add data)

6. Start the server:
   ```
   npm start
   ```

## Project Structure
```
├── controllers
│   ├── characterController.js
│   └── highscoreController.js
├── models
│   └── prismaClient.js
├── prisma
│   └── schema.prisma
├── routes
│   ├── apiRoutes.js
│   ├── characterRoutes.js
│   └── highscoreRoutes.js
├── utils
│   └── checkPositionIsClose.js
└── app.js
```

## API Endpoints

### Character Routes
- `GET /api/characters` - Get all game characters
- `GET /api/characters/:id` - Get a specific character by ID
- `GET /api/characters/:id/checkPosition` - Validate if clicked position matches character location

### Highscore Routes
- `GET /api/highscore` - Get current highscore records
- `POST /api/highscore` - Save a new highscore
- `DELETE /api/highscore` - Clear highscore records

## Position Validation
The API uses a proximity check to determine if a user's click is close enough to a character's actual position:

```javascript
const checkPositionIsClose = (char_x, char_y, user_x, user_y) => {
    const checkXPosition = user_x >= char_x - 20 && user_x <= char_x + 20;
    const checkYPosition = user_y >= char_y - 40 && user_y <= char_y + 40;
    
    return checkXPosition && checkYPosition;
}
```

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
[MIT License](LICENSE)

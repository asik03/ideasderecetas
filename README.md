# ideasderecetas App

IdeasDeRecetas App, an MVP example built with Vite + React, powered by Firebase.

## Setup

1. Create an account at [Google Firebase](https://firebase.google.com/)
2. Create a new project: `IdeasDeRecetas`
3. Create a new web app: `ideasderecetas-app`
4. Setup a new Firestore Database
5. Clone the project and setup dependencies as follows in a Bash terminal:

   ```bash
   # Clone project
   git clone git@github.com:asik03/ideasderecetas.git

   # Navigate to project directory
   cd ideasderecetas

   # Install dependencies
   npm install

   # Setup environment variables
   cp env.example .env.local

   ```

6. Go to `Project Overview` > `Project Setting` to access your app config. Copy the relevant config values to `.env.local`
7. Start the dev server with the command `npm run dev`. Open your browser and point it to `localhost:3000`

# PlantCareHub

PlantCareHub is a comprehensive plant care application designed to help users manage their plant collections, access care tips, and utilize tools for optimal plant health. The project is divided into two main components: the **Client** (frontend) and the **Server** (backend).

## Features

- **User Authentication**: 
  - Sign up and sign in functionality using Firebase Authentication.
  - Secure user sessions via JWT tokens.
- **Plant Management**: 
  - Add, update, and delete plants in a user's collection.
  - Track watering schedules, sunlight requirements, and fertilization history.
- **Care Tips & Tools**: 
  - Access featured plant care tips and seasonal maintenance guides.
  - Interactive tools for calculating watering frequency and soil pH balance.
- **Plant Diagnosis Assistant**: 
  - AI-powered symptom analysis for common plant issues (e.g., leaf discoloration, pests).
  - Suggests solutions based on plant type and environmental conditions.
- **Responsive UI**: 
  - Dark/light theme toggle using Tailwind CSS and React Context API.
  - Mobile-first design with React Router for navigation.

## Project Structure

- **PlantCareHub-Client**:
  - Frontend built with **React**, **Vite**, and **Tailwind CSS**.
  - Key directories:
    - `src/auth/`: Authentication components (Signin, Signup).
    - `src/components/Home/`: Home page modules (CareTips, PlantSlider, Testimonials).
    - `src/Context/`: Theme and authentication state management.
    - `src/Routes/`: Route configuration with private route protection.
- **PlantCareHub-Server**:
  - Backend built with **Node.js** and **Express**.
  - Hosted on **Vercel** with Firebase integration.
  - Handles API requests for plant data, user authentication, and diagnosis logic.

## Technologies & Packages

### Client (React + Vite)
- **React**: For component-based UI development.
- **Vite**: Next-generation frontend build tool for fast development.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **React Router**: Client-side routing for navigation.
- **Firebase**: Authentication and real-time data synchronization.
- **ESLint + Prettier**: Code quality and formatting.
- **Vite SVG Plugin**: For optimized SVG asset handling.

### Server (Node.js + Express)
- **Express**: Web framework for handling HTTP requests.
- **Firebase Admin SDK**: Server-side Firebase integration for authentication and Firestore.
- **Cors**: For cross-origin resource sharing.
- **Body-parser**: Parses incoming request bodies.
- **Dotenv**: Loads environment variables from `.env` files.
- **Jsonwebtoken**: For JWT-based session management.

## Setup

### Prerequisites

- Node.js (v18+)
- Firebase project with Authentication and Firestore enabled
- Vercel CLI for deployment

### Client

1. Navigate to the client directory:
   ```bash
   cd PlantCareHub-Client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Firebase:
   - Create `.env` file with:
     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     ```
4. Run the development server:
   ```bash
   npm run dev
   ```

### Server

1. Navigate to the server directory:
   ```bash
   cd PlantCareHub-Server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create `.env` file with:
     ```
     FIREBASE_SERVICE_ACCOUNT_JSON=your_json
     PORT=3000
     ```
4. Start the server:
   ```bash
   npm start
   ```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and ensure:
   - Linting passes (`npm run lint`)
   - Tests pass (if applicable)
4. Submit a pull request with detailed descriptions of changes.

## License

MIT License. See [LICENSE](LICENSE) for details.

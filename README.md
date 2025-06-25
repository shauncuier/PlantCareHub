# 🌱 PlantCareHub

**Live URL:** [PlantCare Hub Live Demo](https://plantcarehub-595ab.web.app/)

PlantCareHub is a comprehensive plant care application designed to help users manage their plant collections, access care tips, and utilize tools for optimal plant health. The project is divided into two main components: the **Client** (frontend) and the **Server** (backend).

## ✨ Key Features

- **Smart Plant Management** - Add, update, delete, and track all your plants in one organized dashboard
- **Intelligent Watering Reminders** - Never miss a watering session with personalized scheduling and notifications
- **Advanced Care Tracking** - Monitor plant health, growth progress, and care history with detailed analytics
- **Expert Care Guides** - Access professional plant care tips, seasonal advice, and troubleshooting guides
- **Community Platform** - Share experiences, discover new plants, and learn from fellow plant enthusiasts
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices with dark/light theme support

## 🚀 Technologies Used

### Frontend (PlantCareHub-Client)
- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Swiper.js** - Modern touch slider for hero sections
- **React Icons** - Comprehensive icon library
- **SweetAlert2** - Beautiful, responsive popup notifications
- **Axios** - HTTP client for API communication

### Backend (PlantCareHub-Server)
- **Express.js** - RESTful API server
- **Firebase Authentication** - Secure user authentication with Google OAuth
- **MongoDB** - NoSQL database for plant data storage
- **Jsonwebtoken** - JWT-based session management
- **Cors** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18+)
- Firebase project with Authentication and Firestore enabled
- MongoDB database
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
3. Configure environment variables:
   - Create `.env` file with:
     ```
     VITE_API_URL=http://localhost:5000
     VITE_FIREBASE_API_KEY=your_firebase_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_firebase_app_id
     ```
4. Run development server:
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

## 📊 Pages & Routes

| Route | Description | Access Level |
|-------|-------------|--------------|
| `/` | Home page with hero slider and featured content | Public |
| `/plants` | All plants with sorting and filtering | Public |
| `/plants/:id` | Detailed plant information page | Private |
| `/my-plants` | User's personal plant collection | Private |
| `/add-plant` | Add new plant form | Private |
| `/update-plant/:id` | Edit existing plant information | Private |
| `/login` | User authentication page | Public |
| `/register` | User registration page | Public |
| `*` | Custom 404 error page | Public |

## 🔧 Key Technical Implementations

### State Management
- **React Context API** for global state (authentication, theme)
- **Local State** with React hooks for component-specific data
- **Persistent Storage** for user preferences and session data

### API Integration
- **RESTful API** communication with error handling
- **Real-time Data** updates with optimistic UI patterns
- **Secure Authentication** with JWT tokens and Firebase integration

### Performance Optimizations
- **Code Splitting** for faster initial load times
- **Image Optimization** with proper sizing and lazy loading
- **Bundle Optimization** with Vite build tools
- **Caching Strategies** for API responses and static assets

## ✅ Assignment Requirements Fulfilled

- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Plant Care Theme** - Comprehensive plant management focus
- **Authentication** - Email/password + Google OAuth
- **CRUD Operations** - Complete plant management system
- **Private Routes** - Protected pages with proper redirects
- **Sorting Functionality** - Advanced table sorting capabilities
- **Dark/Light Theme** - Complete theme switching system
- **Modern UI** - Professional design with animations
- **Error Handling** - User-friendly error messages
- **Loading States** - Professional loading indicators

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request

## 📝 License

MIT License. See [LICENSE](LICENSE) for details.

## 👨‍💻 Developer

**Jashedul Islam Shaun**
- GitHub: [@shauncuier](https://github.com/shauncuier)
- Email: hello@jashedulislamshaun.com
- Portfolio: [Jashedul Islam Shaun](https://www.jashedulislamshaun.com/)

---

**Built with ❤️ for plant lovers worldwide** 🌿

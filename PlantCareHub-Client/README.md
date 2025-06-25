# 🌱 PlantCare Hub - Plant Care Tracker

**Live URL:** [PlantCare Hub Live Demo](https://plantcarehub-595ab.web.app/)

A comprehensive full-stack web application designed to help plant enthusiasts track, manage, and nurture their indoor and outdoor plants. Built with modern technologies and featuring a beautiful, responsive design focused on plant care management.

## ✨ Key Features

• **Smart Plant Management** - Add, update, delete, and track all your plants in one organized dashboard

• **Intelligent Watering Reminders** - Never miss a watering session with personalized scheduling and notifications

• **Advanced Care Tracking** - Monitor plant health, growth progress, and care history with detailed analytics

• **Expert Care Guides** - Access professional plant care tips, seasonal advice, and troubleshooting guides

• **Community Platform** - Share experiences, discover new plants, and learn from fellow plant enthusiasts

• **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices with dark/light theme support

## 🚀 Technologies Used

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Swiper.js** - Modern touch slider for hero sections
- **React Icons** - Comprehensive icon library
- **SweetAlert2** - Beautiful, responsive popup notifications
- **Axios** - HTTP client for API communication

### Backend Integration
- **Firebase Authentication** - Secure user authentication with Google OAuth
- **MongoDB** - NoSQL database for plant data storage
- **Express.js** - RESTful API server
- **Environment Variables** - Secure configuration management

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Firebase account for authentication
- MongoDB database

### Local Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/plantcare-hub-client.git
cd plantcare-hub-client
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

4. **Start development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

## 📱 Core Functionality

### Authentication System
- **Email/Password Registration** with validation requirements
- **Google OAuth Integration** for quick signup/login
- **Protected Routes** with automatic redirection
- **Password Strength Indicators** and real-time validation
- **Persistent Sessions** that survive page refreshes

### Plant Management Features
- **Add New Plants** with comprehensive form (image, category, care level, watering schedule)
- **View All Plants** in responsive table format with sorting capabilities
- **Plant Details Pages** with complete care information and expert tips
- **My Plants Dashboard** showing only user's plants with edit/delete options
- **Update Plant Information** with pre-filled forms for easy editing

### Advanced Features
- **Smart Sorting** by next watering date and care level difficulty
- **Search & Filter** functionality across plant collections
- **Responsive Data Tables** optimized for all screen sizes
- **Loading States** with professional spinners and skeletons
- **Error Handling** with user-friendly messages and recovery options

## 🎨 Design Highlights

### UI/UX Excellence
- **Modern Plant Theme** with consistent green color palette and nature-inspired design
- **Responsive Grid Layouts** that adapt perfectly to any screen size
- **Smooth Animations** and micro-interactions for enhanced user experience
- **Dark/Light Theme Toggle** with seamless switching and preference persistence
- **Professional Typography** with clear hierarchy and excellent readability

### Component Architecture
- **Reusable Components** for consistent design patterns
- **Modular Structure** for easy maintenance and scalability
- **Custom Hooks** for state management and API interactions
- **Optimized Performance** with lazy loading and efficient re-renders

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
- **Context API** for global state (authentication, theme)
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

## 🌟 Assignment Requirements Fulfilled

✅ **Responsive Design** - Mobile, tablet, and desktop optimized

✅ **Plant Care Theme** - Comprehensive plant management focus

✅ **Authentication** - Email/password + Google OAuth

✅ **CRUD Operations** - Complete plant management system

✅ **Private Routes** - Protected pages with proper redirects

✅ **Sorting Functionality** - Advanced table sorting capabilities

✅ **Dark/Light Theme** - Complete theme switching system

✅ **Modern UI** - Professional design with animations

✅ **Error Handling** - User-friendly error messages

✅ **Loading States** - Professional loading indicators

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Your Name**
- GitHub: [@shauncuier](https://github.com/shauncuier)
- Email: hello@jashedulislamshaun.com
- Portfolio: [Jashedul Islam Shaun](https://www.jashedulislamshaun.com/)

---

**Built with ❤️ for plant lovers worldwide** 🌿

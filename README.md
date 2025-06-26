# VET-IA - AI-Powered Veterinary Platform

## Overview

VET-IA is a modern veterinary appointment booking platform that combines traditional veterinary care with AI-powered features. The application allows pet owners to schedule appointments online with detailed information about their pets and the reason for consultation. The platform is built as a full-stack web application with a React frontend and Express.js backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **UI Framework**: 
  - Tailwind CSS for styling
  - Radix UI components for accessible UI primitives
  - shadcn/ui component library (New York style)
- **Build Tool**: Vite for development and production builds
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: Configured for connect-pg-simple sessions
- **Development**: tsx for TypeScript execution in development

### Directory Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions and API client
├── server/                 # Backend Express application
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Data access layer
│   └── vite.ts            # Vite development setup
├── shared/                 # Shared code between frontend and backend
│   └── schema.ts          # Database schema and validation
└── migrations/            # Database migration files
```

## Key Components

### Database Schema
- **Users Table**: Authentication with username/password
- **Appointments Table**: Pet appointment bookings with owner information, pet details, preferred dates/times, and consultation reasons
- **Validation**: Zod schemas for type-safe data validation

### API Endpoints
- `POST /api/appointments` - Create new appointment booking
- `GET /api/appointments` - Retrieve all appointments (admin functionality)

### Frontend Components
- **Landing Page**: Modern marketing site with hero section, services, technology showcase, testimonials, and contact form
- **Contact Form**: Comprehensive appointment booking form with validation
- **UI Components**: Complete set of accessible UI components from Radix UI

### Storage Layer
- **Memory Storage**: In-memory implementation for development (MemStorage class)
- **Database Ready**: Configured for PostgreSQL with Drizzle ORM
- **Interface-Based**: IStorage interface allows for easy switching between storage implementations

## Data Flow

1. **User Interaction**: Pet owners fill out the appointment booking form on the contact section
2. **Form Validation**: Client-side validation using Zod schemas
3. **API Request**: React Query handles the API call to create appointments
4. **Server Processing**: Express server validates data and stores in database
5. **Response Handling**: Success/error feedback displayed to user via toast notifications

## External Dependencies

### Production Dependencies
- **UI/UX**: Radix UI components, Tailwind CSS, Lucide React icons
- **Data**: React Query for server state, React Hook Form for forms
- **Backend**: Express.js, Drizzle ORM, Zod validation
- **Database**: PostgreSQL with Neon serverless driver

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support across the stack
- **Development**: tsx for TypeScript execution, Replit integration plugins

## Deployment Strategy

### Development
- **Command**: `npm run dev` - Runs both frontend and backend in development mode
- **Port**: Application runs on port 5000
- **Hot Reload**: Vite provides hot module replacement for frontend
- **Database**: Uses in-memory storage for development

### Production
- **Build Process**: 
  1. Frontend: Vite builds React app to `dist/public`
  2. Backend: esbuild bundles Express server to `dist/index.js`
- **Start Command**: `npm run start` - Runs production build
- **Database**: Connects to PostgreSQL via DATABASE_URL environment variable
- **Deployment Target**: Configured for Replit autoscale deployment

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Modules**: Configured for Node.js 20, PostgreSQL 16, and web deployment
- **Build Output**: Static files served from `dist/public`, API from Express server

## Changelog
```
Changelog:
- June 26, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```

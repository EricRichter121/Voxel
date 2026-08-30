# Voxel Store

A full-stack marketplace for 3D models, built with React, TypeScript, Express and PostgreSQL.

Voxel Store allows users to browse 3D models, view product details, authenticate, and manage products in their shopping cart.

## Project Status

🚧 **In development**

The project is currently being developed as a portfolio full-stack application. The core architecture, authentication, product catalog, and cart functionality are implemented, while some marketplace features are still in progress.

## Features

### Implemented

* User registration and authentication
* JWT-based authentication with HTTP-only cookies
* Product catalog
* Product details page
* Product categories
* Shopping cart
* Add and remove products from cart
* Responsive UI
* Client-side state management
* Server-side validation

### In Progress

* Product purchasing flow
* Purchase history
* Model downloads
* Additional marketplace functionality

## Tech Stack

### Frontend

* React 19
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI
* React Router
* TanStack React Query
* Zustand
* Axios
* Lucide React
* React Hot Toast

### Backend

* Node.js
* Express 5
* TypeScript
* Prisma 7
* PostgreSQL
* Neon Database
* JWT
* bcrypt
* Zod

## Architecture

The project follows a client-server architecture.

```text
Voxel Store
├── frontend
│   └── React + TypeScript
│
└── backend
    └── Express + TypeScript
        └── Prisma
            └── PostgreSQL
```

The frontend communicates with the backend through a REST API. Authentication is handled using JWT tokens stored in HTTP-only cookies.

## Project Structure

### Frontend

```text
frontend/src
├── api
├── assets
├── components
├── hooks
├── pages
├── store
└── types
```

The frontend is organized around reusable components, pages, API modules, custom React hooks, and Zustand state management.

### Backend

```text
backend/src
├── controllers
├── dto
├── generated
├── lib
├── middlewares
├── routes
├── services
└── types
```

The backend uses a layered structure with routes, controllers, services, DTOs, and middleware.

## Database

The application uses PostgreSQL with Prisma ORM.

The current data model includes users, products, carts, cart items, orders, and order items.

Prisma is also used to generate type-safe database clients and models.

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* PostgreSQL or a Neon Database project

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd voxel-store
```

Install dependencies for the frontend:

```bash
cd frontend
npm install
```

Install dependencies for the backend:

```bash
cd ../backend
npm install
```

### Environment Variables

Create a `.env` file in the backend directory.

```env
DATABASE_URL=
JWT_SECRET=
JWT_EXPIRES_IN=
```

Set the values according to your local or hosted database configuration.

### Database Setup

Run Prisma migrations:

```bash
npx prisma migrate dev
```

Generate the Prisma client if necessary:

```bash
npx prisma generate
```

### Running the Application

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in a separate terminal:

```bash
cd frontend
npm run dev
```

The frontend will be available at the URL provided by Vite.

## Scripts

### Frontend

```text
npm run dev       Start the Vite development server
npm run build     Build the application for production
npm run lint      Run ESLint
npm run preview   Preview the production build
```

### Backend

```text
npm run dev       Start the development server with automatic reload
```

## Roadmap

* [x] User authentication
* [x] Product catalog
* [x] Product details page
* [x] Categories
* [x] Shopping cart
* [ ] Product purchasing
* [ ] Purchase history
* [ ] Model downloads
* [ ] User profile
* [ ] Payment integration
* [ ] Deployment

## License

This project is currently intended for educational and portfolio purposes.

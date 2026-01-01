# Kairos

> **καιρός** - _The right moment, the opportune time_

Kairos is a modern SaaS platform for event and note management based on a calendar interface. Built to help users capture and organize the important moments of their lives in an intuitive and beautiful way.

## Features

- 📅 **Visual Calendar** - Intuitive calendar interface for events and notes
- 📝 **Smart Notes** - Attach notes to specific dates or keep them floating
- 🎯 **Event Management** - Create and organize events with priorities and statuses
- 🎨 **Theme Support** - Dark and light mode with smooth transitions
- 🌍 **Internationalization** - Support for Portuguese (PT-PT) and English
- 🔐 **Authentication** - Secure authentication with NextAuth (Google OAuth + Credentials)
- ✨ **Animations** - Smooth animations powered by Framer Motion

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Animation library
- **next-themes** - Theme management

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Modern ORM for database management
- **PostgreSQL** - Robust relational database (Neon)
- **NextAuth.js** - Authentication for Next.js

### Development Tools
- **ESLint** - Code linting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files
- **Jest** - Testing framework

## Prerequisites

- Node.js 20+
- npm or pnpm
- PostgreSQL database (Neon recommended)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/FelipeKreulich/kairos-app.git
cd kairos-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@host/database"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OAuth (optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Environment
NODE_ENV="development"
```

### 4. Setup database

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Open Prisma Studio
npx prisma studio
```

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

## Project Structure

```
kairos/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Protected routes
│   ├── api/               # API endpoints
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── landing/           # Landing page sections
│   ├── providers/         # Context providers
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions
│   ├── auth.ts            # NextAuth config
│   ├── prisma.ts          # Prisma client
│   └── i18n/              # Translations
├── prisma/                # Database schema
├── types/                 # TypeScript types
└── public/                # Static assets
```

## Branch Strategy

- `master` - Production-ready code
- `develop` - Main development branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches
- `hotfix/*` - Production hotfixes

### Workflow

```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: your feature description"

# Push and create pull request
git push -u origin feature/your-feature-name
```

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## Database Schema

### Main Models

- **User** - User accounts and authentication
- **Event** - Calendar events with priorities and statuses
- **Note** - Notes attached to dates or floating
- **Account** - OAuth accounts
- **Session** - User sessions

For detailed schema, see `prisma/schema.prisma`.

## License

This project is private and proprietary.

## Author

Felipe Kreulich - [@FelipeKreulich](https://github.com/FelipeKreulich)

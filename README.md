# Fractal Tech Candidates

A retro-styled showcase of talented software engineers from Fractal Tech. Built with React, TypeScript, and Tailwind CSS.

## Features

- Retro-futuristic cyberpunk design
- Responsive grid layout
- Contact information for each candidate
- Links to social profiles, portfolios, and resumes
- Hover animations and effects
- Email subscription system using Resend and Supabase

## Tech Stack

- NextJS
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons
- Resend (Email API)
- Supabase (Database)

## Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Database Setup

### Using Drizzle ORM with Supabase

This project uses Drizzle ORM with Supabase for database management. We've set up a `talent_subscribers` table for storing subscriber emails.

1. For production or cloud development:
   - Create a [Supabase](https://supabase.com) project
   - Set up your environment variables as described in the Environment Setup section

2. For local development:
   - Follow the instructions in [SUPABASE_LOCAL_SETUP.md](./SUPABASE_LOCAL_SETUP.md) to run Supabase locally

### Database Schema

The database includes the following tables:
- `talent_subscribers`: For storing subscriber emails
  - `id`: Serial primary key
  - `email`: Unique email address (varchar)
  - `createdAt`: Timestamp of subscription

### Database Commands

```bash
# Generate migrations from your schema
npm run db:generate

# Apply migrations to your database
npm run db:migrate

# Test the database setup
npm run setup-db
```

## Environment Setup

Create a `.env` file at the root of the project with the following variables:

```
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key

# Database Connection (for Drizzle)
DATABASE_URL=your_postgres_connection_string

# Resend Email API (if using email features)
RESEND_API_KEY=your_resend_api_key

# Environment
NODE_ENV=development
```

For local development with Supabase, see [SUPABASE_LOCAL_SETUP.md](./SUPABASE_LOCAL_SETUP.md) for details on obtaining these values.

## License

MIT
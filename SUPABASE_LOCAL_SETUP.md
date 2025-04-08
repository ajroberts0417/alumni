# Setting Up Local Supabase for Development

This guide will help you set up a local Supabase instance for development with Drizzle ORM.

## Prerequisites

1. Install Docker Desktop: https://www.docker.com/products/docker-desktop/
2. Install Supabase CLI:

```bash
# macOS/Linux
brew install supabase/tap/supabase

# Windows
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

## Step 1: Initialize Supabase locally

```bash
# Initialize Supabase in your project folder (outside this repo)
mkdir supabase-local
cd supabase-local
supabase init
```

## Step 2: Start the local Supabase instance

```bash
supabase start
```

This command will:
- Start all Supabase services in Docker containers
- Create a local Postgres database
- Output connection strings and keys

**Save the output information - you'll need it for your .env file.**

Example output:
```
Started supabase local development setup.

         API URL: http://127.0.0.1:54321
          DB URL: postgresql://postgres:postgres@127.0.0.1:54322/postgres
      Studio URL: http://127.0.0.1:54323
    Inbucket URL: http://127.0.0.1:54324
        anon key: eyJh...
service_role key: eyJh...
```

## Step 3: Configure your Environment

Create a `.env` file in the root of this project:

```
# Copy from .env.example and fill in with values from supabase start output
cp .env.example .env
```

Update the values in the `.env` file with the information from the Supabase CLI output:

```
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-from-output
SUPABASE_SERVICE_KEY=your-service-role-key-from-output

# Direct Database Connection (for Drizzle)
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres

# Environment
NODE_ENV=development
```

## Step 4: Generate and apply Drizzle migrations

```bash
# Generate migrations
npm run db:generate

# Apply migrations
npm run db:migrate

# Test the setup
npm run setup-db
```

## Step 5: Access Supabase Studio

Open the Studio URL in your browser (typically http://127.0.0.1:54323).

This provides a web UI similar to the cloud Supabase dashboard where you can:
- Browse and edit your database
- Manage authentication
- View logs
- Test storage, edge functions, and more

## Stopping Supabase

When you're done developing, stop the local instance:

```bash
supabase stop
```

## Troubleshooting

1. **Port conflicts**: If you have services running on the same ports, you may need to change the ports in your Supabase configuration.

2. **Database connection issues**: Make sure your DATABASE_URL in .env matches exactly what was provided when you ran `supabase start`.

3. **Reset local database**: If you need to start fresh, you can reset your local instance with:
```bash
supabase db reset
```

4. **Logs**: View local logs with:
```bash
supabase logs
```

For more information, see the [Supabase CLI documentation](https://supabase.com/docs/reference/cli).
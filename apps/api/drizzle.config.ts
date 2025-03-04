import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({
  path: '.env.local',
});

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error('DATABASE_URL is not set');
}

export default defineConfig({
  out: './migrations',
  schema: './src/schemas/*.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: dbUrl,
  },
});

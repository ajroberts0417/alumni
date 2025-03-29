import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const talentSubscribers = pgTable('talent_subscribers', {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    createdAt: timestamp('created_at').defaultNow()
});

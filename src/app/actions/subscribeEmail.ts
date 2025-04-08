'use server';

import { Resend } from 'resend';
import { db } from '@/db';
import { talentSubscribers } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { SubscribeState } from '../types/subscribe';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeEmail(
    prevState: SubscribeState,
    formData: FormData
): Promise<SubscribeState> {
    const email = formData.get('email') as string;

    if (!email || !email.includes('@')) {
        return {
            success: false,
            error: 'Please provide a valid email address',
            status: 'error'
        };
    }

    try {
        // Check if email already exists
        const existingUser = await db.select()
            .from(talentSubscribers)
            .where(eq(talentSubscribers.email, email))
            .limit(1);

        if (existingUser.length > 0) {
            return {
                success: true,
                message: 'You\'re already subscribed!',
                status: 'success'
            };
        }

        // Add email to database
        await db.insert(talentSubscribers)
            .values({
                email,
                subscribedAt: new Date()
            });

        // Send confirmation email
        const { error: resendError } = await resend.emails.send({
            from: 'Fractal Team <onboarding@resend.dev>', // Update with your verified domain
            to: email,
            subject: 'Thanks for subscribing to Fractal Talent updates!',
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Welcome to Fractal Talent!</h1>
          <p>Thanks for subscribing to our email list. We'll notify you whenever we train a new batch of AI engineers.</p>
          <p>No spam, just updates on talented engineers who can help build the future.</p>
          <p>Best,<br />The Fractal Team</p>
        </div>
      `,
        });

        if (resendError) {
            console.error('Resend error:', resendError);
            // We still return success since the email was added to the database
        }

        return {
            success: true,
            message: 'Successfully subscribed!',
            status: 'success'
        };
    } catch (error) {
        console.error('Subscription error:', error);

        // Check if it's a unique constraint violation
        if (error instanceof Error && error.message.includes('duplicate key')) {
            return {
                success: true,
                message: 'You\'re already subscribed!',
                status: 'success'
            };
        }

        return {
            success: false,
            error: 'An unexpected error occurred',
            status: 'error'
        };
    }
} 
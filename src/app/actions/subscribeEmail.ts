'use server';

import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { SubscribeState } from '../types/subscribe';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

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
        // Add email to Supabase
        const { error: supabaseError } = await supabase
            .from('subscribers')
            .insert([{ email, subscribed_at: new Date().toISOString() }])
            .select();

        if (supabaseError) {
            // If the email already exists, don't treat it as an error
            if (supabaseError.code === '23505') { // Unique violation code
                return {
                    success: true,
                    message: 'You\'re already subscribed!',
                    status: 'success'
                };
            }

            console.error('Supabase error:', supabaseError);
            return {
                success: false,
                error: 'Failed to subscribe',
                status: 'error'
            };
        }

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
        return {
            success: false,
            error: 'An unexpected error occurred',
            status: 'error'
        };
    }
} 
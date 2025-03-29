'use client';

import { useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { subscribeEmail } from '../actions/subscribeEmail';
import { SubscribeState } from '../types/subscribe';

// Initial state for the action
const initialState: SubscribeState = {
    success: false,
    status: 'idle'
};

// Submit button component with loading state
function SubmitButton({ mode }: { mode: 'ascii' | 'arcade' }) {
    const { pending } = useFormStatus();

    if (mode === 'ascii') {
        return (
            <button
                type="submit"
                disabled={pending}
                className="p-2 bg-black text-white hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
                {pending ? 'Subscribing...' : 'subscribe'}
            </button>
        );
    }

    return (
        <button
            type="submit"
            disabled={pending}
            className="p-2 bg-hot-pink text-white font-pixel hover:bg-retro-purple text-shadow-neon transition-colors disabled:opacity-50"
        >
            {pending ? 'SUBSCRIBING...' : 'SUBSCRIBE FOR ALPHA ;)'}
        </button>
    );
}

// Message display component
function ActionMessage({ state, mode }: { state: SubscribeState, mode: 'ascii' | 'arcade' }) {
    if (!state.message && !state.error) return null;

    const message = state.message || state.error;
    const isSuccess = state.success;

    if (mode === 'ascii') {
        return (
            <p className={`mt-2 ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>
                {message}
            </p>
        );
    }

    return (
        <p className={`text-sm font-pixel 
            ${isSuccess ? 'text-neon-green' : 'text-hot-pink'} 
            text-shadow-neon`}
        >
            {message}
        </p>
    );
}

interface EmailSubscribeProps {
    mode: 'ascii' | 'arcade';
}

export default function EmailSubscribe({ mode }: EmailSubscribeProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction] = useActionState(subscribeEmail, initialState);

    // Reset form on successful submission
    if (state.status === 'success' && formRef.current) {
        formRef.current.reset();
    }

    if (mode === 'ascii') {
        return (
            <div className="max-w-4xl mx-auto mb-8 p-4">
                <form ref={formRef} action={formAction} className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        required
                        className="p-2 border border-black flex-grow"
                    />
                    <SubmitButton mode="ascii" />
                </form>
                <ActionMessage state={state} mode="ascii" />
                <p className="text-xs mt-2">
                    We will email you everytime we train another batch of AI engineers. No spam.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mb-8">
            <form
                ref={formRef}
                action={formAction}
                className="retro-card p-4 flex flex-col gap-4 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.7)]"
            >
                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        required
                        className="p-2 bg-black border-2 border-neon-green text-cyber-blue flex-grow font-pixel"
                    />
                    <SubmitButton mode="arcade" />
                </div>
                <ActionMessage state={state} mode="arcade" />
                <p className="text-xs text-electric-yellow font-pixel">
                    We will email you everytime we train another batch of AI engineers. No spam.
                </p>
            </form>
        </div>
    );
} 
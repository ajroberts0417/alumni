

// Define response types for better type safety with useActionState
export type SubscribeState = {
    success: boolean;
    message?: string;
    error?: string;
    status: 'idle' | 'submitting' | 'success' | 'error';
};
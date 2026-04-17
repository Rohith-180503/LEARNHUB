import { Retrier } from "@humanwhocodes/retry";

/**
 * A resilient fetcher that automatically retries on specific network errors
 * usage: resilientFetch(() => fetch('/api/courses'))
 */
const retrier = new Retrier(error => {
    // Retry on rate limits (429) or server overloads (503/504)
    // Also handles standard Node/Browser network flap errors
    return error.status === 429 || error.status >= 500 || error.code === "ECONNRESET";
}, { 
    timeout: 30000, // Stop retrying after 30 seconds
    concurrency: 10 // Limit simultaneous outbound calls
});

export const resilientFetch = async (fetchCall) => {
    if (typeof fetchCall !== 'function') {
        throw new Error("resilientFetch requires a function that returns a Promise.");
    }

    try {
        return await retrier.retry(fetchCall);
    } catch (error) {
        // Wrap the error with context so the developer/user knows it wasn't just a one-off flap
        const enhancedError = new Error(`Request failed after multiple attempts: ${error.message}`);
        enhancedError.originalError = error;
        throw enhancedError;
    }
};
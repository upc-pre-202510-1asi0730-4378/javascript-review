/**
 * Custom error class for handling validation errors
 */
export class ValidationError extends Error {
    /**
     * Creates an instance of ValidationError.
     * @param message {string} - The error message.
     */
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
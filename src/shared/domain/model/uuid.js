import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

/**
 * Generates a UUID (Universally Unique Identifier).
 * @returns {string | Uint8Array} A generated UUID string.
 */
export function generateUuid() {
    return uuidv4();
}

/**
 * Validates a UUID (Universally Unique Identifier).
 * @param value {string} The UUID string to validate.
 * @returns {boolean} True if the UUID is valid, false otherwise.
 */
export function validateUuid(value) {
    return uuidValidate(value);
}
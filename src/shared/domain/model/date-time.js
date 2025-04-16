import {ValidationError} from "./errors.js";

/**
 * DateTime value object.
 */
export class DateTime {
    /**
     * Instantiate a DateTime object.
     * @param date {Date|String} - Date object or date string.
     * @throws {ValidationError} - If the date is invalid.
     */
    constructor(date = new Date()) {
        const parsedDate = date instanceof Date ? date : new Date();
        if (isNaN(parsedDate.getTime()))
            throw new ValidationError(`Invalid date: ${date}`);
        this._date = parsedDate;
    }

    /**
     * Get the date.
     * @returns {Date} - The date object.
     */
    get date() { return this._date; }

    /**
     * Get the date in ISO format.
     * @returns {string} - The date in ISO format.
     */
    toISOString() { return this._date.toISOString(); }

    /**
     * Get the date in human-readable format.
     * @returns {string} - The date in human-readable format.
     */
    toString() {
        return this._date.toLocaleString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: 'numeric', minute: '2-digit', hour12: true
        });
    }

    /**
     * Compare two DateTime objects for equality.
     * @param other {DateTime} - The other DateTime object to compare.
     * @returns {boolean} - True if the two DateTime objects are equal, false otherwise.
     */
    equals(other) {
        return other instanceof DateTime && this._date.getTime() === other.date.getTime();
    }
}
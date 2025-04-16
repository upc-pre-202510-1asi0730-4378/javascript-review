import {ValidationError} from "./errors.js";

/**
 * Represents a currency value object.
 */
export class Currency {
    // Static property to hold valid currency codes
    static #VALID_CODES = ['USD', 'EUR', 'GBP', 'JPY', 'PEN'];

    /**
     * Creates a new Currency instance.
     * @param code {string} - The currency code.
     */
    constructor(code) {
        if(!Currency.#VALID_CODES.includes(code))
            throw new ValidationError(`Invalid currency code: ${code}. Must be one of ${Currency.#VALID_CODES.join(', ')}`);
        this._code = code;
    }

    /**
     * Returns the currency code.
     * @returns {string} - The currency code.
     */
    get code() { return this._code; }

    /**
     * Compares this currency instance with another currency instance for equality.
     * @param other {Currency} - The other currency instance to compare with.
     * @returns {boolean} - True if the currencies are equal, false otherwise.
     */
    equals(other) {
        return other instanceof Currency && this._code === other.code;
    }
}
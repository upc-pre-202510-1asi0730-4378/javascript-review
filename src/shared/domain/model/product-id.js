import {generateUuid, validateUuid} from "./uuid.js";
import {ValidationError} from "./errors.js";

/**
 * ProductId class for representing a unique identifier for a product.
 */
export class ProductId {
    /**
     * @constructor
     * @param {string} value - The UUID string representing the product ID. Must be a valid UUID.
     */
    constructor(value) {
        if(!validateUuid(value))
            throw new ValidationError(`Invalid ProductId: ${value}. Must be a valid UUID.`);
        this._value = value;
    }

    /**
     * Creates a new ProductId instance with a randomly generated UUID.
     * @returns {ProductId}
     */
    static generate() { return new ProductId(generateUuid()); }

    /**
     * Retrieves the UUID string representing the product ID.
     * @returns {string}
     */
    get value() { return this._value; }

    /**
     * Compares this ProductId instance with another ProductId instance for equality.
     * @param other {ProductId} - The other ProductId instance to compare with.
     * @returns {boolean} - True if the UUIDs are equal, false otherwise.
     */
    equals(other) {
        return other instanceof ProductId && this._value === other.value;
    }
}
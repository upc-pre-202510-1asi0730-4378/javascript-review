import {generateUuid, validateUuid} from "./uuid.js";
import {ValidationError} from "./errors.js";

/**
 * SupplierId class represents a unique identifier for a supplier.
 */
export class SupplierId {

    /**
     * Creates a new instance of SupplierId.
     * @param value - The unique identifier value.
     */
    constructor(value) {
        if (!validateUuid(value))
            throw new ValidationError(`Invalid supplier id: ${value}. Must be a valid UUID.`);
        this._value = value;
    }

    /**
     * Returns the unique identifier value.
     * @returns {string} The unique identifier value.
     */
    get value() {
        return this._value;
    }

    /**
     * Creates a new instance of SupplierId with a generated UUID.
     * @returns {SupplierId} A new instance of SupplierId with a generated UUID.
     */
    static generate() {
        return new SupplierId(generateUuid());
    }

    /**
     * Compares this SupplierId instance with another instance for equality.
     * @param other {SupplierId} other - The other SupplierId instance to compare with.
     * @returns {boolean} True if the instances are equal, false otherwise.
     */
    equals(other) {
        return other instanceof SupplierId && this._value === other.value;
    }
}
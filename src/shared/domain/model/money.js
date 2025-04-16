import {ValidationError} from "./errors.js";
import {Currency} from "./currency.js";

/**
 * Represents a monetary value object
 */
export class Money {
    /**
     * Creates a new Money instance.
     * @param {Object} params - The parameters object for creating a Money instance.
     * @param {number} params.amount - The amount of money.
     * @param {Currency} params.currency - The currency of the money.
     */
    constructor({amount, currency}) {
        if(!Number.isFinite(amount) || amount < 0)
            throw new ValidationError('Amount must be a non-negative number');
        if(!currency instanceof Currency)
            throw new ValidationError('Currency must be an instance of Currency');
        this._amount = Number(amount.toFixed(2));
        this._currency = currency;
    }

    /**
     * Retrieve the amount of money.
     * @returns {number}
     */
    get amount() { return this._amount; }
    /**
     * Retrieve the currency of the money.
     * @returns {Currency}
     */
    get currency() { return this._currency; }

    /**
     * Adds another Money instance to this one.
     * @param other {Money} - The other Money instance to add.
     * @returns {Money} - A new Money instance representing the sum.
     */
    add(other) {
        if(!(other instanceof Money) || !this._currency.equals(other.currency))
            throw new ValidationError('Cannot add Money with different currencies');
        return new Money({amount: this._amount + other.amount, currency: this._currency});
    }

    /**
     * Multiplies the amount of money by a given multiplier.
     * @param multiplier {number} - The multiplier to multiply the amount by.
     * @returns {Money} - A new Money instance representing the product.
     */
    multiply(multiplier) {
        if(!Number.isFinite(multiplier) || multiplier <0)
            throw new ValidationError('Multiplier must be a non-negative number');
        return new Money({amount: this._amount * multiplier, currency: this._currency});
    }

    /**
     * Converts the Money instance to a string representation.
     * @returns {string} - The string representation of the Money instance.
     */
    toString() {
        return `${this._currency.code}${this._amount.toFixed(2)}`;
    }

    /**
     * Compares this Money instance with another Money instance for equality.
     * @param other {Money} - The other Money instance to compare with.
     * @returns {boolean} - True if the Money instances are equal, false otherwise.
     */
    equals(other) {
        return other instanceof Money && this._amount === other.amount && this._currency.equals(other.currency);
    }
}
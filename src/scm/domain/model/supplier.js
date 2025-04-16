import {SupplierId} from "../../../shared/domain/model/supplier-id.js";
import {ValidationError} from "../../../shared/domain/model/errors.js";
import {Money} from "../../../shared/domain/model/money.js";

/**
 * Represents a supplier aggregate in the SCM bounded context.
 */
export class Supplier {

    /**
     * Creates a new instance of the Supplier class.
     * @param {Object}          params Parameters for the supplier
     * @param {SupplierId}      params.id The unique identifier of the supplier
     * @param {string}          params.name The name of the supplier
     * @param {string | null}   params.contactEmail The contact email of the supplier
     * @param {Money | null }   params.lastOrderTotalPrice The total price of the last order made to the supplier
     */
    constructor({ id, name, contactEmail = null, lastOrderTotalPrice = null}) {
        if(!id instanceof SupplierId)
            throw new ValidationError('Supplier id must be an instance of SupplierId');
        if(typeof name !== 'string' || name.length < 2 || name.length > 100)
            throw new ValidationError('Supplier name must be a string between 2 and 100 characters');
        if(contactEmail !== null && !this.#isValidEmail(contactEmail))
            throw new ValidationError('Contact email must be a valid email address or null');
        if(lastOrderTotalPrice !== null && !(lastOrderTotalPrice instanceof Money))
            throw new ValidationError('Last order total price must be an instance of Money or null');
        this._id = id;
        this._name = name;
        this._contactEmail = contactEmail;
        this._lastOrderTotalPrice = lastOrderTotalPrice;
    }

    /**
     * Validates the email format using a regular expression.
     * @param email {string} The email address to validate
     * @returns {boolean} True if the email is valid, false otherwise
     */
    #isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Returns the unique identifier of the supplier.
     * @returns {SupplierId} The unique identifier of the supplier
     */
    get id() { return this._id; }

    /**
     * Returns the name of the supplier.
     * @returns {string} The name of the supplier
     */
    get name() { return this._name; }

    /**
     * Returns the contact email of the supplier.
     * @returns {string|null}
     */
    get contactEmail() { return this._contactEmail; }

    /**
     * Returns the total price of the last order made to the supplier.
     * @returns {Money|null} The total price of the last order made to the supplier
     */
    get lastOrderTotalPrice() { return this._lastOrderTotalPrice; }

    /**
     * Sets the total price of the last order made to the supplier.
     * @param newLastOrderTotalPrice {Money} The new total price of the last order made to the supplier
     */
    set lastOrderTotalPrice(newLastOrderTotalPrice) {
        if(!(newLastOrderTotalPrice instanceof Money))
            throw new ValidationError('Last order total price must be an instance of Money');
        this._lastOrderTotalPrice = newLastOrderTotalPrice;
    }
}
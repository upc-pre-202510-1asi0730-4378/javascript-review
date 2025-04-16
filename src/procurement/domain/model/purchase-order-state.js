export class PurchaseOrderState {
    static #VALID_STATES = {
        DRAFT: 'Draft',
        SUBMITTED: 'Submitted',
        APPROVED: 'Approved',
        SHIPPED: 'Shipped',
        COMPLETED: 'Completed',
        CANCELLED: 'Cancelled'
    }

    constructor(value = PurchaseOrderState.#VALID_STATES.DRAFT) {
        // TODO: Validate the value against the valid states
        this._value = value;
    }

    // TODO: Implement State transition logic methods
}
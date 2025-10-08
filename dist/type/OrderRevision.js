"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRevision = void 0;
/**
 Version control record for order modifications
 * Represents a specific version of an order at a point in time, including complete snapshot data and metadata about who created the revision and when. Used for audit trails, rollback capabilities, and tracking order evolution.
 */
class OrderRevision {
    /**
     Creates a new instance of OrderRevision
     */
    constructor(data = {}) {
        this._orderId = data.orderId;
        this._revisionNumber = data.revisionNumber;
        this._createdByContactId = data.createdByContactId;
        this._createdByCustomerId = data.createdByCustomerId;
        this._createdByAdminUserId = data.createdByAdminUserId;
        this._createdByAdminUser = data.createdByAdminUser;
        this._createdAt = data.createdAt;
        this._createdFromRevisionNumber = data.createdFromRevisionNumber;
        this._snapshot = data.snapshot;
        this._createdByContact = data.createdByContact;
        this._createdByCustomer = data.createdByCustomer;
    }
    /**
     ID of the order this revision belongs to
     */
    get orderId() {
        return this._orderId;
    }
    /**
     ID of the order this revision belongs to
     */
    set orderId(value) {
        this._orderId = value;
    }
    /**
     Revision number
     */
    get revisionNumber() {
        return this._revisionNumber;
    }
    /**
     Revision number
     */
    set revisionNumber(value) {
        this._revisionNumber = value;
    }
    /**
     ID of the contact who created this revision
     */
    get createdByContactId() {
        return this._createdByContactId;
    }
    /**
     ID of the contact who created this revision
     */
    set createdByContactId(value) {
        this._createdByContactId = value;
    }
    /**
     ID of the customer who created this revision
     */
    get createdByCustomerId() {
        return this._createdByCustomerId;
    }
    /**
     ID of the customer who created this revision
     */
    set createdByCustomerId(value) {
        this._createdByCustomerId = value;
    }
    /**
     ID of the admin user who created this revision
     */
    get createdByAdminUserId() {
        return this._createdByAdminUserId;
    }
    /**
     ID of the admin user who created this revision
     */
    set createdByAdminUserId(value) {
        this._createdByAdminUserId = value;
    }
    /**
     Admin user that created the revision
     */
    get createdByAdminUser() {
        return this._createdByAdminUser;
    }
    /**
     Admin user that created the revision
     */
    set createdByAdminUser(value) {
        this._createdByAdminUser = value;
    }
    /**
     Date and time when this revision was created
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Date and time when this revision was created
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     The revision this was created from
     */
    get createdFromRevisionNumber() {
        return this._createdFromRevisionNumber;
    }
    /**
     The revision this was created from
     */
    set createdFromRevisionNumber(value) {
        this._createdFromRevisionNumber = value;
    }
    /**
     Complete snapshot of the order data at the time this revision was created
     */
    get snapshot() {
        return this._snapshot;
    }
    /**
     Complete snapshot of the order data at the time this revision was created
     */
    set snapshot(value) {
        this._snapshot = value;
    }
    /**
     Contact that created the revision
     */
    get createdByContact() {
        return this._createdByContact;
    }
    /**
     Contact that created the revision
     */
    set createdByContact(value) {
        this._createdByContact = value;
    }
    /**
     Customer that created the revision
     */
    get createdByCustomer() {
        return this._createdByCustomer;
    }
    /**
     Customer that created the revision
     */
    set createdByCustomer(value) {
        this._createdByCustomer = value;
    }
}
exports.OrderRevision = OrderRevision;
//# sourceMappingURL=OrderRevision.js.map
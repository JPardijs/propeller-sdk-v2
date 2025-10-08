"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
/**
 Object class for Payment
 */
class Payment {
    /**
     Creates a new instance of Payment
     */
    constructor(data = {}) {
        this._id = data.id;
        this._userId = data.userId;
        this._anonymousId = data.anonymousId;
        this._paymentId = data.paymentId;
        this._orderId = data.orderId;
        this._amount = data.amount;
        this._currency = data.currency;
        this._method = data.method;
        this._status = data.status;
        this._transactions = data.transactions;
        this._createdAt = data.createdAt;
        this._createdBy = data.createdBy;
        this._lastModifiedAt = data.lastModifiedAt;
        this._lastModifiedBy = data.lastModifiedBy;
    }
    /**
     Payment primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Payment primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Logged in User ID
     */
    get userId() {
        return this._userId;
    }
    /**
     Logged in User ID
     */
    set userId(value) {
        this._userId = value;
    }
    /**
     Guest User ID
     */
    get anonymousId() {
        return this._anonymousId;
    }
    /**
     Guest User ID
     */
    set anonymousId(value) {
        this._anonymousId = value;
    }
    /**
     Unique paymentId reference for the Payment - provided by the PSP
     */
    get paymentId() {
        return this._paymentId;
    }
    /**
     Unique paymentId reference for the Payment - provided by the PSP
     */
    set paymentId(value) {
        this._paymentId = value;
    }
    /**
     Unique orderId reference for the Payment
     */
    get orderId() {
        return this._orderId;
    }
    /**
     Unique orderId reference for the Payment
     */
    set orderId(value) {
        this._orderId = value;
    }
    /**
     Payment amount [denomination in cents]
     */
    get amount() {
        return this._amount;
    }
    /**
     Payment amount [denomination in cents]
     */
    set amount(value) {
        this._amount = value;
    }
    /**
     Payment currency - ISO 4217 currency code => https://www.xe.com/iso4217.php
     */
    get currency() {
        return this._currency;
    }
    /**
     Payment currency - ISO 4217 currency code => https://www.xe.com/iso4217.php
     */
    set currency(value) {
        this._currency = value;
    }
    /**
     Payment method used by the PSP
     */
    get method() {
        return this._method;
    }
    /**
     Payment method used by the PSP
     */
    set method(value) {
        this._method = value;
    }
    /**
     Payment status
     */
    get status() {
        return this._status;
    }
    /**
     Payment status
     */
    set status(value) {
        this._status = value;
    }
    /**
     Transaction(s) related to the specified payment
     */
    get transactions() {
        return this._transactions;
    }
    /**
     Transaction(s) related to the specified payment
     */
    set transactions(value) {
        this._transactions = value;
    }
    /**
     Payment initial creation timestamp
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Payment initial creation timestamp
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Reference to the user that created the payment initially
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     Reference to the user that created the payment initially
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     Payment last update timestamp
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Payment last update timestamp
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     Reference to the user that last modified the payment
     */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }
    /**
     Reference to the user that last modified the payment
     */
    set lastModifiedBy(value) {
        this._lastModifiedBy = value;
    }
}
exports.Payment = Payment;
//# sourceMappingURL=Payment.js.map
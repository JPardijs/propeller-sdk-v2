"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
/**
 Object class for Transaction
 */
class Transaction {
    /**
     Creates a new instance of Transaction
     */
    constructor(data = {}) {
        this._id = data.id;
        this._transactionId = data.transactionId;
        this._paymentId = data.paymentId;
        this._orderId = data.orderId;
        this._amount = data.amount;
        this._currency = data.currency;
        this._description = data.description;
        this._timestamp = data.timestamp;
        this._type = data.type;
        this._provider = data.provider;
        this._status = data.status;
    }
    /**
     Transaction primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Transaction primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Transaction ID - usually provided by the PSP [if not available please provide paymentId or other unique identifier]
     */
    get transactionId() {
        return this._transactionId;
    }
    /**
     Transaction ID - usually provided by the PSP [if not available please provide paymentId or other unique identifier]
     */
    set transactionId(value) {
        this._transactionId = value;
    }
    /**
     Payment ID - usually provided by the PSP
     */
    get paymentId() {
        return this._paymentId;
    }
    /**
     Payment ID - usually provided by the PSP
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
     Transaction amount
     */
    get amount() {
        return this._amount;
    }
    /**
     Transaction amount
     */
    set amount(value) {
        this._amount = value;
    }
    /**
     Transaction currency - ISO 4217 currency code => https://www.xe.com/iso4217.php
     */
    get currency() {
        return this._currency;
    }
    /**
     Transaction currency - ISO 4217 currency code => https://www.xe.com/iso4217.php
     */
    set currency(value) {
        this._currency = value;
    }
    /**
     Description
     */
    get description() {
        return this._description;
    }
    /**
     Description
     */
    set description(value) {
        this._description = value;
    }
    /**
     Transaction timestamp
     */
    get timestamp() {
        return this._timestamp;
    }
    /**
     Transaction timestamp
     */
    set timestamp(value) {
        this._timestamp = value;
    }
    /**
     Transaction type
     */
    get type() {
        return this._type;
    }
    /**
     Transaction type
     */
    set type(value) {
        this._type = value;
    }
    /**
     PSP Provider Name
     */
    get provider() {
        return this._provider;
    }
    /**
     PSP Provider Name
     */
    set provider(value) {
        this._provider = value;
    }
    /**
     Transaction status
     */
    get status() {
        return this._status;
    }
    /**
     Transaction status
     */
    set status(value) {
        this._status = value;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map
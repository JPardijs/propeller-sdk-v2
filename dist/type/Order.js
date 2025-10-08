"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
/**
 Object class for Order
 */
class Order {
    /**
     Creates a new instance of Order
     */
    constructor(data = {}) {
        this._id = data.id;
        this._media = data.media;
        this._userId = data.userId;
        this._accountManagerId = data.accountManagerId;
        this._cartId = data.cartId;
        this._channelId = data.channelId;
        this._shopId = data.shopId;
        this._uuid = data.uuid;
        this._externalId = data.externalId;
        this._debtorId = data.debtorId;
        this._status = data.status;
        this._type = data.type;
        this._source = data.source;
        this._email = data.email;
        this._emailDate = data.emailDate;
        this._remarks = data.remarks;
        this._reference = data.reference;
        this._extra3 = data.extra3;
        this._extra4 = data.extra4;
        this._currency = data.currency;
        this._currencyRatio = data.currencyRatio;
        this._language = data.language;
        this._date = data.date;
        this._createdAt = data.createdAt;
        this._statusDate = data.statusDate;
        this._postageData = data.postageData;
        this._paymentData = data.paymentData;
        this._total = data.total;
        this._items = data.items;
        this._shipments = data.shipments;
        this._addresses = data.addresses;
        this._invoiceUserId = data.invoiceUserId;
        this._validUntil = data.validUntil;
        this._companyId = data.companyId;
        this._lastModifiedAt = data.lastModifiedAt;
        this._originalOrderId = data.originalOrderId;
        this._exportedAt = data.exportedAt;
        this._exportStatus = data.exportStatus;
        this._exportMessage = data.exportMessage;
        this._orderAddresses = data.orderAddresses;
    }
    /**
     The auto-incremental id for this order
     */
    get id() {
        return this._id;
    }
    /**
     The auto-incremental id for this order
     */
    set id(value) {
        this._id = value;
    }
    /**
     media field
     */
    get media() {
        return this._media;
    }
    /**
     media field
     */
    set media(value) {
        this._media = value;
    }
    /**
     The userId of the user that placed this order
     */
    get userId() {
        return this._userId;
    }
    /**
     The userId of the user that placed this order
     */
    set userId(value) {
        this._userId = value;
    }
    /**
     The id of the Owner/Account Manager that will handle this order
     */
    get accountManagerId() {
        return this._accountManagerId;
    }
    /**
     The id of the Owner/Account Manager that will handle this order
     */
    set accountManagerId(value) {
        this._accountManagerId = value;
    }
    /**
     The cartId of the cart that this order is created from.
     */
    get cartId() {
        return this._cartId;
    }
    /**
     The cartId of the cart that this order is created from.
     */
    set cartId(value) {
        this._cartId = value;
    }
    /**
     The channel identifier of the webshop this order originated from
     */
    get channelId() {
        return this._channelId;
    }
    /**
     The channel identifier of the webshop this order originated from
     */
    set channelId(value) {
        this._channelId = value;
    }
    /**
     The ID of the shop the Order belongs to
     */
    get shopId() {
        return this._shopId;
    }
    /**
     The ID of the shop the Order belongs to
     */
    set shopId(value) {
        this._shopId = value;
    }
    /**
     Unique identifier for this order
     */
    get uuid() {
        return this._uuid;
    }
    /**
     Unique identifier for this order
     */
    set uuid(value) {
        this._uuid = value;
    }
    /**
     External identifier for this order from an external source like an ERP system
     */
    get externalId() {
        return this._externalId;
    }
    /**
     External identifier for this order from an external source like an ERP system
     */
    set externalId(value) {
        this._externalId = value;
    }
    /**
     The debtorId of the Customer or Company that placed this Order
     */
    get debtorId() {
        return this._debtorId;
    }
    /**
     The debtorId of the Customer or Company that placed this Order
     */
    set debtorId(value) {
        this._debtorId = value;
    }
    /**
     The processing status for this order
     */
    get status() {
        return this._status;
    }
    /**
     The processing status for this order
     */
    set status(value) {
        this._status = value;
    }
    /**
     The type of this order
     */
    get type() {
        return this._type;
    }
    /**
     The type of this order
     */
    set type(value) {
        this._type = value;
    }
    /**
     The source this order originates from
     */
    get source() {
        return this._source;
    }
    /**
     The source this order originates from
     */
    set source(value) {
        this._source = value;
    }
    /**
     The email address for transactional emails
     */
    get email() {
        return this._email;
    }
    /**
     The email address for transactional emails
     */
    set email(value) {
        this._email = value;
    }
    /**
     The date the last transactional email was sent for this order
     */
    get emailDate() {
        return this._emailDate;
    }
    /**
     The date the last transactional email was sent for this order
     */
    set emailDate(value) {
        this._emailDate = value;
    }
    /**
     Remarks added by the customer about this order
     */
    get remarks() {
        return this._remarks;
    }
    /**
     Remarks added by the customer about this order
     */
    set remarks(value) {
        this._remarks = value;
    }
    /**
     Reference added by the customer about this order
     */
    get reference() {
        return this._reference;
    }
    /**
     Reference added by the customer about this order
     */
    set reference(value) {
        this._reference = value;
    }
    /**
     extra3: Open text field to add meta data on an Order.
      The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations.
     */
    get extra3() {
        return this._extra3;
    }
    /**
     extra3: Open text field to add meta data on an Order.
      The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations.
     */
    set extra3(value) {
        this._extra3 = value;
    }
    /**
     extra4: Open text field to add meta data on an Order.
      The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations.
     */
    get extra4() {
        return this._extra4;
    }
    /**
     extra4: Open text field to add meta data on an Order.
      The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations.
     */
    set extra4(value) {
        this._extra4 = value;
    }
    /**
     Currency used to place this order
     */
    get currency() {
        return this._currency;
    }
    /**
     Currency used to place this order
     */
    set currency(value) {
        this._currency = value;
    }
    /**
     The currency's exchange rate at the time the order was placed
     */
    get currencyRatio() {
        return this._currencyRatio;
    }
    /**
     The currency's exchange rate at the time the order was placed
     */
    set currencyRatio(value) {
        this._currencyRatio = value;
    }
    /**
     The selected language on the webshop at the time the order was placed
     */
    get language() {
        return this._language;
    }
    /**
     The selected language on the webshop at the time the order was placed
     */
    set language(value) {
        this._language = value;
    }
    /**
     The date and time the order was placed
     */
    get date() {
        return this._date;
    }
    /**
     The date and time the order was placed
     */
    set date(value) {
        this._date = value;
    }
    /**
     The date and time the order was placed
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     The date and time the order was placed
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     The date and time the status of the order was last changed
     */
    get statusDate() {
        return this._statusDate;
    }
    /**
     The date and time the status of the order was last changed
     */
    set statusDate(value) {
        this._statusDate = value;
    }
    /**
     The postage data of the order
     */
    get postageData() {
        return this._postageData;
    }
    /**
     The postage data of the order
     */
    set postageData(value) {
        this._postageData = value;
    }
    /**
     The payment data of the order
     */
    get paymentData() {
        return this._paymentData;
    }
    /**
     The payment data of the order
     */
    set paymentData(value) {
        this._paymentData = value;
    }
    /**
     The totals of the order
     */
    get total() {
        return this._total;
    }
    /**
     The totals of the order
     */
    set total(value) {
        this._total = value;
    }
    /**
     The items included in the order
     */
    get items() {
        return this._items;
    }
    /**
     The items included in the order
     */
    set items(value) {
        this._items = value;
    }
    /**
     The shipments for the order
     */
    get shipments() {
        return this._shipments;
    }
    /**
     The shipments for the order
     */
    set shipments(value) {
        this._shipments = value;
    }
    /**
     The addresses for the order
     */
    get addresses() {
        return this._addresses;
    }
    /**
     The addresses for the order
     */
    set addresses(value) {
        this._addresses = value;
    }
    /**
     The id of the User, contact or Customer that should receive the invoice for this Order
     */
    get invoiceUserId() {
        return this._invoiceUserId;
    }
    /**
     The id of the User, contact or Customer that should receive the invoice for this Order
     */
    set invoiceUserId(value) {
        this._invoiceUserId = value;
    }
    /**
     The date and time until the order is valid
     */
    get validUntil() {
        return this._validUntil;
    }
    /**
     The date and time until the order is valid
     */
    set validUntil(value) {
        this._validUntil = value;
    }
    /**
     The companyId of the company that placed this order
     */
    get companyId() {
        return this._companyId;
    }
    /**
     The companyId of the company that placed this order
     */
    set companyId(value) {
        this._companyId = value;
    }
    /**
     The date and time the order was last modified
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     The date and time the order was last modified
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     Original order id
     */
    get originalOrderId() {
        return this._originalOrderId;
    }
    /**
     Original order id
     */
    set originalOrderId(value) {
        this._originalOrderId = value;
    }
    /**
     The date and time the order was exported
     */
    get exportedAt() {
        return this._exportedAt;
    }
    /**
     The date and time the order was exported
     */
    set exportedAt(value) {
        this._exportedAt = value;
    }
    /**
     Order export status of this order
     */
    get exportStatus() {
        return this._exportStatus;
    }
    /**
     Order export status of this order
     */
    set exportStatus(value) {
        this._exportStatus = value;
    }
    /**
     Order export message
     */
    get exportMessage() {
        return this._exportMessage;
    }
    /**
     Order export message
     */
    set exportMessage(value) {
        this._exportMessage = value;
    }
    /**
     orderAddresses field
     */
    get orderAddresses() {
        return this._orderAddresses;
    }
    /**
     orderAddresses field
     */
    set orderAddresses(value) {
        this._orderAddresses = value;
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map
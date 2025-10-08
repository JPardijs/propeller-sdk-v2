"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tender = void 0;
/**
 Comprehensive tender entity representing a potential order in the system.
 * Tenders are draft orders that contain all necessary information for order processing including customer details, items, pricing, addresses, payment methods, and shipping information. They can be modified, processed into orders, or deleted as needed.
 */
class Tender {
    /**
     Creates a new instance of Tender
     */
    constructor(data = {}) {
        this._tenderId = data.tenderId;
        this._orderId = data.orderId;
        this._ownerId = data.ownerId;
        this._type = data.type;
        this._siteId = data.siteId;
        this._channelId = data.channelId;
        this._shopId = data.shopId;
        this._createdAt = data.createdAt;
        this._createdBy = data.createdBy;
        this._lastModifiedAt = data.lastModifiedAt;
        this._lastModifiedBy = data.lastModifiedBy;
        this._contactId = data.contactId;
        this._customerId = data.customerId;
        this._companyId = data.companyId;
        this._invoiceUserId = data.invoiceUserId;
        this._status = data.status;
        this._firstName = data.firstName;
        this._middleName = data.middleName;
        this._lastName = data.lastName;
        this._email = data.email;
        this._debtorId = data.debtorId;
        this._invoiceAddress = data.invoiceAddress;
        this._deliveryAddress = data.deliveryAddress;
        this._itemCount = data.itemCount;
        this._items = data.items;
        this._bonusItems = data.bonusItems;
        this._paymentData = data.paymentData;
        this._postageData = data.postageData;
        this._total = data.total;
        this._taxLevels = data.taxLevels;
        this._carriers = data.carriers;
        this._payMethods = data.payMethods;
        this._source = data.source;
        this._valuePoints = data.valuePoints;
        this._incentivesApplied = data.incentivesApplied;
        this._creditPoints = data.creditPoints;
        this._actionCode = data.actionCode;
        this._reference = data.reference;
        this._remarks = data.remarks;
        this._language = data.language;
        this._currency = data.currency;
        this._currencyRatio = data.currencyRatio;
        this._externalId = data.externalId;
        this._extra3 = data.extra3;
        this._extra4 = data.extra4;
        this._isEditable = data.isEditable;
        this._validUntil = data.validUntil;
        this._contact = data.contact;
        this._customer = data.customer;
        this._company = data.company;
        this._revisions = data.revisions;
        this._public = data.public;
        this._revisionNumber = data.revisionNumber;
        this._publicVersionNumber = data.publicVersionNumber;
        this._invalid = data.invalid;
        this._invalidationReason = data.invalidationReason;
        this._createdByAdminUserId = data.createdByAdminUserId;
        this._createdByContactId = data.createdByContactId;
        this._createdByCustomerId = data.createdByCustomerId;
        this._createdFromRevisionNumber = data.createdFromRevisionNumber;
    }
    /**
     The tender's primary identifier
     */
    get tenderId() {
        return this._tenderId;
    }
    /**
     The tender's primary identifier
     */
    set tenderId(value) {
        this._tenderId = value;
    }
    /**
     Tender's associated order ID
     */
    get orderId() {
        return this._orderId;
    }
    /**
     Tender's associated order ID
     */
    set orderId(value) {
        this._orderId = value;
    }
    /**
     Tender's associated owner ID
     */
    get ownerId() {
        return this._ownerId;
    }
    /**
     Tender's associated owner ID
     */
    set ownerId(value) {
        this._ownerId = value;
    }
    /**
     Order type
     */
    get type() {
        return this._type;
    }
    /**
     Order type
     */
    set type(value) {
        this._type = value;
    }
    /**
     The site id the tender/order is created from
     */
    get siteId() {
        return this._siteId;
    }
    /**
     The site id the tender/order is created from
     */
    set siteId(value) {
        this._siteId = value;
    }
    /**
     The channel id the tender/order is created from
     */
    get channelId() {
        return this._channelId;
    }
    /**
     The channel id the tender/order is created from
     */
    set channelId(value) {
        this._channelId = value;
    }
    /**
     The shop the tender/order belongs to
     */
    get shopId() {
        return this._shopId;
    }
    /**
     The shop the tender/order belongs to
     */
    set shopId(value) {
        this._shopId = value;
    }
    /**
     The date this tender/order has been created
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     The date this tender/order has been created
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     User which created the tender.
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     User which created the tender.
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     The date this tender/order has been last modified
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     The date this tender/order has been last modified
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     User which last updated the tender.
     */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }
    /**
     User which last updated the tender.
     */
    set lastModifiedBy(value) {
        this._lastModifiedBy = value;
    }
    /**
     ContactId for this tender. Goes in combination with companyId
     */
    get contactId() {
        return this._contactId;
    }
    /**
     ContactId for this tender. Goes in combination with companyId
     */
    set contactId(value) {
        this._contactId = value;
    }
    /**
     CustomerId for this tender.
     */
    get customerId() {
        return this._customerId;
    }
    /**
     CustomerId for this tender.
     */
    set customerId(value) {
        this._customerId = value;
    }
    /**
     CompanyId the contact belongs to. Goes in combination with contactId
     */
    get companyId() {
        return this._companyId;
    }
    /**
     CompanyId the contact belongs to. Goes in combination with contactId
     */
    set companyId(value) {
        this._companyId = value;
    }
    /**
     The invoice userId for this tender
     */
    get invoiceUserId() {
        return this._invoiceUserId;
    }
    /**
     The invoice userId for this tender
     */
    set invoiceUserId(value) {
        this._invoiceUserId = value;
    }
    /**
     Tender/order status
     */
    get status() {
        return this._status;
    }
    /**
     Tender/order status
     */
    set status(value) {
        this._status = value;
    }
    /**
     User's first name
     */
    get firstName() {
        return this._firstName;
    }
    /**
     User's first name
     */
    set firstName(value) {
        this._firstName = value;
    }
    /**
     User's middle name
     */
    get middleName() {
        return this._middleName;
    }
    /**
     User's middle name
     */
    set middleName(value) {
        this._middleName = value;
    }
    /**
     User's last name
     */
    get lastName() {
        return this._lastName;
    }
    /**
     User's last name
     */
    set lastName(value) {
        this._lastName = value;
    }
    /**
     User's email
     */
    get email() {
        return this._email;
    }
    /**
     User's email
     */
    set email(value) {
        this._email = value;
    }
    /**
     Invoice company debtor ID
     */
    get debtorId() {
        return this._debtorId;
    }
    /**
     Invoice company debtor ID
     */
    set debtorId(value) {
        this._debtorId = value;
    }
    /**
     The address the invoice for the order should be sent to
     */
    get invoiceAddress() {
        return this._invoiceAddress;
    }
    /**
     The address the invoice for the order should be sent to
     */
    set invoiceAddress(value) {
        this._invoiceAddress = value;
    }
    /**
     The address the order should be shipped to
     */
    get deliveryAddress() {
        return this._deliveryAddress;
    }
    /**
     The address the order should be shipped to
     */
    set deliveryAddress(value) {
        this._deliveryAddress = value;
    }
    /**
     Tender/order main item count
     */
    get itemCount() {
        return this._itemCount;
    }
    /**
     Tender/order main item count
     */
    set itemCount(value) {
        this._itemCount = value;
    }
    /**
     The tender/order items
     */
    get items() {
        return this._items;
    }
    /**
     The tender/order items
     */
    set items(value) {
        this._items = value;
    }
    /**
     The tender/order bonusItems
     */
    get bonusItems() {
        return this._bonusItems;
    }
    /**
     The tender/order bonusItems
     */
    set bonusItems(value) {
        this._bonusItems = value;
    }
    /**
     Payment data for this tender/order
     */
    get paymentData() {
        return this._paymentData;
    }
    /**
     Payment data for this tender/order
     */
    set paymentData(value) {
        this._paymentData = value;
    }
    /**
     Postage data for this tender/order
     */
    get postageData() {
        return this._postageData;
    }
    /**
     Postage data for this tender/order
     */
    set postageData(value) {
        this._postageData = value;
    }
    /**
     Tender total
     */
    get total() {
        return this._total;
    }
    /**
     Tender total
     */
    set total(value) {
        this._total = value;
    }
    /**
     Amount of tax that applies to this tender/order per tax code
     */
    get taxLevels() {
        return this._taxLevels;
    }
    /**
     Amount of tax that applies to this tender/order per tax code
     */
    set taxLevels(value) {
        this._taxLevels = value;
    }
    /**
     List of selectable carriers
     */
    get carriers() {
        return this._carriers;
    }
    /**
     List of selectable carriers
     */
    set carriers(value) {
        this._carriers = value;
    }
    /**
     List of selectable payment methods for this tender, including non allowed for the applied user
     */
    get payMethods() {
        return this._payMethods;
    }
    /**
     List of selectable payment methods for this tender, including non allowed for the applied user
     */
    set payMethods(value) {
        this._payMethods = value;
    }
    /**
     Tender/order origin
     */
    get source() {
        return this._source;
    }
    /**
     Tender/order origin
     */
    set source(value) {
        this._source = value;
    }
    /**
     Total amount of valuePoints that apply to this tender/order
     */
    get valuePoints() {
        return this._valuePoints;
    }
    /**
     Total amount of valuePoints that apply to this tender/order
     */
    set valuePoints(value) {
        this._valuePoints = value;
    }
    /**
     Indicates whether incentives are already applied
     */
    get incentivesApplied() {
        return this._incentivesApplied;
    }
    /**
     Indicates whether incentives are already applied
     */
    set incentivesApplied(value) {
        this._incentivesApplied = value;
    }
    /**
     Tender/order accumulated credit points
     */
    get creditPoints() {
        return this._creditPoints;
    }
    /**
     Tender/order accumulated credit points
     */
    set creditPoints(value) {
        this._creditPoints = value;
    }
    /**
     Action code that is applied to this tender. Is only filled if a valid action code was applied during checkout
     */
    get actionCode() {
        return this._actionCode;
    }
    /**
     Action code that is applied to this tender. Is only filled if a valid action code was applied during checkout
     */
    set actionCode(value) {
        this._actionCode = value;
    }
    /**
     User's reference for this tender
     */
    get reference() {
        return this._reference;
    }
    /**
     User's reference for this tender
     */
    set reference(value) {
        this._reference = value;
    }
    /**
     User's remarks for this tender
     */
    get remarks() {
        return this._remarks;
    }
    /**
     User's remarks for this tender
     */
    set remarks(value) {
        this._remarks = value;
    }
    /**
     The language for this tender
     */
    get language() {
        return this._language;
    }
    /**
     The language for this tender
     */
    set language(value) {
        this._language = value;
    }
    /**
     The currency for this tender
     */
    get currency() {
        return this._currency;
    }
    /**
     The currency for this tender
     */
    set currency(value) {
        this._currency = value;
    }
    /**
     The currency ratio for this tender
     */
    get currencyRatio() {
        return this._currencyRatio;
    }
    /**
     The currency ratio for this tender
     */
    set currencyRatio(value) {
        this._currencyRatio = value;
    }
    /**
     The order's ID in an external system
     */
    get externalId() {
        return this._externalId;
    }
    /**
     The order's ID in an external system
     */
    set externalId(value) {
        this._externalId = value;
    }
    /**
     Additional information field that can be stored with a tender/order
     */
    get extra3() {
        return this._extra3;
    }
    /**
     Additional information field that can be stored with a tender/order
     */
    set extra3(value) {
        this._extra3 = value;
    }
    /**
     Additional information field that can be stored with a tender/order
     */
    get extra4() {
        return this._extra4;
    }
    /**
     Additional information field that can be stored with a tender/order
     */
    set extra4(value) {
        this._extra4 = value;
    }
    /**
     Indicates whether tender can be edited
     */
    get isEditable() {
        return this._isEditable;
    }
    /**
     Indicates whether tender can be edited
     */
    set isEditable(value) {
        this._isEditable = value;
    }
    /**
     Valid until date (Display Only!)
     */
    get validUntil() {
        return this._validUntil;
    }
    /**
     Valid until date (Display Only!)
     */
    set validUntil(value) {
        this._validUntil = value;
    }
    /**
     Tender Contact
     */
    get contact() {
        return this._contact;
    }
    /**
     Tender Contact
     */
    set contact(value) {
        this._contact = value;
    }
    /**
     Tender Customer
     */
    get customer() {
        return this._customer;
    }
    /**
     Tender Customer
     */
    set customer(value) {
        this._customer = value;
    }
    /**
     Tender Company
     */
    get company() {
        return this._company;
    }
    /**
     Tender Company
     */
    set company(value) {
        this._company = value;
    }
    /**
     List of tender revisions for version control and audit purposes
     */
    get revisions() {
        return this._revisions;
    }
    /**
     List of tender revisions for version control and audit purposes
     */
    set revisions(value) {
        this._revisions = value;
    }
    /**
     Public visibility flag for tender sharing and collaboration
     */
    get public() {
        return this._public;
    }
    /**
     Public visibility flag for tender sharing and collaboration
     */
    set public(value) {
        this._public = value;
    }
    /**
     Current revision number for version tracking
     */
    get revisionNumber() {
        return this._revisionNumber;
    }
    /**
     Current revision number for version tracking
     */
    set revisionNumber(value) {
        this._revisionNumber = value;
    }
    /**
     Public version number for external sharing
     */
    get publicVersionNumber() {
        return this._publicVersionNumber;
    }
    /**
     Public version number for external sharing
     */
    set publicVersionNumber(value) {
        this._publicVersionNumber = value;
    }
    /**
     Invalid status flag indicating tender issues
     */
    get invalid() {
        return this._invalid;
    }
    /**
     Invalid status flag indicating tender issues
     */
    set invalid(value) {
        this._invalid = value;
    }
    /**
     Reason for tender invalidation if applicable
     */
    get invalidationReason() {
        return this._invalidationReason;
    }
    /**
     Reason for tender invalidation if applicable
     */
    set invalidationReason(value) {
        this._invalidationReason = value;
    }
    /**
     Admin user ID who created this tender
     */
    get createdByAdminUserId() {
        return this._createdByAdminUserId;
    }
    /**
     Admin user ID who created this tender
     */
    set createdByAdminUserId(value) {
        this._createdByAdminUserId = value;
    }
    /**
     Contact user ID who created this tender
     */
    get createdByContactId() {
        return this._createdByContactId;
    }
    /**
     Contact user ID who created this tender
     */
    set createdByContactId(value) {
        this._createdByContactId = value;
    }
    /**
     Customer user ID who created this tender
     */
    get createdByCustomerId() {
        return this._createdByCustomerId;
    }
    /**
     Customer user ID who created this tender
     */
    set createdByCustomerId(value) {
        this._createdByCustomerId = value;
    }
    /**
     Source revision number when tender was created from existing revision
     */
    get createdFromRevisionNumber() {
        return this._createdFromRevisionNumber;
    }
    /**
     Source revision number when tender was created from existing revision
     */
    set createdFromRevisionNumber(value) {
        this._createdFromRevisionNumber = value;
    }
}
exports.Tender = Tender;
//# sourceMappingURL=Tender.js.map
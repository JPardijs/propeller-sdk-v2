"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
/**
 Object class for Cart
 */
class Cart {
    /**
     Creates a new instance of Cart
     */
    constructor(data = {}) {
        this._cartId = data.cartId;
        this._channelId = data.channelId;
        this._shopId = data.shopId;
        this._userId = data.userId;
        this._contactId = data.contactId;
        this._customerId = data.customerId;
        this._companyId = data.companyId;
        this._notes = data.notes;
        this._reference = data.reference;
        this._extra3 = data.extra3;
        this._extra4 = data.extra4;
        this._orderStatus = data.orderStatus;
        this._actionCode = data.actionCode;
        this._vouchers = data.vouchers;
        this._paymentData = data.paymentData;
        this._postageData = data.postageData;
        this._total = data.total;
        this._items = data.items;
        this._bonusItems = data.bonusItems;
        this._unOrderableItems = data.unOrderableItems;
        this._invoiceAddress = data.invoiceAddress;
        this._deliveryAddress = data.deliveryAddress;
        this._taxLevels = data.taxLevels;
        this._payMethods = data.payMethods;
        this._carriers = data.carriers;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._createdBy = data.createdBy;
        this._lastModifiedBy = data.lastModifiedBy;
        this._appliedIncentives = data.appliedIncentives;
        this._valuePoints = data.valuePoints;
        this._shippingMethods = data.shippingMethods;
        this._language = data.language;
        this._purchaseAuthorizationRequired = data.purchaseAuthorizationRequired;
        this._status = data.status;
        this._user = data.user;
        this._contact = data.contact;
        this._customer = data.customer;
        this._company = data.company;
    }
    /**
     Cart's primary identifier
     */
    get cartId() {
        return this._cartId;
    }
    /**
     Cart's primary identifier
     */
    set cartId(value) {
        this._cartId = value;
    }
    /**
     Channel identifier this cart belongs to.
     */
    get channelId() {
        return this._channelId;
    }
    /**
     Channel identifier this cart belongs to.
     */
    set channelId(value) {
        this._channelId = value;
    }
    /**
     Shop identifier this cart belongs to.
     */
    get shopId() {
        return this._shopId;
    }
    /**
     Shop identifier this cart belongs to.
     */
    set shopId(value) {
        this._shopId = value;
    }
    /**
     userId field
     */
    get userId() {
        return this._userId;
    }
    /**
     userId field
     */
    set userId(value) {
        this._userId = value;
    }
    /**
     ContactId for this cart. Goes in combination with companyId
     */
    get contactId() {
        return this._contactId;
    }
    /**
     ContactId for this cart. Goes in combination with companyId
     */
    set contactId(value) {
        this._contactId = value;
    }
    /**
     CustomerId for this cart.
     */
    get customerId() {
        return this._customerId;
    }
    /**
     CustomerId for this cart.
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
     User's remarks for this cart.
     */
    get notes() {
        return this._notes;
    }
    /**
     User's remarks for this cart.
     */
    set notes(value) {
        this._notes = value;
    }
    /**
     User's reference for this cart.
     */
    get reference() {
        return this._reference;
    }
    /**
     User's reference for this cart.
     */
    set reference(value) {
        this._reference = value;
    }
    /**
     Additional information field that can be stored with a cart and order.
     */
    get extra3() {
        return this._extra3;
    }
    /**
     Additional information field that can be stored with a cart and order.
     */
    set extra3(value) {
        this._extra3 = value;
    }
    /**
     Additional information field that can be stored with a cart and order.
     */
    get extra4() {
        return this._extra4;
    }
    /**
     Additional information field that can be stored with a cart and order.
     */
    set extra4(value) {
        this._extra4 = value;
    }
    /**
     Status of the order after processing the cart. When order status is UNFINISHED, the cart is pending payment from PSP.
     */
    get orderStatus() {
        return this._orderStatus;
    }
    /**
     Status of the order after processing the cart. When order status is UNFINISHED, the cart is pending payment from PSP.
     */
    set orderStatus(value) {
        this._orderStatus = value;
    }
    /**
     Action code that is applied to this cart. Is only filled when a valid action code is applied
     */
    get actionCode() {
        return this._actionCode;
    }
    /**
     Action code that is applied to this cart. Is only filled when a valid action code is applied
     */
    set actionCode(value) {
        this._actionCode = value;
    }
    /**
     Array of voucher codes that are applied to this cart. Is only filled when a valid action is applied.
     */
    get vouchers() {
        return this._vouchers;
    }
    /**
     Array of voucher codes that are applied to this cart. Is only filled when a valid action is applied.
     */
    set vouchers(value) {
        this._vouchers = value;
    }
    /**
     Payment data for this cart.
     */
    get paymentData() {
        return this._paymentData;
    }
    /**
     Payment data for this cart.
     */
    set paymentData(value) {
        this._paymentData = value;
    }
    /**
     Postage data for this cart.
     */
    get postageData() {
        return this._postageData;
    }
    /**
     Postage data for this cart.
     */
    set postageData(value) {
        this._postageData = value;
    }
    /**
     Totals for this cart.
     */
    get total() {
        return this._total;
    }
    /**
     Totals for this cart.
     */
    set total(value) {
        this._total = value;
    }
    /**
     Cart's main items
     */
    get items() {
        return this._items;
    }
    /**
     Cart's main items
     */
    set items(value) {
        this._items = value;
    }
    /**
     Bonus items that are added to this cart through incentives.
     */
    get bonusItems() {
        return this._bonusItems;
    }
    /**
     Bonus items that are added to this cart through incentives.
     */
    set bonusItems(value) {
        this._bonusItems = value;
    }
    /**
     Items that are added to the Cart, but can't be ordered.
     */
    get unOrderableItems() {
        return this._unOrderableItems;
    }
    /**
     Items that are added to the Cart, but can't be ordered.
     */
    set unOrderableItems(value) {
        this._unOrderableItems = value;
    }
    /**
     Address the invoice for the order should be sent to.
     */
    get invoiceAddress() {
        return this._invoiceAddress;
    }
    /**
     Address the invoice for the order should be sent to.
     */
    set invoiceAddress(value) {
        this._invoiceAddress = value;
    }
    /**
     Address the order should be sent to.
     */
    get deliveryAddress() {
        return this._deliveryAddress;
    }
    /**
     Address the order should be sent to.
     */
    set deliveryAddress(value) {
        this._deliveryAddress = value;
    }
    /**
     Amount of tax that applies to this cart per tax code
     */
    get taxLevels() {
        return this._taxLevels;
    }
    /**
     Amount of tax that applies to this cart per tax code
     */
    set taxLevels(value) {
        this._taxLevels = value;
    }
    /**
     List of selectable paymethods for this cart and applied user.
     */
    get payMethods() {
        return this._payMethods;
    }
    /**
     List of selectable paymethods for this cart and applied user.
     */
    set payMethods(value) {
        this._payMethods = value;
    }
    /**
     List of selectable carriers for this cart.
     */
    get carriers() {
        return this._carriers;
    }
    /**
     List of selectable carriers for this cart.
     */
    set carriers(value) {
        this._carriers = value;
    }
    /**
     Date this cart has been created.
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Date this cart has been created.
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Date this cart has been last updated.
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Date this cart has been last updated.
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     User which created the cart.
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     User which created the cart.
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     User which last updated the cart.
     */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }
    /**
     User which last updated the cart.
     */
    set lastModifiedBy(value) {
        this._lastModifiedBy = value;
    }
    /**
     All incentives that apply to this cart.
     */
    get appliedIncentives() {
        return this._appliedIncentives;
    }
    /**
     All incentives that apply to this cart.
     */
    set appliedIncentives(value) {
        this._appliedIncentives = value;
    }
    /**
     Total amount of value-points that apply to this cart
     */
    get valuePoints() {
        return this._valuePoints;
    }
    /**
     Total amount of value-points that apply to this cart
     */
    set valuePoints(value) {
        this._valuePoints = value;
    }
    /**
     All shipping methods available for this cart.
     */
    get shippingMethods() {
        return this._shippingMethods;
    }
    /**
     All shipping methods available for this cart.
     */
    set shippingMethods(value) {
        this._shippingMethods = value;
    }
    /**
     Language of the order that will be created from this cart. Order confirmation email will be sent in that language.
     */
    get language() {
        return this._language;
    }
    /**
     Language of the order that will be created from this cart. Order confirmation email will be sent in that language.
     */
    set language(value) {
        this._language = value;
    }
    /**
     Indicates whether authorization is required to finalize the cart
     */
    get purchaseAuthorizationRequired() {
        return this._purchaseAuthorizationRequired;
    }
    /**
     Indicates whether authorization is required to finalize the cart
     */
    set purchaseAuthorizationRequired(value) {
        this._purchaseAuthorizationRequired = value;
    }
    /**
     Indicates cart status
     */
    get status() {
        return this._status;
    }
    /**
     Indicates cart status
     */
    set status(value) {
        this._status = value;
    }
    /**
     Cart User
     */
    get user() {
        return this._user;
    }
    /**
     Cart User
     */
    set user(value) {
        this._user = value;
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
}
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map
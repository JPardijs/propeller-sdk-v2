"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeBulkResponse = void 0;
/**
 Object class for AttributeBulkResponse
 */
class AttributeBulkResponse {
    /**
     Creates a new instance of AttributeBulkResponse
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._message = data.message;
        this._key = data.key;
        this._value = data.value;
        this._action = data.action;
        this._success = data.success;
        this._productId = data.productId;
        this._categoryId = data.categoryId;
        this._clusterId = data.clusterId;
        this._companyId = data.companyId;
        this._contactId = data.contactId;
        this._customerId = data.customerId;
    }
    /**
     ID of the created or updated attribute description
     */
    get id() {
        return this._id;
    }
    /**
     ID of the created or updated attribute description
     */
    set id(value) {
        this._id = value;
    }
    /**
     Name of the created or updated attribute description
     */
    get name() {
        return this._name;
    }
    /**
     Name of the created or updated attribute description
     */
    set name(value) {
        this._name = value;
    }
    /**
     Success or error message
     */
    get message() {
        return this._message;
    }
    /**
     Success or error message
     */
    set message(value) {
        this._message = value;
    }
    /**
     Name of the attribute description the attribute is created for
     */
    get key() {
        return this._key;
    }
    /**
     Name of the attribute description the attribute is created for
     */
    set key(value) {
        this._key = value;
    }
    /**
     The value for this attribute
     */
    get value() {
        return this._value;
    }
    /**
     The value for this attribute
     */
    set value(value) {
        this._value = value;
    }
    /**
     Action performed on the attribute description
     */
    get action() {
        return this._action;
    }
    /**
     Action performed on the attribute description
     */
    set action(value) {
        this._action = value;
    }
    /**
     Whether the action was successful or not
     */
    get success() {
        return this._success;
    }
    /**
     Whether the action was successful or not
     */
    set success(value) {
        this._success = value;
    }
    /**
     The productId of the attribute value
     */
    get productId() {
        return this._productId;
    }
    /**
     The productId of the attribute value
     */
    set productId(value) {
        this._productId = value;
    }
    /**
     The categoryId of the attribute value
     */
    get categoryId() {
        return this._categoryId;
    }
    /**
     The categoryId of the attribute value
     */
    set categoryId(value) {
        this._categoryId = value;
    }
    /**
     The clusterId of the attribute value
     */
    get clusterId() {
        return this._clusterId;
    }
    /**
     The clusterId of the attribute value
     */
    set clusterId(value) {
        this._clusterId = value;
    }
    /**
     The companyId of the attribute value
     */
    get companyId() {
        return this._companyId;
    }
    /**
     The companyId of the attribute value
     */
    set companyId(value) {
        this._companyId = value;
    }
    /**
     The contactId of the attribute value
     */
    get contactId() {
        return this._contactId;
    }
    /**
     The contactId of the attribute value
     */
    set contactId(value) {
        this._contactId = value;
    }
    /**
     The customerId of the attribute value
     */
    get customerId() {
        return this._customerId;
    }
    /**
     The customerId of the attribute value
     */
    set customerId(value) {
        this._customerId = value;
    }
}
exports.AttributeBulkResponse = AttributeBulkResponse;
//# sourceMappingURL=AttributeBulkResponse.js.map
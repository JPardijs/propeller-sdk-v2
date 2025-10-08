"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
/**
 Object class for OrderStatus
 */
class OrderStatus {
    /**
     Creates a new instance of OrderStatus
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._code = data.code;
        this._type = data.type;
        this._orderType = data.orderType;
        this._description = data.description;
        this._priority = data.priority;
        this._isDefault = data.isDefault;
        this._isPublic = data.isPublic;
        this._isEditable = data.isEditable;
        this._isDeletable = data.isDeletable;
        this._isExportable = data.isExportable;
        this._isConfirmable = data.isConfirmable;
        this._isArchivable = data.isArchivable;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._statusSet = data.statusSet;
        this._nextStatuses = data.nextStatuses;
        this._previousStatuses = data.previousStatuses;
    }
    /**
     The primary order status identifier
     */
    get id() {
        return this._id;
    }
    /**
     The primary order status identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     The order status name
     */
    get name() {
        return this._name;
    }
    /**
     The order status name
     */
    set name(value) {
        this._name = value;
    }
    /**
     The order status code value
     */
    get code() {
        return this._code;
    }
    /**
     The order status code value
     */
    set code(value) {
        this._code = value;
    }
    /**
     The order status type
     */
    get type() {
        return this._type;
    }
    /**
     The order status type
     */
    set type(value) {
        this._type = value;
    }
    /**
     The order status for order type
     */
    get orderType() {
        return this._orderType;
    }
    /**
     The order status for order type
     */
    set orderType(value) {
        this._orderType = value;
    }
    /**
     The order status description
     */
    get description() {
        return this._description;
    }
    /**
     The order status description
     */
    set description(value) {
        this._description = value;
    }
    /**
     The order status priority
     */
    get priority() {
        return this._priority;
    }
    /**
     The order status priority
     */
    set priority(value) {
        this._priority = value;
    }
    /**
     Marks if the order status is default
     */
    get isDefault() {
        return this._isDefault;
    }
    /**
     Marks if the order status is default
     */
    set isDefault(value) {
        this._isDefault = value;
    }
    /**
     Marks if the order is public
     */
    get isPublic() {
        return this._isPublic;
    }
    /**
     Marks if the order is public
     */
    set isPublic(value) {
        this._isPublic = value;
    }
    /**
     Marks if the order is editable
     */
    get isEditable() {
        return this._isEditable;
    }
    /**
     Marks if the order is editable
     */
    set isEditable(value) {
        this._isEditable = value;
    }
    /**
     Marks if the order is deletable
     */
    get isDeletable() {
        return this._isDeletable;
    }
    /**
     Marks if the order is deletable
     */
    set isDeletable(value) {
        this._isDeletable = value;
    }
    /**
     Marks if the order is exportable
     */
    get isExportable() {
        return this._isExportable;
    }
    /**
     Marks if the order is exportable
     */
    set isExportable(value) {
        this._isExportable = value;
    }
    /**
     Marks if the order is confirmable
     */
    get isConfirmable() {
        return this._isConfirmable;
    }
    /**
     Marks if the order is confirmable
     */
    set isConfirmable(value) {
        this._isConfirmable = value;
    }
    /**
     Marks if the order can be archived
     */
    get isArchivable() {
        return this._isArchivable;
    }
    /**
     Marks if the order can be archived
     */
    set isArchivable(value) {
        this._isArchivable = value;
    }
    /**
     The order status creation date
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     The order status creation date
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     The order status last modification date
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     The order status last modification date
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     The order status set the current status belongs to
     */
    get statusSet() {
        return this._statusSet;
    }
    /**
     The order status set the current status belongs to
     */
    set statusSet(value) {
        this._statusSet = value;
    }
    /**
     nextStatuses field
     */
    get nextStatuses() {
        return this._nextStatuses;
    }
    /**
     nextStatuses field
     */
    set nextStatuses(value) {
        this._nextStatuses = value;
    }
    /**
     previousStatuses field
     */
    get previousStatuses() {
        return this._previousStatuses;
    }
    /**
     previousStatuses field
     */
    set previousStatuses(value) {
        this._previousStatuses = value;
    }
}
exports.OrderStatus = OrderStatus;
//# sourceMappingURL=OrderStatus.js.map
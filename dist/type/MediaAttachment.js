"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaAttachment = void 0;
/**
 Object class for MediaAttachment
 */
class MediaAttachment {
    /**
     Creates a new instance of MediaAttachment
     */
    constructor(data = {}) {
        this._id = data.id;
        this._sparePartsMachineId = data.sparePartsMachineId;
        this._alt = data.alt;
        this._description = data.description;
        this._tags = data.tags;
        this._type = data.type;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._priority = data.priority;
        this._attachments = data.attachments;
        this._orderId = data.orderId;
        this._companyId = data.companyId;
        this._customerId = data.customerId;
    }
    /**
     Media global unique identifier
     */
    get id() {
        return this._id;
    }
    /**
     Media global unique identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Unique sparePartsMachine identifier that the media relates to
     */
    get sparePartsMachineId() {
        return this._sparePartsMachineId;
    }
    /**
     Unique sparePartsMachine identifier that the media relates to
     */
    set sparePartsMachineId(value) {
        this._sparePartsMachineId = value;
    }
    /**
     Media alt description that briefly explains the contents of the document.
     */
    get alt() {
        return this._alt;
    }
    /**
     Media alt description that briefly explains the contents of the document.
     */
    set alt(value) {
        this._alt = value;
    }
    /**
     Media short description.
     */
    get description() {
        return this._description;
    }
    /**
     Media short description.
     */
    set description(value) {
        this._description = value;
    }
    /**
     Media tags.
     */
    get tags() {
        return this._tags;
    }
    /**
     Media tags.
     */
    set tags(value) {
        this._tags = value;
    }
    /**
     Media type
     */
    get type() {
        return this._type;
    }
    /**
     Media type
     */
    set type(value) {
        this._type = value;
    }
    /**
     The date and time (ISO 8601 format) when the media was created.
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     The date and time (ISO 8601 format) when the media was created.
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     The date and time (ISO 8601 format) when the media was last modified.
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     The date and time (ISO 8601 format) when the media was last modified.
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     Media display priority [Lower value has higher priority] -  default: 1000
     */
    get priority() {
        return this._priority;
    }
    /**
     Media display priority [Lower value has higher priority] -  default: 1000
     */
    set priority(value) {
        this._priority = value;
    }
    /**
     List of attachment objects
     */
    get attachments() {
        return this._attachments;
    }
    /**
     List of attachment objects
     */
    set attachments(value) {
        this._attachments = value;
    }
    /**
     Unique order identifier that the attachment relates to. [Cannot use it together with sparePartsMachineId]
     */
    get orderId() {
        return this._orderId;
    }
    /**
     Unique order identifier that the attachment relates to. [Cannot use it together with sparePartsMachineId]
     */
    set orderId(value) {
        this._orderId = value;
    }
    /**
     Unique company identifier that the attachment relates to. [Cannot use it together with customerId]
     */
    get companyId() {
        return this._companyId;
    }
    /**
     Unique company identifier that the attachment relates to. [Cannot use it together with customerId]
     */
    set companyId(value) {
        this._companyId = value;
    }
    /**
     Unique customer identifier that the attachment relates to. [Cannot use it together with companyId]
     */
    get customerId() {
        return this._customerId;
    }
    /**
     Unique customer identifier that the attachment relates to. [Cannot use it together with companyId]
     */
    set customerId(value) {
        this._customerId = value;
    }
}
exports.MediaAttachment = MediaAttachment;
//# sourceMappingURL=MediaAttachment.js.map
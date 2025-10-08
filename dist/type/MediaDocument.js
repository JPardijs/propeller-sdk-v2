"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaDocument = void 0;
/**
 Object class for MediaDocument
 */
class MediaDocument {
    /**
     Creates a new instance of MediaDocument
     */
    constructor(data = {}) {
        this._id = data.id;
        this._productId = data.productId;
        this._clusterId = data.clusterId;
        this._categoryId = data.categoryId;
        this._sparePartsMachineId = data.sparePartsMachineId;
        this._alt = data.alt;
        this._description = data.description;
        this._tags = data.tags;
        this._type = data.type;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._priority = data.priority;
        this._documents = data.documents;
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
     Unique product identifier that the media relates to
     */
    get productId() {
        return this._productId;
    }
    /**
     Unique product identifier that the media relates to
     */
    set productId(value) {
        this._productId = value;
    }
    /**
     Unique cluster identifier that the media relates to
     */
    get clusterId() {
        return this._clusterId;
    }
    /**
     Unique cluster identifier that the media relates to
     */
    set clusterId(value) {
        this._clusterId = value;
    }
    /**
     Unique category identifier that the media relates to
     */
    get categoryId() {
        return this._categoryId;
    }
    /**
     Unique category identifier that the media relates to
     */
    set categoryId(value) {
        this._categoryId = value;
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
     List of document objects
     */
    get documents() {
        return this._documents;
    }
    /**
     List of document objects
     */
    set documents(value) {
        this._documents = value;
    }
}
exports.MediaDocument = MediaDocument;
//# sourceMappingURL=MediaDocument.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparePartsMachineMedia = void 0;
/**
 Object class for SparePartsMachineMedia
 */
class SparePartsMachineMedia {
    /**
     Creates a new instance of SparePartsMachineMedia
     */
    constructor(data = {}) {
        this._images = data.images;
        this._videos = data.videos;
        this._documents = data.documents;
        this._attachments = data.attachments;
    }
    /**
     Media images
     */
    get images() {
        return this._images;
    }
    /**
     Media images
     */
    set images(value) {
        this._images = value;
    }
    /**
     Media videos
     */
    get videos() {
        return this._videos;
    }
    /**
     Media videos
     */
    set videos(value) {
        this._videos = value;
    }
    /**
     Media documents
     */
    get documents() {
        return this._documents;
    }
    /**
     Media documents
     */
    set documents(value) {
        this._documents = value;
    }
    /**
     Media attachments
     */
    get attachments() {
        return this._attachments;
    }
    /**
     Media attachments
     */
    set attachments(value) {
        this._attachments = value;
    }
}
exports.SparePartsMachineMedia = SparePartsMachineMedia;
//# sourceMappingURL=SparePartsMachineMedia.js.map
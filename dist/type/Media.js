"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
/**
 Object class for Media
 */
class Media {
    /**
     Creates a new instance of Media
     */
    constructor(data = {}) {
        this._image = data.image;
        this._images = data.images;
        this._video = data.video;
        this._videos = data.videos;
        this._document = data.document;
        this._documents = data.documents;
        this._attachment = data.attachment;
        this._attachments = data.attachments;
    }
    /**
     Media image
     */
    get image() {
        return this._image;
    }
    /**
     Media image
     */
    set image(value) {
        this._image = value;
    }
    /**
     List of media images
     */
    get images() {
        return this._images;
    }
    /**
     List of media images
     */
    set images(value) {
        this._images = value;
    }
    /**
     Media video
     */
    get video() {
        return this._video;
    }
    /**
     Media video
     */
    set video(value) {
        this._video = value;
    }
    /**
     List of media videos
     */
    get videos() {
        return this._videos;
    }
    /**
     List of media videos
     */
    set videos(value) {
        this._videos = value;
    }
    /**
     Media document
     */
    get document() {
        return this._document;
    }
    /**
     Media document
     */
    set document(value) {
        this._document = value;
    }
    /**
     List of media documents
     */
    get documents() {
        return this._documents;
    }
    /**
     List of media documents
     */
    set documents(value) {
        this._documents = value;
    }
    /**
     attachment field
     */
    get attachment() {
        return this._attachment;
    }
    /**
     attachment field
     */
    set attachment(value) {
        this._attachment = value;
    }
    /**
     attachments field
     */
    get attachments() {
        return this._attachments;
    }
    /**
     attachments field
     */
    set attachments(value) {
        this._attachments = value;
    }
}
exports.Media = Media;
//# sourceMappingURL=Media.js.map
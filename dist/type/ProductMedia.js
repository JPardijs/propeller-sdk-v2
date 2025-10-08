"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMedia = void 0;
/**
 Object class for ProductMedia
 */
class ProductMedia {
    /**
     Creates a new instance of ProductMedia
     */
    constructor(data = {}) {
        this._images = data.images;
        this._videos = data.videos;
        this._documents = data.documents;
    }
    /**
     Product media images
     */
    get images() {
        return this._images;
    }
    /**
     Product media images
     */
    set images(value) {
        this._images = value;
    }
    /**
     Product media videos
     */
    get videos() {
        return this._videos;
    }
    /**
     Product media videos
     */
    set videos(value) {
        this._videos = value;
    }
    /**
     Product media documents
     */
    get documents() {
        return this._documents;
    }
    /**
     Product media documents
     */
    set documents(value) {
        this._documents = value;
    }
}
exports.ProductMedia = ProductMedia;
//# sourceMappingURL=ProductMedia.js.map
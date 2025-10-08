"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMedia = void 0;
/**
 Object class for OrderMedia
 */
class OrderMedia {
    /**
     Creates a new instance of OrderMedia
     */
    constructor(data = {}) {
        this._attachments = data.attachments;
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
exports.OrderMedia = OrderMedia;
//# sourceMappingURL=OrderMedia.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMediaAttachmentResponse = void 0;
/**
 Object class for DeleteMediaAttachmentResponse
 */
class DeleteMediaAttachmentResponse {
    /**
     Creates a new instance of DeleteMediaAttachmentResponse
     */
    constructor(data = {}) {
        this._mediaId = data.mediaId;
    }
    /**
     Media id of the deleted attachment
     */
    get mediaId() {
        return this._mediaId;
    }
    /**
     Media id of the deleted attachment
     */
    set mediaId(value) {
        this._mediaId = value;
    }
}
exports.DeleteMediaAttachmentResponse = DeleteMediaAttachmentResponse;
//# sourceMappingURL=DeleteMediaAttachmentResponse.js.map
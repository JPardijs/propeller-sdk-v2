"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMediaDocumentResponse = void 0;
/**
 Object class for DeleteMediaDocumentResponse
 */
class DeleteMediaDocumentResponse {
    /**
     Creates a new instance of DeleteMediaDocumentResponse
     */
    constructor(data = {}) {
        this._mediaId = data.mediaId;
    }
    /**
     Media id of the deleted document
     */
    get mediaId() {
        return this._mediaId;
    }
    /**
     Media id of the deleted document
     */
    set mediaId(value) {
        this._mediaId = value;
    }
}
exports.DeleteMediaDocumentResponse = DeleteMediaDocumentResponse;
//# sourceMappingURL=DeleteMediaDocumentResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMediaImageResponse = void 0;
/**
 Object class for DeleteMediaImageResponse
 */
class DeleteMediaImageResponse {
    /**
     Creates a new instance of DeleteMediaImageResponse
     */
    constructor(data = {}) {
        this._mediaId = data.mediaId;
    }
    /**
     Media id of the deleted image
     */
    get mediaId() {
        return this._mediaId;
    }
    /**
     Media id of the deleted image
     */
    set mediaId(value) {
        this._mediaId = value;
    }
}
exports.DeleteMediaImageResponse = DeleteMediaImageResponse;
//# sourceMappingURL=DeleteMediaImageResponse.js.map
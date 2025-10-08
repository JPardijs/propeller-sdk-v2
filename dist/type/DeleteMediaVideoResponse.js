"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMediaVideoResponse = void 0;
/**
 Object class for DeleteMediaVideoResponse
 */
class DeleteMediaVideoResponse {
    /**
     Creates a new instance of DeleteMediaVideoResponse
     */
    constructor(data = {}) {
        this._mediaId = data.mediaId;
    }
    /**
     Media id of the deleted video
     */
    get mediaId() {
        return this._mediaId;
    }
    /**
     Media id of the deleted video
     */
    set mediaId(value) {
        this._mediaId = value;
    }
}
exports.DeleteMediaVideoResponse = DeleteMediaVideoResponse;
//# sourceMappingURL=DeleteMediaVideoResponse.js.map
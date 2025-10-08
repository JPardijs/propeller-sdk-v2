"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishEmailEventResponse = void 0;
/**
 Object class for PublishEmailEventResponse
 */
class PublishEmailEventResponse {
    /**
     Creates a new instance of PublishEmailEventResponse
     */
    constructor(data = {}) {
        this._success = data.success;
        this._messageId = data.messageId;
    }
    /**
     Did the publish event succeed?
     */
    get success() {
        return this._success;
    }
    /**
     Did the publish event succeed?
     */
    set success(value) {
        this._success = value;
    }
    /**
     The  Google Pub/Sub message id
     */
    get messageId() {
        return this._messageId;
    }
    /**
     The  Google Pub/Sub message id
     */
    set messageId(value) {
        this._messageId = value;
    }
}
exports.PublishEmailEventResponse = PublishEmailEventResponse;
//# sourceMappingURL=PublishEmailEventResponse.js.map
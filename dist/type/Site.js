"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Site = void 0;
/**
 Object class for Site
 */
class Site {
    /**
     Creates a new instance of Site
     */
    constructor(data = {}) {
        this._id = data.id;
        this._url = data.url;
        this._alternartiveUrl = data.alternartiveUrl;
        this._mobileUrl = data.mobileUrl;
        this._fileUrl = data.fileUrl;
        this._anonymousUserId = data.anonymousUserId;
    }
    /**
     id field
     */
    get id() {
        return this._id;
    }
    /**
     id field
     */
    set id(value) {
        this._id = value;
    }
    /**
     url field
     */
    get url() {
        return this._url;
    }
    /**
     url field
     */
    set url(value) {
        this._url = value;
    }
    /**
     alternartiveUrl field
     */
    get alternartiveUrl() {
        return this._alternartiveUrl;
    }
    /**
     alternartiveUrl field
     */
    set alternartiveUrl(value) {
        this._alternartiveUrl = value;
    }
    /**
     mobileUrl field
     */
    get mobileUrl() {
        return this._mobileUrl;
    }
    /**
     mobileUrl field
     */
    set mobileUrl(value) {
        this._mobileUrl = value;
    }
    /**
     fileUrl field
     */
    get fileUrl() {
        return this._fileUrl;
    }
    /**
     fileUrl field
     */
    set fileUrl(value) {
        this._fileUrl = value;
    }
    /**
     anonymousUserId field
     */
    get anonymousUserId() {
        return this._anonymousUserId;
    }
    /**
     anonymousUserId field
     */
    set anonymousUserId(value) {
        this._anonymousUserId = value;
    }
}
exports.Site = Site;
//# sourceMappingURL=Site.js.map
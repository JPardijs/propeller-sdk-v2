"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
/**
 Object class for Channel
 */
class Channel {
    /**
     Creates a new instance of Channel
     */
    constructor(data = {}) {
        this._channelId = data.channelId;
        this._id = data.id;
        this._name = data.name;
        this._catalogRootId = data.catalogRootId;
        this._defaultLetterId = data.defaultLetterId;
        this._anonymousUserId = data.anonymousUserId;
        this._shop = data.shop;
    }
    /**
     channelId field
     */
    get channelId() {
        return this._channelId;
    }
    /**
     channelId field
     */
    set channelId(value) {
        this._channelId = value;
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
     name field
     */
    get name() {
        return this._name;
    }
    /**
     name field
     */
    set name(value) {
        this._name = value;
    }
    /**
     Catalog root id
     */
    get catalogRootId() {
        return this._catalogRootId;
    }
    /**
     Catalog root id
     */
    set catalogRootId(value) {
        this._catalogRootId = value;
    }
    /**
     Channel default letter id
     */
    get defaultLetterId() {
        return this._defaultLetterId;
    }
    /**
     Channel default letter id
     */
    set defaultLetterId(value) {
        this._defaultLetterId = value;
    }
    /**
     Channel anonymous user id
     */
    get anonymousUserId() {
        return this._anonymousUserId;
    }
    /**
     Channel anonymous user id
     */
    set anonymousUserId(value) {
        this._anonymousUserId = value;
    }
    /**
     shop field
     */
    get shop() {
        return this._shop;
    }
    /**
     shop field
     */
    set shop(value) {
        this._shop = value;
    }
}
exports.Channel = Channel;
//# sourceMappingURL=Channel.js.map
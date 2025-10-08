"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCIPProviderData = void 0;
/**
 Object class for GCIPProviderData
 */
class GCIPProviderData {
    /**
     Creates a new instance of GCIPProviderData
     */
    constructor(data = {}) {
        this._uid = data.uid;
        this._providerId = data.providerId;
        this._displayName = data.displayName;
        this._photoUrl = data.photoUrl;
        this._federatedId = data.federatedId;
        this._email = data.email;
        this._rawId = data.rawId;
        this._screenName = data.screenName;
        this._phoneNumber = data.phoneNumber;
    }
    /**
     uid field
     */
    get uid() {
        return this._uid;
    }
    /**
     uid field
     */
    set uid(value) {
        this._uid = value;
    }
    /**
     providerId field
     */
    get providerId() {
        return this._providerId;
    }
    /**
     providerId field
     */
    set providerId(value) {
        this._providerId = value;
    }
    /**
     displayName field
     */
    get displayName() {
        return this._displayName;
    }
    /**
     displayName field
     */
    set displayName(value) {
        this._displayName = value;
    }
    /**
     photoUrl field
     */
    get photoUrl() {
        return this._photoUrl;
    }
    /**
     photoUrl field
     */
    set photoUrl(value) {
        this._photoUrl = value;
    }
    /**
     federatedId field
     */
    get federatedId() {
        return this._federatedId;
    }
    /**
     federatedId field
     */
    set federatedId(value) {
        this._federatedId = value;
    }
    /**
     email field
     */
    get email() {
        return this._email;
    }
    /**
     email field
     */
    set email(value) {
        this._email = value;
    }
    /**
     rawId field
     */
    get rawId() {
        return this._rawId;
    }
    /**
     rawId field
     */
    set rawId(value) {
        this._rawId = value;
    }
    /**
     screenName field
     */
    get screenName() {
        return this._screenName;
    }
    /**
     screenName field
     */
    set screenName(value) {
        this._screenName = value;
    }
    /**
     phoneNumber field
     */
    get phoneNumber() {
        return this._phoneNumber;
    }
    /**
     phoneNumber field
     */
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
}
exports.GCIPProviderData = GCIPProviderData;
//# sourceMappingURL=GCIPProviderData.js.map
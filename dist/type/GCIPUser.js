"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCIPUser = void 0;
/**
 Google Cloud Identity Platform User
 */
class GCIPUser {
    /**
     Creates a new instance of GCIPUser
     */
    constructor(data = {}) {
        this._uid = data.uid;
        this._email = data.email;
        this._emailVerified = data.emailVerified;
        this._displayName = data.displayName;
        this._photoUrl = data.photoUrl;
        this._phoneNumber = data.phoneNumber;
        this._disabled = data.disabled;
        this._isAnonymous = data.isAnonymous;
        this._metadata = data.metadata;
        this._tokensValidAfterTime = data.tokensValidAfterTime;
        this._tenantId = data.tenantId;
        this._providerData = data.providerData;
        this._passwordHash = data.passwordHash;
        this._passwordSalt = data.passwordSalt;
        this._authDomain = data.authDomain;
        this._lastLoginAt = data.lastLoginAt;
        this._createdAt = data.createdAt;
        this._accessToken = data.accessToken;
        this._refreshToken = data.refreshToken;
        this._expirationTime = data.expirationTime;
        this._multiFactor = data.multiFactor;
    }
    /**
     Unique identifier for the user, either supplied by user creation or generated
     */
    get uid() {
        return this._uid;
    }
    /**
     Unique identifier for the user, either supplied by user creation or generated
     */
    set uid(value) {
        this._uid = value;
    }
    /**
     The email address of the user
     */
    get email() {
        return this._email;
    }
    /**
     The email address of the user
     */
    set email(value) {
        this._email = value;
    }
    /**
     Flags whether the email address has been verified by the user
     */
    get emailVerified() {
        return this._emailVerified;
    }
    /**
     Flags whether the email address has been verified by the user
     */
    set emailVerified(value) {
        this._emailVerified = value;
    }
    /**
     The display name of the user
     */
    get displayName() {
        return this._displayName;
    }
    /**
     The display name of the user
     */
    set displayName(value) {
        this._displayName = value;
    }
    /**
     The user's photo URL
     */
    get photoUrl() {
        return this._photoUrl;
    }
    /**
     The user's photo URL
     */
    set photoUrl(value) {
        this._photoUrl = value;
    }
    /**
     The phone number of the user
     */
    get phoneNumber() {
        return this._phoneNumber;
    }
    /**
     The phone number of the user
     */
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    /**
     Flags whether the user had been disabled
     */
    get disabled() {
        return this._disabled;
    }
    /**
     Flags whether the user had been disabled
     */
    set disabled(value) {
        this._disabled = value;
    }
    /**
     Flags whether the user is an anonymous user
     */
    get isAnonymous() {
        return this._isAnonymous;
    }
    /**
     Flags whether the user is an anonymous user
     */
    set isAnonymous(value) {
        this._isAnonymous = value;
    }
    /**
     Metadata associated with the user
     */
    get metadata() {
        return this._metadata;
    }
    /**
     Metadata associated with the user
     */
    set metadata(value) {
        this._metadata = value;
    }
    /**
     tokensValidAfterTime field
     */
    get tokensValidAfterTime() {
        return this._tokensValidAfterTime;
    }
    /**
     tokensValidAfterTime field
     */
    set tokensValidAfterTime(value) {
        this._tokensValidAfterTime = value;
    }
    /**
     The tenant ID associated with the user
     */
    get tenantId() {
        return this._tenantId;
    }
    /**
     The tenant ID associated with the user
     */
    set tenantId(value) {
        this._tenantId = value;
    }
    /**
     The providers associated with the user
     */
    get providerData() {
        return this._providerData;
    }
    /**
     The providers associated with the user
     */
    set providerData(value) {
        this._providerData = value;
    }
    /**
     The password hash associated with the user
     */
    get passwordHash() {
        return this._passwordHash;
    }
    /**
     The password hash associated with the user
     */
    set passwordHash(value) {
        this._passwordHash = value;
    }
    /**
     The password salt associated with the user
     */
    get passwordSalt() {
        return this._passwordSalt;
    }
    /**
     The password salt associated with the user
     */
    set passwordSalt(value) {
        this._passwordSalt = value;
    }
    /**
     The user's authentication domain
     */
    get authDomain() {
        return this._authDomain;
    }
    /**
     The user's authentication domain
     */
    set authDomain(value) {
        this._authDomain = value;
    }
    /**
     The last time the user logged in
     */
    get lastLoginAt() {
        return this._lastLoginAt;
    }
    /**
     The last time the user logged in
     */
    set lastLoginAt(value) {
        this._lastLoginAt = value;
    }
    /**
     The creation time of the user
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     The creation time of the user
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Access token for the user
     */
    get accessToken() {
        return this._accessToken;
    }
    /**
     Access token for the user
     */
    set accessToken(value) {
        this._accessToken = value;
    }
    /**
     Refresh token for the user
     */
    get refreshToken() {
        return this._refreshToken;
    }
    /**
     Refresh token for the user
     */
    set refreshToken(value) {
        this._refreshToken = value;
    }
    /**
     The expiration time of the access token
     */
    get expirationTime() {
        return this._expirationTime;
    }
    /**
     The expiration time of the access token
     */
    set expirationTime(value) {
        this._expirationTime = value;
    }
    /**
     Multi-factor authentication details for the user
     */
    get multiFactor() {
        return this._multiFactor;
    }
    /**
     Multi-factor authentication details for the user
     */
    set multiFactor(value) {
        this._multiFactor = value;
    }
}
exports.GCIPUser = GCIPUser;
//# sourceMappingURL=GCIPUser.js.map
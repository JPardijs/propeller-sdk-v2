"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenResponse = void 0;
/**
 Object class for RefreshTokenResponse
 */
class RefreshTokenResponse {
    /**
     Creates a new instance of RefreshTokenResponse
     */
    constructor(data = {}) {
        this._access_token = data.access_token;
        this._refresh_token = data.refresh_token;
        this._expires_in = data.expires_in;
        this._token_type = data.token_type;
        this._user_id = data.user_id;
    }
    /**
     access_token field
     */
    get access_token() {
        return this._access_token;
    }
    /**
     access_token field
     */
    set access_token(value) {
        this._access_token = value;
    }
    /**
     refresh_token field
     */
    get refresh_token() {
        return this._refresh_token;
    }
    /**
     refresh_token field
     */
    set refresh_token(value) {
        this._refresh_token = value;
    }
    /**
     expires_in field
     */
    get expires_in() {
        return this._expires_in;
    }
    /**
     expires_in field
     */
    set expires_in(value) {
        this._expires_in = value;
    }
    /**
     token_type field
     */
    get token_type() {
        return this._token_type;
    }
    /**
     token_type field
     */
    set token_type(value) {
        this._token_type = value;
    }
    /**
     user_id field
     */
    get user_id() {
        return this._user_id;
    }
    /**
     user_id field
     */
    set user_id(value) {
        this._user_id = value;
    }
}
exports.RefreshTokenResponse = RefreshTokenResponse;
//# sourceMappingURL=RefreshTokenResponse.js.map
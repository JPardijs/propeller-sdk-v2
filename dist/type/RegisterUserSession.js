"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserSession = void 0;
/**
 Object class for RegisterUserSession
 */
class RegisterUserSession {
    /**
     Creates a new instance of RegisterUserSession
     */
    constructor(data = {}) {
        this._accessToken = data.accessToken;
        this._refreshToken = data.refreshToken;
        this._expirationTime = data.expirationTime;
    }
    /**
     JWT Bearer access token
     */
    get accessToken() {
        return this._accessToken;
    }
    /**
     JWT Bearer access token
     */
    set accessToken(value) {
        this._accessToken = value;
    }
    /**
     Refresh token
     */
    get refreshToken() {
        return this._refreshToken;
    }
    /**
     Refresh token
     */
    set refreshToken(value) {
        this._refreshToken = value;
    }
    /**
     Expiration time
     */
    get expirationTime() {
        return this._expirationTime;
    }
    /**
     Expiration time
     */
    set expirationTime(value) {
        this._expirationTime = value;
    }
}
exports.RegisterUserSession = RegisterUserSession;
//# sourceMappingURL=RegisterUserSession.js.map
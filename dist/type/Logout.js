"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = void 0;
/**
 Object class for Logout
 */
class Logout {
    /**
     Creates a new instance of Logout
     */
    constructor(data = {}) {
        this._todo = data.todo;
    }
    /**
     todo field
     */
    get todo() {
        return this._todo;
    }
    /**
     todo field
     */
    set todo(value) {
        this._todo = value;
    }
}
exports.Logout = Logout;
//# sourceMappingURL=Logout.js.map
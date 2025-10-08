"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiFactor = void 0;
/**
 Object class for MultiFactor
 */
class MultiFactor {
    /**
     Creates a new instance of MultiFactor
     */
    constructor(data = {}) {
        this._enrolledFactors = data.enrolledFactors;
    }
    /**
     The factors enrolled for the user
     */
    get enrolledFactors() {
        return this._enrolledFactors;
    }
    /**
     The factors enrolled for the user
     */
    set enrolledFactors(value) {
        this._enrolledFactors = value;
    }
}
exports.MultiFactor = MultiFactor;
//# sourceMappingURL=MultiFactor.js.map
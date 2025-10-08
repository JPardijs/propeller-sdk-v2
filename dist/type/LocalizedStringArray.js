"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedStringArray = void 0;
/**
 A multivalue string representation of a type Field that is suitable for Localization
 */
class LocalizedStringArray {
    /**
     Creates a new instance of LocalizedStringArray
     */
    constructor(data = {}) {
        this._language = data.language;
        this._values = data.values;
    }
    /**
     Language is set as 2 character country code.
     */
    get language() {
        return this._language;
    }
    /**
     Language is set as 2 character country code.
     */
    set language(value) {
        this._language = value;
    }
    /**
     List of localized string values
     */
    get values() {
        return this._values;
    }
    /**
     List of localized string values
     */
    set values(value) {
        this._values = value;
    }
}
exports.LocalizedStringArray = LocalizedStringArray;
//# sourceMappingURL=LocalizedStringArray.js.map
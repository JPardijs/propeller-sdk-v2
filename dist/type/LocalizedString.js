"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedString = void 0;
/**
 A String representation of a type Field that is suitable for Localization
 */
class LocalizedString {
    /**
     Creates a new instance of LocalizedString
     */
    constructor(data = {}) {
        this._language = data.language;
        this._value = data.value;
    }
    /**
     Localized field language code
     */
    get language() {
        return this._language;
    }
    /**
     Localized field language code
     */
    set language(value) {
        this._language = value;
    }
    /**
     Localized field value
     */
    get value() {
        return this._value;
    }
    /**
     Localized field value
     */
    set value(value) {
        this._value = value;
    }
}
exports.LocalizedString = LocalizedString;
//# sourceMappingURL=LocalizedString.js.map
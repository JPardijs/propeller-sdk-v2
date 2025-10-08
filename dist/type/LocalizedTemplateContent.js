"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedTemplateContent = void 0;
/**
 Object class for LocalizedTemplateContent
 */
class LocalizedTemplateContent {
    /**
     Creates a new instance of LocalizedTemplateContent
     */
    constructor(data = {}) {
        this._language = data.language;
        this._content = data.content;
        this._precompiled = data.precompiled;
    }
    /**
     The language code
     */
    get language() {
        return this._language;
    }
    /**
     The language code
     */
    set language(value) {
        this._language = value;
    }
    /**
     Contents of the handlebars template file
     */
    get content() {
        return this._content;
    }
    /**
     Contents of the handlebars template file
     */
    set content(value) {
        this._content = value;
    }
    /**
     Contents of the the precompiled handlebars template file
     */
    get precompiled() {
        return this._precompiled;
    }
    /**
     Contents of the the precompiled handlebars template file
     */
    set precompiled(value) {
        this._precompiled = value;
    }
}
exports.LocalizedTemplateContent = LocalizedTemplateContent;
//# sourceMappingURL=LocalizedTemplateContent.js.map
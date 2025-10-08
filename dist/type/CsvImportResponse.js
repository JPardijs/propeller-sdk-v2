"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvImportResponse = void 0;
/**
 Object class for CsvImportResponse
 */
class CsvImportResponse {
    /**
     Creates a new instance of CsvImportResponse
     */
    constructor(data = {}) {
        this._importedCount = data.importedCount;
        this._errors = data.errors;
    }
    /**
     importedCount field
     */
    get importedCount() {
        return this._importedCount;
    }
    /**
     importedCount field
     */
    set importedCount(value) {
        this._importedCount = value;
    }
    /**
     errors field
     */
    get errors() {
        return this._errors;
    }
    /**
     errors field
     */
    set errors(value) {
        this._errors = value;
    }
}
exports.CsvImportResponse = CsvImportResponse;
//# sourceMappingURL=CsvImportResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvRecordError = void 0;
/**
 Object class for CsvRecordError
 */
class CsvRecordError {
    /**
     Creates a new instance of CsvRecordError
     */
    constructor(data = {}) {
        this._code = data.code;
        this._messages = data.messages;
        this._record = data.record;
        this._rowNumber = data.rowNumber;
    }
    /**
     code field
     */
    get code() {
        return this._code;
    }
    /**
     code field
     */
    set code(value) {
        this._code = value;
    }
    /**
     messages field
     */
    get messages() {
        return this._messages;
    }
    /**
     messages field
     */
    set messages(value) {
        this._messages = value;
    }
    /**
     record field
     */
    get record() {
        return this._record;
    }
    /**
     record field
     */
    set record(value) {
        this._record = value;
    }
    /**
     rowNumber field
     */
    get rowNumber() {
        return this._rowNumber;
    }
    /**
     rowNumber field
     */
    set rowNumber(value) {
        this._rowNumber = value;
    }
}
exports.CsvRecordError = CsvRecordError;
//# sourceMappingURL=CsvRecordError.js.map
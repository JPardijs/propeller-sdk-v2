import { CsvRecordErrorCode } from '../enum/CsvRecordErrorCode';
/**
 Object class for CsvRecordError
 */
export declare class CsvRecordError {
    /** code field */
    private _code;
    /** messages field */
    private _messages;
    /** record field */
    private _record?;
    /** rowNumber field */
    private _rowNumber?;
    /**
     Creates a new instance of CsvRecordError
     */
    constructor(data?: Partial<CsvRecordError>);
    /**
     code field
     */
    get code(): CsvRecordErrorCode;
    /**
     code field
     */
    set code(value: CsvRecordErrorCode);
    /**
     messages field
     */
    get messages(): string[];
    /**
     messages field
     */
    set messages(value: string[]);
    /**
     record field
     */
    get record(): any | undefined;
    /**
     record field
     */
    set record(value: any | undefined);
    /**
     rowNumber field
     */
    get rowNumber(): number | undefined;
    /**
     rowNumber field
     */
    set rowNumber(value: number | undefined);
}
//# sourceMappingURL=CsvRecordError.d.ts.map
import { CsvRecordError } from './CsvRecordError';
/**
 Object class for CsvImportResponse
 */
export declare class CsvImportResponse {
    /** importedCount field */
    private _importedCount;
    /** errors field */
    private _errors?;
    /**
     Creates a new instance of CsvImportResponse
     */
    constructor(data?: Partial<CsvImportResponse>);
    /**
     importedCount field
     */
    get importedCount(): number;
    /**
     importedCount field
     */
    set importedCount(value: number);
    /**
     errors field
     */
    get errors(): CsvRecordError[] | undefined;
    /**
     errors field
     */
    set errors(value: CsvRecordError[] | undefined);
}
//# sourceMappingURL=CsvImportResponse.d.ts.map
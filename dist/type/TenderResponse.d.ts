import { Tender } from './Tender';
import { TenderResponseData } from './TenderResponseData';
/**
 Object class for TenderResponse
 */
export declare class TenderResponse {
    /** Tender */
    private _tender;
    /** Tender response data */
    private _response;
    /**
     Creates a new instance of TenderResponse
     */
    constructor(data?: Partial<TenderResponse>);
    /**
     Tender
     */
    get tender(): Tender;
    /**
     Tender
     */
    set tender(value: Tender);
    /**
     Tender response data
     */
    get response(): TenderResponseData;
    /**
     Tender response data
     */
    set response(value: TenderResponseData);
}
//# sourceMappingURL=TenderResponse.d.ts.map
import { CostPrice } from './CostPrice';
/**
 Object class for CostPriceResponse
 */
export declare class CostPriceResponse {
    /** List of items of type CostPrice */
    private _items;
    /** Total number of items found */
    private _itemsFound;
    /** The amount of items to show per page */
    private _offset;
    /** The current page */
    private _page;
    /** Total amount of pages */
    private _pages;
    /** Start position of the current page */
    private _start;
    /** End position of the current page */
    private _end;
    /**
     Creates a new instance of CostPriceResponse
     */
    constructor(data?: Partial<CostPriceResponse>);
    /**
     List of items of type CostPrice
     */
    get items(): CostPrice[];
    /**
     List of items of type CostPrice
     */
    set items(value: CostPrice[]);
    /**
     Total number of items found
     */
    get itemsFound(): number;
    /**
     Total number of items found
     */
    set itemsFound(value: number);
    /**
     The amount of items to show per page
     */
    get offset(): number;
    /**
     The amount of items to show per page
     */
    set offset(value: number);
    /**
     The current page
     */
    get page(): number;
    /**
     The current page
     */
    set page(value: number);
    /**
     Total amount of pages
     */
    get pages(): number;
    /**
     Total amount of pages
     */
    set pages(value: number);
    /**
     Start position of the current page
     */
    get start(): number;
    /**
     Start position of the current page
     */
    set start(value: number);
    /**
     End position of the current page
     */
    get end(): number;
    /**
     End position of the current page
     */
    set end(value: number);
}
//# sourceMappingURL=CostPriceResponse.d.ts.map
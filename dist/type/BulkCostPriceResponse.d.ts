import { BulkCostPrice } from './BulkCostPrice';
/**
 Object class for BulkCostPriceResponse
 */
export declare class BulkCostPriceResponse {
    /** List of items of type BulkCostPrice */
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
     Creates a new instance of BulkCostPriceResponse
     */
    constructor(data?: Partial<BulkCostPriceResponse>);
    /**
     List of items of type BulkCostPrice
     */
    get items(): BulkCostPrice[];
    /**
     List of items of type BulkCostPrice
     */
    set items(value: BulkCostPrice[]);
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
//# sourceMappingURL=BulkCostPriceResponse.d.ts.map
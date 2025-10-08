import { SparePart } from './SparePart';
import { AttributeFilter } from './AttributeFilter';
/**
 Object class for SparePartsResponse
 */
export declare class SparePartsResponse {
    /** List of items of type SpareParts */
    private _items;
    /** Total number of items found */
    private _itemsFound;
    /** The amount of items to show per page */
    private _offset;
    /**  The current page */
    private _page;
    /** Total amount of pages */
    private _pages;
    /** Start position of the current page */
    private _start;
    /** End position of the current page */
    private _end;
    /** The lowest price of a product in this productlist */
    private _minPrice;
    /** The highest price of a product in this productlist */
    private _maxPrice;
    /** filters field */
    private _filters?;
    /**
     Creates a new instance of SparePartsResponse
     */
    constructor(data?: Partial<SparePartsResponse>);
    /**
     List of items of type SpareParts
     */
    get items(): SparePart[];
    /**
     List of items of type SpareParts
     */
    set items(value: SparePart[]);
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
    /**
     The lowest price of a product in this productlist
     */
    get minPrice(): number;
    /**
     The lowest price of a product in this productlist
     */
    set minPrice(value: number);
    /**
     The highest price of a product in this productlist
     */
    get maxPrice(): number;
    /**
     The highest price of a product in this productlist
     */
    set maxPrice(value: number);
    /**
     filters field
     */
    get filters(): AttributeFilter[] | undefined;
    /**
     filters field
     */
    set filters(value: AttributeFilter[] | undefined);
}
//# sourceMappingURL=SparePartsResponse.d.ts.map
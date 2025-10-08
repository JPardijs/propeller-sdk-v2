import { IAttributeDecimalRangeFilter } from './IAttributeDecimalRangeFilter';
/**
 Object class for AttributeDecimalRangeFilter
 */
export declare class AttributeDecimalRangeFilter implements IAttributeDecimalRangeFilter {
    /** Minumum value for this attribute */
    private _min?;
    /** The number of products found with this attribute value.  */
    private _max?;
    /**
     Creates a new instance of AttributeDecimalRangeFilter
     */
    constructor(data?: Partial<AttributeDecimalRangeFilter>);
    /**
     Minumum value for this attribute
     */
    get min(): number | undefined;
    /**
     Minumum value for this attribute
     */
    set min(value: number | undefined);
    /**
     The number of products found with this attribute value.
     */
    get max(): number | undefined;
    /**
     The number of products found with this attribute value.
     */
    set max(value: number | undefined);
}
//# sourceMappingURL=AttributeDecimalRangeFilter.d.ts.map
import { IAttributeIntegerRangeFilter } from './IAttributeIntegerRangeFilter';
/**
 Object class for AttributeIntegerRangeFilter
 */
export declare class AttributeIntegerRangeFilter implements IAttributeIntegerRangeFilter {
    /** Minumum value for this attribute */
    private _min?;
    /** The number of products found with this attribute value.  */
    private _max?;
    /**
     Creates a new instance of AttributeIntegerRangeFilter
     */
    constructor(data?: Partial<AttributeIntegerRangeFilter>);
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
//# sourceMappingURL=AttributeIntegerRangeFilter.d.ts.map
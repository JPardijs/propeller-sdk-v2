import { IAttributeTextFilter } from './IAttributeTextFilter';
/**
 Object class for AttributeTextFilter
 */
export declare class AttributeTextFilter implements IAttributeTextFilter {
    /** The value of the attribute */
    private _value;
    /** The number of products found with this attribute value with all attributes applied.     */
    private _count;
    /** The number of products found with this attribute value  without any attribute filters applied.  */
    private _countTotal?;
    /** The number of products found with this attribute value without all attributes except it's own applied.
      This can be used to display the active filter's totals  */
    private _countActive?;
    /** Indicates whehter this values is currently selected */
    private _isSelected;
    /**
     Creates a new instance of AttributeTextFilter
     */
    constructor(data?: Partial<AttributeTextFilter>);
    /**
     The value of the attribute
     */
    get value(): string;
    /**
     The value of the attribute
     */
    set value(value: string);
    /**
     The number of products found with this attribute value with all attributes applied.
     */
    get count(): number;
    /**
     The number of products found with this attribute value with all attributes applied.
     */
    set count(value: number);
    /**
     The number of products found with this attribute value  without any attribute filters applied.
     */
    get countTotal(): number | undefined;
    /**
     The number of products found with this attribute value  without any attribute filters applied.
     */
    set countTotal(value: number | undefined);
    /**
     The number of products found with this attribute value without all attributes except it's own applied.
      This can be used to display the active filter's totals
     */
    get countActive(): number | undefined;
    /**
     The number of products found with this attribute value without all attributes except it's own applied.
      This can be used to display the active filter's totals
     */
    set countActive(value: number | undefined);
    /**
     Indicates whehter this values is currently selected
     */
    get isSelected(): boolean;
    /**
     Indicates whehter this values is currently selected
     */
    set isSelected(value: boolean);
}
//# sourceMappingURL=AttributeTextFilter.d.ts.map
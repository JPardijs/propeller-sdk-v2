import { AttributeType } from '../enum/AttributeType';
import { AttributeDescription } from './AttributeDescription';
import { AttributeTextFilter } from './AttributeTextFilter';
import { AttributeIntegerRangeFilter } from './AttributeIntegerRangeFilter';
import { AttributeDecimalRangeFilter } from './AttributeDecimalRangeFilter';
import { IAttributeFilter } from './IAttributeFilter';
/**
 Object class for AttributeFilter
 */
export declare class AttributeFilter implements IAttributeFilter {
    /** Attribute filter id */
    private _id;
    /** attributeDescription field */
    private _attributeDescription?;
    /** The type of the attribute.
          Possible values:
          - text
          - list
          - enum
          - enumlist
          - color
          - date
          - datetime
          - object
          - integer
          - decimal */
    private _type;
    /** All available attribute text values within this search result for this particular attribute. */
    private _textFilters?;
    /** Minimum and maximum value range for integer attributes */
    private _integerRangeFilter?;
    /** Minimum and maximum value range for decimal attributes */
    private _decimalRangeFilter?;
    /**
     Creates a new instance of AttributeFilter
     */
    constructor(data?: Partial<AttributeFilter>);
    /**
     Attribute filter id
     */
    get id(): string;
    /**
     Attribute filter id
     */
    set id(value: string);
    /**
     attributeDescription field
     */
    get attributeDescription(): AttributeDescription | undefined;
    /**
     attributeDescription field
     */
    set attributeDescription(value: AttributeDescription | undefined);
    /**
     The type of the attribute.
          Possible values:
          - text
          - list
          - enum
          - enumlist
          - color
          - date
          - datetime
          - object
          - integer
          - decimal
     */
    get type(): AttributeType;
    /**
     The type of the attribute.
          Possible values:
          - text
          - list
          - enum
          - enumlist
          - color
          - date
          - datetime
          - object
          - integer
          - decimal
     */
    set type(value: AttributeType);
    /**
     All available attribute text values within this search result for this particular attribute.
     */
    get textFilters(): AttributeTextFilter[] | undefined;
    /**
     All available attribute text values within this search result for this particular attribute.
     */
    set textFilters(value: AttributeTextFilter[] | undefined);
    /**
     Minimum and maximum value range for integer attributes
     */
    get integerRangeFilter(): AttributeIntegerRangeFilter | undefined;
    /**
     Minimum and maximum value range for integer attributes
     */
    set integerRangeFilter(value: AttributeIntegerRangeFilter | undefined);
    /**
     Minimum and maximum value range for decimal attributes
     */
    get decimalRangeFilter(): AttributeDecimalRangeFilter | undefined;
    /**
     Minimum and maximum value range for decimal attributes
     */
    set decimalRangeFilter(value: AttributeDecimalRangeFilter | undefined);
}
//# sourceMappingURL=AttributeFilter.d.ts.map
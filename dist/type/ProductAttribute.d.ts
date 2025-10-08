import { AttributeValue } from './AttributeValue';
import { AttributeDescription } from './AttributeDescription';
/**
 Object class for ProductAttribute
 */
export declare class ProductAttribute {
    /** The ID of the attribute */
    private _id;
    /** The value of the attribute */
    private _value;
    /** The date when the attribute was created */
    private _createdAt;
    /** The date when the attribute was last modified */
    private _lastModifiedAt;
    /** The ID of the user that created the attribute */
    private _createdBy?;
    /** The ID of the user that last modified the attribute */
    private _lastModifiedBy?;
    /** attributeDescription field */
    private _attributeDescription?;
    /** The ID of the product this attribute belongs to */
    private _productId;
    /**
     Creates a new instance of ProductAttribute
     */
    constructor(data?: Partial<ProductAttribute>);
    /**
     The ID of the attribute
     */
    get id(): string;
    /**
     The ID of the attribute
     */
    set id(value: string);
    /**
     The value of the attribute
     */
    get value(): AttributeValue;
    /**
     The value of the attribute
     */
    set value(value: AttributeValue);
    /**
     The date when the attribute was created
     */
    get createdAt(): string;
    /**
     The date when the attribute was created
     */
    set createdAt(value: string);
    /**
     The date when the attribute was last modified
     */
    get lastModifiedAt(): string;
    /**
     The date when the attribute was last modified
     */
    set lastModifiedAt(value: string);
    /**
     The ID of the user that created the attribute
     */
    get createdBy(): number | undefined;
    /**
     The ID of the user that created the attribute
     */
    set createdBy(value: number | undefined);
    /**
     The ID of the user that last modified the attribute
     */
    get lastModifiedBy(): number | undefined;
    /**
     The ID of the user that last modified the attribute
     */
    set lastModifiedBy(value: number | undefined);
    /**
     attributeDescription field
     */
    get attributeDescription(): AttributeDescription | undefined;
    /**
     attributeDescription field
     */
    set attributeDescription(value: AttributeDescription | undefined);
    /**
     The ID of the product this attribute belongs to
     */
    get productId(): number;
    /**
     The ID of the product this attribute belongs to
     */
    set productId(value: number);
}
//# sourceMappingURL=ProductAttribute.d.ts.map
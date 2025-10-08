import { CompanyAttributeValueSearch } from './CompanyAttributeValueSearch';
import { CompanyAttributeDescriptionSearch } from './CompanyAttributeDescriptionSearch';
/**
 Object class for CompanyAttributeSearch
 */
export declare class CompanyAttributeSearch {
    /** Attribute id */
    private _id;
    /** Attribute value */
    private _value;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** Created by id */
    private _createdBy?;
    /** Last modified by id */
    private _lastModifiedBy?;
    /** Attribute Description */
    private _attributeDescription?;
    /**
     Creates a new instance of CompanyAttributeSearch
     */
    constructor(data?: Partial<CompanyAttributeSearch>);
    /**
     Attribute id
     */
    get id(): string;
    /**
     Attribute id
     */
    set id(value: string);
    /**
     Attribute value
     */
    get value(): CompanyAttributeValueSearch;
    /**
     Attribute value
     */
    set value(value: CompanyAttributeValueSearch);
    /**
     Creation date
     */
    get createdAt(): string;
    /**
     Creation date
     */
    set createdAt(value: string);
    /**
     Last modified date
     */
    get lastModifiedAt(): string;
    /**
     Last modified date
     */
    set lastModifiedAt(value: string);
    /**
     Created by id
     */
    get createdBy(): number | undefined;
    /**
     Created by id
     */
    set createdBy(value: number | undefined);
    /**
     Last modified by id
     */
    get lastModifiedBy(): number | undefined;
    /**
     Last modified by id
     */
    set lastModifiedBy(value: number | undefined);
    /**
     Attribute Description
     */
    get attributeDescription(): CompanyAttributeDescriptionSearch | undefined;
    /**
     Attribute Description
     */
    set attributeDescription(value: CompanyAttributeDescriptionSearch | undefined);
}
//# sourceMappingURL=CompanyAttributeSearch.d.ts.map
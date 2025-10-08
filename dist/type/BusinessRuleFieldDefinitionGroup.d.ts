import { BusinessRuleFieldDefinition } from './BusinessRuleFieldDefinition';
/**
 Represents a business rule field definition group
 */
export declare class BusinessRuleFieldDefinitionGroup {
    /** The ID of the business rule field definition group */
    private _id;
    /** The name of the business rule field definition group */
    private _name;
    /** Indicates whether the business rule field definition group is a root group or not */
    private _isRoot;
    /** The business rule field definitions in the business rule field definition group */
    private _definitions;
    /**
     Creates a new instance of BusinessRuleFieldDefinitionGroup
     */
    constructor(data?: Partial<BusinessRuleFieldDefinitionGroup>);
    /**
     The ID of the business rule field definition group
     */
    get id(): string | number;
    /**
     The ID of the business rule field definition group
     */
    set id(value: string | number);
    /**
     The name of the business rule field definition group
     */
    get name(): string;
    /**
     The name of the business rule field definition group
     */
    set name(value: string);
    /**
     Indicates whether the business rule field definition group is a root group or not
     */
    get isRoot(): boolean;
    /**
     Indicates whether the business rule field definition group is a root group or not
     */
    set isRoot(value: boolean);
    /**
     The business rule field definitions in the business rule field definition group
     */
    get definitions(): BusinessRuleFieldDefinition[];
    /**
     The business rule field definitions in the business rule field definition group
     */
    set definitions(value: BusinessRuleFieldDefinition[]);
}
//# sourceMappingURL=BusinessRuleFieldDefinitionGroup.d.ts.map
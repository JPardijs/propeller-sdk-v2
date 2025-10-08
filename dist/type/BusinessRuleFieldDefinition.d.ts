import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { LocalizedString } from './LocalizedString';
import { BusinessRuleActionField } from './BusinessRuleActionField';
/**
 Represents a business rule field definition
 */
export declare class BusinessRuleFieldDefinition {
    /** The ID for this field definition */
    private _id;
    /** The descriptive name of the field */
    private _name;
    /** The expected path to the field in the input payload */
    private _path;
    /** The expected type of the field */
    private _type;
    /** The actionable sub-fields when the type is 'complex' */
    private _fields?;
    /** The potential sub-fields when the type is 'complex' */
    private _expressions?;
    /**
     Creates a new instance of BusinessRuleFieldDefinition
     */
    constructor(data?: Partial<BusinessRuleFieldDefinition>);
    /**
     The ID for this field definition
     */
    get id(): string | number;
    /**
     The ID for this field definition
     */
    set id(value: string | number);
    /**
     The descriptive name of the field
     */
    get name(): LocalizedString[];
    /**
     The descriptive name of the field
     */
    set name(value: LocalizedString[]);
    /**
     The expected path to the field in the input payload
     */
    get path(): string;
    /**
     The expected path to the field in the input payload
     */
    set path(value: string);
    /**
     The expected type of the field
     */
    get type(): BusinessRuleExpressionTypes;
    /**
     The expected type of the field
     */
    set type(value: BusinessRuleExpressionTypes);
    /**
     The actionable sub-fields when the type is 'complex'
     */
    get fields(): BusinessRuleActionField[] | undefined;
    /**
     The actionable sub-fields when the type is 'complex'
     */
    set fields(value: BusinessRuleActionField[] | undefined);
    /**
     The potential sub-fields when the type is 'complex'
     */
    get expressions(): BusinessRuleFieldDefinition[] | undefined;
    /**
     The potential sub-fields when the type is 'complex'
     */
    set expressions(value: BusinessRuleFieldDefinition[] | undefined);
}
//# sourceMappingURL=BusinessRuleFieldDefinition.d.ts.map
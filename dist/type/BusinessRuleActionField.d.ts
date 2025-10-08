import { LocalizedString } from './LocalizedString';
/**
 Object class for BusinessRuleActionField
 */
export declare class BusinessRuleActionField {
    /** name field */
    private _name;
    /** path field */
    private _path;
    /**
     Creates a new instance of BusinessRuleActionField
     */
    constructor(data?: Partial<BusinessRuleActionField>);
    /**
     name field
     */
    get name(): LocalizedString[];
    /**
     name field
     */
    set name(value: LocalizedString[]);
    /**
     path field
     */
    get path(): string;
    /**
     path field
     */
    set path(value: string);
}
//# sourceMappingURL=BusinessRuleActionField.d.ts.map
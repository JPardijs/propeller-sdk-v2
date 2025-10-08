import { BusinessRuleNodeType } from '../enum/BusinessRuleNodeType';
import { IBusinessRuleNode } from './IBusinessRuleNode';
/**
 Object class for BusinessRuleOutput
 */
export declare class BusinessRuleOutput implements IBusinessRuleNode {
    /** type field */
    private _type;
    /** id field */
    private _id;
    /** name field */
    private _name;
    /** description field */
    private _description;
    /**
     Creates a new instance of BusinessRuleOutput
     */
    constructor(data?: Partial<BusinessRuleOutput>);
    /**
     type field
     */
    get type(): BusinessRuleNodeType;
    /**
     type field
     */
    set type(value: BusinessRuleNodeType);
    /**
     id field
     */
    get id(): string | number;
    /**
     id field
     */
    set id(value: string | number);
    /**
     name field
     */
    get name(): string;
    /**
     name field
     */
    set name(value: string);
    /**
     description field
     */
    get description(): string;
    /**
     description field
     */
    set description(value: string);
}
//# sourceMappingURL=BusinessRuleOutput.d.ts.map
import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { BusinessRuleNumberExpressionOperators } from '../enum/BusinessRuleNumberExpressionOperators';
import { BusinessRuleComplexExpressionAction } from '../enum/BusinessRuleComplexExpressionAction';
import { BusinessRuleSubExpressionGroup } from './BusinessRuleSubExpressionGroup';
/**
 Represents a business rule  complex expression
 */
export declare class BusinessRuleComplexExpression {
    /** id field */
    private _id;
    /** type field */
    private _type;
    /** operator field */
    private _operator?;
    /** The action to execute with this complex expression
          , either 'sum' a sub field that is present in the expression's path
          or 'count' to count the length of the filtered array.  */
    private _action;
    /** The path to the field to apply the action to in case the action equals 'sum' */
    private _field?;
    /** The path to the field this complex expression targets, defaults to $. Has to be set in case of it being a sub-expression */
    private _path?;
    /** number field */
    private _number;
    /** expressions field */
    private _expressions?;
    /**
     Creates a new instance of BusinessRuleComplexExpression
     */
    constructor(data?: Partial<BusinessRuleComplexExpression>);
    /**
     id field
     */
    get id(): string | number;
    /**
     id field
     */
    set id(value: string | number);
    /**
     type field
     */
    get type(): BusinessRuleExpressionTypes;
    /**
     type field
     */
    set type(value: BusinessRuleExpressionTypes);
    /**
     operator field
     */
    get operator(): BusinessRuleNumberExpressionOperators | undefined;
    /**
     operator field
     */
    set operator(value: BusinessRuleNumberExpressionOperators | undefined);
    /**
     The action to execute with this complex expression
          , either 'sum' a sub field that is present in the expression's path
          or 'count' to count the length of the filtered array.
     */
    get action(): BusinessRuleComplexExpressionAction;
    /**
     The action to execute with this complex expression
          , either 'sum' a sub field that is present in the expression's path
          or 'count' to count the length of the filtered array.
     */
    set action(value: BusinessRuleComplexExpressionAction);
    /**
     The path to the field to apply the action to in case the action equals 'sum'
     */
    get field(): string | undefined;
    /**
     The path to the field to apply the action to in case the action equals 'sum'
     */
    set field(value: string | undefined);
    /**
     The path to the field this complex expression targets, defaults to $. Has to be set in case of it being a sub-expression
     */
    get path(): string | undefined;
    /**
     The path to the field this complex expression targets, defaults to $. Has to be set in case of it being a sub-expression
     */
    set path(value: string | undefined);
    /**
     number field
     */
    get number(): number;
    /**
     number field
     */
    set number(value: number);
    /**
     expressions field
     */
    get expressions(): BusinessRuleSubExpressionGroup[] | undefined;
    /**
     expressions field
     */
    set expressions(value: BusinessRuleSubExpressionGroup[] | undefined);
}
//# sourceMappingURL=BusinessRuleComplexExpression.d.ts.map
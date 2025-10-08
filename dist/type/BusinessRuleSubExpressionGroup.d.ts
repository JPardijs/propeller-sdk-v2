import { BusinessRuleExpressionGroupOperators } from '../enum/BusinessRuleExpressionGroupOperators';
import { IBusinessRuleExpression } from './IBusinessRuleExpression';
/**
 Represents a business rule expression group when used as sub-expressions in a complex expression
 */
export declare class BusinessRuleSubExpressionGroup {
    /** id field */
    private _id;
    /** field field */
    private _field;
    /** expressions field */
    private _expressions;
    /** operator field */
    private _operator?;
    /**
     Creates a new instance of BusinessRuleSubExpressionGroup
     */
    constructor(data?: Partial<BusinessRuleSubExpressionGroup>);
    /**
     id field
     */
    get id(): string | number;
    /**
     id field
     */
    set id(value: string | number);
    /**
     field field
     */
    get field(): string;
    /**
     field field
     */
    set field(value: string);
    /**
     expressions field
     */
    get expressions(): IBusinessRuleExpression[];
    /**
     expressions field
     */
    set expressions(value: IBusinessRuleExpression[]);
    /**
     operator field
     */
    get operator(): BusinessRuleExpressionGroupOperators | undefined;
    /**
     operator field
     */
    set operator(value: BusinessRuleExpressionGroupOperators | undefined);
}
//# sourceMappingURL=BusinessRuleSubExpressionGroup.d.ts.map
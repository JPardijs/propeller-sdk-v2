import { BusinessRuleExpressionGroupOperators } from '../enum/BusinessRuleExpressionGroupOperators';
import { IBusinessRuleExpression } from './IBusinessRuleExpression';
/**
 Represents a business rule expression group
 */
export declare class BusinessRuleExpressionGroup {
    /** id field */
    private _id;
    /** expressions field */
    private _expressions;
    /** operator field */
    private _operator?;
    /**
     Creates a new instance of BusinessRuleExpressionGroup
     */
    constructor(data?: Partial<BusinessRuleExpressionGroup>);
    /**
     id field
     */
    get id(): string | number;
    /**
     id field
     */
    set id(value: string | number);
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
//# sourceMappingURL=BusinessRuleExpressionGroup.d.ts.map
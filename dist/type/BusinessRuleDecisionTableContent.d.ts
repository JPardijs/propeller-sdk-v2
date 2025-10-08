import { BusinessRuleHitPolicyOption } from '../enum/BusinessRuleHitPolicyOption';
import { BusinessRuleDecisionTableRow } from './BusinessRuleDecisionTableRow';
import { BusinessRuleDecisionTableInputOutput } from './BusinessRuleDecisionTableInputOutput';
/**
 Object class for BusinessRuleDecisionTableContent
 */
export declare class BusinessRuleDecisionTableContent {
    /** The table's hitPolicy.
    Possible values: first, collect.
    'first' means that the first matching row is used.
    'collect' means that all matching rows are used. */
    private _hitPolicy;
    /** The table's rows */
    private _rows;
    /** The table's input columns */
    private _inputs;
    /** The table's output columns */
    private _outputs;
    /**
     Creates a new instance of BusinessRuleDecisionTableContent
     */
    constructor(data?: Partial<BusinessRuleDecisionTableContent>);
    /**
     The table's hitPolicy.
    Possible values: first, collect.
    'first' means that the first matching row is used.
    'collect' means that all matching rows are used.
     */
    get hitPolicy(): BusinessRuleHitPolicyOption;
    /**
     The table's hitPolicy.
    Possible values: first, collect.
    'first' means that the first matching row is used.
    'collect' means that all matching rows are used.
     */
    set hitPolicy(value: BusinessRuleHitPolicyOption);
    /**
     The table's rows
     */
    get rows(): BusinessRuleDecisionTableRow[];
    /**
     The table's rows
     */
    set rows(value: BusinessRuleDecisionTableRow[]);
    /**
     The table's input columns
     */
    get inputs(): BusinessRuleDecisionTableInputOutput[];
    /**
     The table's input columns
     */
    set inputs(value: BusinessRuleDecisionTableInputOutput[]);
    /**
     The table's output columns
     */
    get outputs(): BusinessRuleDecisionTableInputOutput[];
    /**
     The table's output columns
     */
    set outputs(value: BusinessRuleDecisionTableInputOutput[]);
}
//# sourceMappingURL=BusinessRuleDecisionTableContent.d.ts.map
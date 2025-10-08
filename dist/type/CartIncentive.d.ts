import { CartBaseItem } from './CartBaseItem';
import { CartIncentiveParams } from './CartIncentiveParams';
/**
 Object class for CartIncentive
 */
export declare class CartIncentive {
    /** Incentive name */
    private _name;
    /** Incentive action */
    private _action;
    /** List of affected items */
    private _affectedItems?;
    /** Incentive parameters */
    private _params;
    /**
     Creates a new instance of CartIncentive
     */
    constructor(data?: Partial<CartIncentive>);
    /**
     Incentive name
     */
    get name(): string;
    /**
     Incentive name
     */
    set name(value: string);
    /**
     Incentive action
     */
    get action(): string;
    /**
     Incentive action
     */
    set action(value: string);
    /**
     List of affected items
     */
    get affectedItems(): CartBaseItem[] | undefined;
    /**
     List of affected items
     */
    set affectedItems(value: CartBaseItem[] | undefined);
    /**
     Incentive parameters
     */
    get params(): CartIncentiveParams;
    /**
     Incentive parameters
     */
    set params(value: CartIncentiveParams);
}
//# sourceMappingURL=CartIncentive.d.ts.map
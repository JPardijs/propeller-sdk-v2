import { YesNo } from '../enum/YesNo';
import { Warehouse } from './Warehouse';
/**
 Object class for OrderPostageData
 */
export declare class OrderPostageData {
    /** The chosen shipping method */
    private _method;
    /** The shipping costs tax percentage */
    private _taxPercentage;
    /** The preferred delivery date for the Order */
    private _requestDate?;
    /** The shipping costs excluding tax */
    private _gross;
    /** The shipping costs including tax */
    private _net;
    /** The tax on the shipping costs */
    private _tax;
    /** Is partial delivery allowed for this Order */
    private _partialDeliveryAllowed?;
    /** ID of the pick up location when the Order's shipping method is PICKUP */
    private _pickUpLocationId?;
    /** The selected carrier for this Order */
    private _carrier?;
    /** Whether the shipping costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation */
    private _overruled?;
    /** warehouse field */
    private _warehouse?;
    /**
     Creates a new instance of OrderPostageData
     */
    constructor(data?: Partial<OrderPostageData>);
    /**
     The chosen shipping method
     */
    get method(): string;
    /**
     The chosen shipping method
     */
    set method(value: string);
    /**
     The shipping costs tax percentage
     */
    get taxPercentage(): number;
    /**
     The shipping costs tax percentage
     */
    set taxPercentage(value: number);
    /**
     The preferred delivery date for the Order
     */
    get requestDate(): string | undefined;
    /**
     The preferred delivery date for the Order
     */
    set requestDate(value: string | undefined);
    /**
     The shipping costs excluding tax
     */
    get gross(): number;
    /**
     The shipping costs excluding tax
     */
    set gross(value: number);
    /**
     The shipping costs including tax
     */
    get net(): number;
    /**
     The shipping costs including tax
     */
    set net(value: number);
    /**
     The tax on the shipping costs
     */
    get tax(): number;
    /**
     The tax on the shipping costs
     */
    set tax(value: number);
    /**
     Is partial delivery allowed for this Order
     */
    get partialDeliveryAllowed(): YesNo | undefined;
    /**
     Is partial delivery allowed for this Order
     */
    set partialDeliveryAllowed(value: YesNo | undefined);
    /**
     ID of the pick up location when the Order's shipping method is PICKUP
     */
    get pickUpLocationId(): number | undefined;
    /**
     ID of the pick up location when the Order's shipping method is PICKUP
     */
    set pickUpLocationId(value: number | undefined);
    /**
     The selected carrier for this Order
     */
    get carrier(): string | undefined;
    /**
     The selected carrier for this Order
     */
    set carrier(value: string | undefined);
    /**
     Whether the shipping costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation
     */
    get overruled(): YesNo | undefined;
    /**
     Whether the shipping costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation
     */
    set overruled(value: YesNo | undefined);
    /**
     warehouse field
     */
    get warehouse(): Warehouse | undefined;
    /**
     warehouse field
     */
    set warehouse(value: Warehouse | undefined);
}
//# sourceMappingURL=OrderPostageData.d.ts.map
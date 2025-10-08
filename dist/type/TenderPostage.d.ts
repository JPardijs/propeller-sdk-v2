import { YesNo } from '../enum/YesNo';
import { Warehouse } from './Warehouse';
/**
 Object class for TenderPostage
 */
export declare class TenderPostage {
    /** The selected shipping method for this tender/order */
    private _method;
    /** Postage tax percentage */
    private _taxPercentage;
    /** The preferred delivery date for this order as requested by the user */
    private _requestDate?;
    /** The selected carrier for this tender/order */
    private _carrier?;
    /** The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT excluding */
    private _price;
    /** The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT including */
    private _priceNet;
    /** The VAT associated with the selected shipping method and business rules that apply to this tender/order. */
    private _tax;
    /** If false, shipping costs are automatically calculated */
    private _overruled?;
    /** This order can be shipped in parts when items different delivery dates */
    private _partialDeliveryAllowed?;
    /** Pick up location ID */
    private _pickUpLocationId?;
    /** warehouse field */
    private _warehouse?;
    /**
     Creates a new instance of TenderPostage
     */
    constructor(data?: Partial<TenderPostage>);
    /**
     The selected shipping method for this tender/order
     */
    get method(): string;
    /**
     The selected shipping method for this tender/order
     */
    set method(value: string);
    /**
     Postage tax percentage
     */
    get taxPercentage(): number;
    /**
     Postage tax percentage
     */
    set taxPercentage(value: number);
    /**
     The preferred delivery date for this order as requested by the user
     */
    get requestDate(): string | undefined;
    /**
     The preferred delivery date for this order as requested by the user
     */
    set requestDate(value: string | undefined);
    /**
     The selected carrier for this tender/order
     */
    get carrier(): string | undefined;
    /**
     The selected carrier for this tender/order
     */
    set carrier(value: string | undefined);
    /**
     The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT excluding
     */
    get price(): number;
    /**
     The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT excluding
     */
    set price(value: number);
    /**
     The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT including
     */
    get priceNet(): number;
    /**
     The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT including
     */
    set priceNet(value: number);
    /**
     The VAT associated with the selected shipping method and business rules that apply to this tender/order.
     */
    get tax(): number;
    /**
     The VAT associated with the selected shipping method and business rules that apply to this tender/order.
     */
    set tax(value: number);
    /**
     If false, shipping costs are automatically calculated
     */
    get overruled(): YesNo | undefined;
    /**
     If false, shipping costs are automatically calculated
     */
    set overruled(value: YesNo | undefined);
    /**
     This order can be shipped in parts when items different delivery dates
     */
    get partialDeliveryAllowed(): YesNo | undefined;
    /**
     This order can be shipped in parts when items different delivery dates
     */
    set partialDeliveryAllowed(value: YesNo | undefined);
    /**
     Pick up location ID
     */
    get pickUpLocationId(): number | undefined;
    /**
     Pick up location ID
     */
    set pickUpLocationId(value: number | undefined);
    /**
     warehouse field
     */
    get warehouse(): Warehouse | undefined;
    /**
     warehouse field
     */
    set warehouse(value: Warehouse | undefined);
}
//# sourceMappingURL=TenderPostage.d.ts.map
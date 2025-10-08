import { YesNo } from '../enum/YesNo';
/**
 Object class for OrderPaymentData
 */
export declare class OrderPaymentData {
    /** The transaction cost including tax */
    private _net;
    /** The transaction cost excluding tax */
    private _gross;
    /** The tax on the transaction costs */
    private _tax;
    /** The transaction costs tax percentage */
    private _taxPercentage;
    /** The paymethod for this Order */
    private _method;
    /** The transaction status */
    private _status?;
    /** Last time the transaction status was changed */
    private _statusDate?;
    /** The accountingId that belongs to this order */
    private _accountingId?;
    /** Whether the transaction costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation */
    private _overruled?;
    /**
     Creates a new instance of OrderPaymentData
     */
    constructor(data?: Partial<OrderPaymentData>);
    /**
     The transaction cost including tax
     */
    get net(): number;
    /**
     The transaction cost including tax
     */
    set net(value: number);
    /**
     The transaction cost excluding tax
     */
    get gross(): number;
    /**
     The transaction cost excluding tax
     */
    set gross(value: number);
    /**
     The tax on the transaction costs
     */
    get tax(): number;
    /**
     The tax on the transaction costs
     */
    set tax(value: number);
    /**
     The transaction costs tax percentage
     */
    get taxPercentage(): number;
    /**
     The transaction costs tax percentage
     */
    set taxPercentage(value: number);
    /**
     The paymethod for this Order
     */
    get method(): string;
    /**
     The paymethod for this Order
     */
    set method(value: string);
    /**
     The transaction status
     */
    get status(): string | undefined;
    /**
     The transaction status
     */
    set status(value: string | undefined);
    /**
     Last time the transaction status was changed
     */
    get statusDate(): string | undefined;
    /**
     Last time the transaction status was changed
     */
    set statusDate(value: string | undefined);
    /**
     The accountingId that belongs to this order
     */
    get accountingId(): string | undefined;
    /**
     The accountingId that belongs to this order
     */
    set accountingId(value: string | undefined);
    /**
     Whether the transaction costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation
     */
    get overruled(): YesNo | undefined;
    /**
     Whether the transaction costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation
     */
    set overruled(value: YesNo | undefined);
}
//# sourceMappingURL=OrderPaymentData.d.ts.map
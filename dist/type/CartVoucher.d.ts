import { YesNo } from '../enum/YesNo';
/**
 Object class for CartVoucher
 */
export declare class CartVoucher {
    /** Voucher code */
    private _code;
    /** Name of the rule that generated this voucher */
    private _name;
    /** Description of the rule that generated this voucher */
    private _description;
    /** Id of the rule that generated this voucher */
    private _ruleId;
    /** Is this voucher already redeemed */
    private _redeemed;
    /** Can this voucher be combined with other vouchers */
    private _combinable;
    /** Can this voucher be partially redeemed when type is a payable amount */
    private _partialRedemption;
    /** Available amount when the voucher represents a payable amount */
    private _available;
    /** Remaining amount when the voucher represent a payable amount and can be partially redeemed */
    private _remaining;
    /**
     Creates a new instance of CartVoucher
     */
    constructor(data?: Partial<CartVoucher>);
    /**
     Voucher code
     */
    get code(): string;
    /**
     Voucher code
     */
    set code(value: string);
    /**
     Name of the rule that generated this voucher
     */
    get name(): string;
    /**
     Name of the rule that generated this voucher
     */
    set name(value: string);
    /**
     Description of the rule that generated this voucher
     */
    get description(): string;
    /**
     Description of the rule that generated this voucher
     */
    set description(value: string);
    /**
     Id of the rule that generated this voucher
     */
    get ruleId(): number;
    /**
     Id of the rule that generated this voucher
     */
    set ruleId(value: number);
    /**
     Is this voucher already redeemed
     */
    get redeemed(): YesNo;
    /**
     Is this voucher already redeemed
     */
    set redeemed(value: YesNo);
    /**
     Can this voucher be combined with other vouchers
     */
    get combinable(): YesNo;
    /**
     Can this voucher be combined with other vouchers
     */
    set combinable(value: YesNo);
    /**
     Can this voucher be partially redeemed when type is a payable amount
     */
    get partialRedemption(): YesNo;
    /**
     Can this voucher be partially redeemed when type is a payable amount
     */
    set partialRedemption(value: YesNo);
    /**
     Available amount when the voucher represents a payable amount
     */
    get available(): number;
    /**
     Available amount when the voucher represents a payable amount
     */
    set available(value: number);
    /**
     Remaining amount when the voucher represent a payable amount and can be partially redeemed
     */
    get remaining(): number;
    /**
     Remaining amount when the voucher represent a payable amount and can be partially redeemed
     */
    set remaining(value: number);
}
//# sourceMappingURL=CartVoucher.d.ts.map
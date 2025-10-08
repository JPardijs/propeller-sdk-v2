import { Surcharge } from './Surcharge';
/**
 Object class for SurchargeProduct
 */
export declare class SurchargeProduct {
    /** The surcharge identifier */
    private _surchargeId;
    /** The product identifier */
    private _productId?;
    /** The surcharge object */
    private _surcharge;
    /**
     Creates a new instance of SurchargeProduct
     */
    constructor(data?: Partial<SurchargeProduct>);
    /**
     The surcharge identifier
     */
    get surchargeId(): string;
    /**
     The surcharge identifier
     */
    set surchargeId(value: string);
    /**
     The product identifier
     */
    get productId(): number | undefined;
    /**
     The product identifier
     */
    set productId(value: number | undefined);
    /**
     The surcharge object
     */
    get surcharge(): Surcharge;
    /**
     The surcharge object
     */
    set surcharge(value: Surcharge);
}
//# sourceMappingURL=SurchargeProduct.d.ts.map
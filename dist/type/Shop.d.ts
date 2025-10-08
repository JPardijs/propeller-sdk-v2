import { ShopPriceCalculationConfig } from './ShopPriceCalculationConfig';
/**
 Object class for Shop
 */
export declare class Shop {
    /** shopId field */
    private _shopId;
    /** name field */
    private _name;
    /** Shop purchase root id */
    private _purchaseRootId?;
    /** Shop customer root id */
    private _userRootId?;
    /** enableIncentives field */
    private _enableIncentives;
    /** Shop price calculation configuration */
    private _priceCalculationConfig;
    /** debtorId field */
    private _debtorId?;
    /** cocNumber field */
    private _cocNumber?;
    /** taxNumber field */
    private _taxNumber?;
    /**
     Creates a new instance of Shop
     */
    constructor(data?: Partial<Shop>);
    /**
     shopId field
     */
    get shopId(): number;
    /**
     shopId field
     */
    set shopId(value: number);
    /**
     name field
     */
    get name(): string;
    /**
     name field
     */
    set name(value: string);
    /**
     Shop purchase root id
     */
    get purchaseRootId(): number | undefined;
    /**
     Shop purchase root id
     */
    set purchaseRootId(value: number | undefined);
    /**
     Shop customer root id
     */
    get userRootId(): number | undefined;
    /**
     Shop customer root id
     */
    set userRootId(value: number | undefined);
    /**
     enableIncentives field
     */
    get enableIncentives(): boolean;
    /**
     enableIncentives field
     */
    set enableIncentives(value: boolean);
    /**
     Shop price calculation configuration
     */
    get priceCalculationConfig(): ShopPriceCalculationConfig;
    /**
     Shop price calculation configuration
     */
    set priceCalculationConfig(value: ShopPriceCalculationConfig);
    /**
     debtorId field
     */
    get debtorId(): string | undefined;
    /**
     debtorId field
     */
    set debtorId(value: string | undefined);
    /**
     cocNumber field
     */
    get cocNumber(): string | undefined;
    /**
     cocNumber field
     */
    set cocNumber(value: string | undefined);
    /**
     taxNumber field
     */
    get taxNumber(): string | undefined;
    /**
     taxNumber field
     */
    set taxNumber(value: string | undefined);
}
//# sourceMappingURL=Shop.d.ts.map
/**
 Object class for Inventory
 */
export declare class Inventory {
    /** Inventory primary identifier */
    private _id;
    /** Inventory product identifier */
    private _productId;
    /** Inventory quantity */
    private _quantity;
    /** Inventory cost price */
    private _costPrice;
    /** Inventory supplier */
    private _supplier;
    /** Inventory supplier code */
    private _supplierCode;
    /** Inventory sku */
    private _sku;
    /** Inventory last modified date */
    private _dateModified?;
    /** Inventory warehouse identifier */
    private _warehouseId;
    /** Inventory location */
    private _location;
    /** Inventory estimated next delivery date */
    private _nextDeliveryDate;
    /** Inventory note */
    private _notes;
    /**
     Creates a new instance of Inventory
     */
    constructor(data?: Partial<Inventory>);
    /**
     Inventory primary identifier
     */
    get id(): string | number;
    /**
     Inventory primary identifier
     */
    set id(value: string | number);
    /**
     Inventory product identifier
     */
    get productId(): number;
    /**
     Inventory product identifier
     */
    set productId(value: number);
    /**
     Inventory quantity
     */
    get quantity(): number;
    /**
     Inventory quantity
     */
    set quantity(value: number);
    /**
     Inventory cost price
     */
    get costPrice(): number;
    /**
     Inventory cost price
     */
    set costPrice(value: number);
    /**
     Inventory supplier
     */
    get supplier(): string;
    /**
     Inventory supplier
     */
    set supplier(value: string);
    /**
     Inventory supplier code
     */
    get supplierCode(): string;
    /**
     Inventory supplier code
     */
    set supplierCode(value: string);
    /**
     Inventory sku
     */
    get sku(): string;
    /**
     Inventory sku
     */
    set sku(value: string);
    /**
     Inventory last modified date
     */
    get dateModified(): string | undefined;
    /**
     Inventory last modified date
     */
    set dateModified(value: string | undefined);
    /**
     Inventory warehouse identifier
     */
    get warehouseId(): number;
    /**
     Inventory warehouse identifier
     */
    set warehouseId(value: number);
    /**
     Inventory location
     */
    get location(): string;
    /**
     Inventory location
     */
    set location(value: string);
    /**
     Inventory estimated next delivery date
     */
    get nextDeliveryDate(): string;
    /**
     Inventory estimated next delivery date
     */
    set nextDeliveryDate(value: string);
    /**
     Inventory note
     */
    get notes(): string;
    /**
     Inventory note
     */
    set notes(value: string);
}
//# sourceMappingURL=Inventory.d.ts.map
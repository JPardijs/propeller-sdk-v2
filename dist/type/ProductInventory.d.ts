import { Inventory } from './Inventory';
/**
 Object class for ProductInventory
 */
export declare class ProductInventory {
    /** Inventory product identifier */
    private _productId;
    /** Total product quantity */
    private _totalQuantity;
    /** Supplier product quantity */
    private _supplierQuantity;
    /** Local product quantity */
    private _localQuantity;
    /** Inventory estimated next delivery date */
    private _nextDeliveryDate?;
    /** Inventory items */
    private _balance?;
    /**
     Creates a new instance of ProductInventory
     */
    constructor(data?: Partial<ProductInventory>);
    /**
     Inventory product identifier
     */
    get productId(): number;
    /**
     Inventory product identifier
     */
    set productId(value: number);
    /**
     Total product quantity
     */
    get totalQuantity(): number;
    /**
     Total product quantity
     */
    set totalQuantity(value: number);
    /**
     Supplier product quantity
     */
    get supplierQuantity(): number;
    /**
     Supplier product quantity
     */
    set supplierQuantity(value: number);
    /**
     Local product quantity
     */
    get localQuantity(): number;
    /**
     Local product quantity
     */
    set localQuantity(value: number);
    /**
     Inventory estimated next delivery date
     */
    get nextDeliveryDate(): string | undefined;
    /**
     Inventory estimated next delivery date
     */
    set nextDeliveryDate(value: string | undefined);
    /**
     Inventory items
     */
    get balance(): Inventory[] | undefined;
    /**
     Inventory items
     */
    set balance(value: Inventory[] | undefined);
}
//# sourceMappingURL=ProductInventory.d.ts.map
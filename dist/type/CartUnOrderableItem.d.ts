import { PriceMode } from '../enum/PriceMode';
/**
 Object class for CartUnOrderableItem
 */
export declare class CartUnOrderableItem {
    /** Item ID of the cart item, this id can be used for update or delete mutation for this cart item. */
    private _itemId;
    /** Id of the parent cart item. */
    private _parentItemUUID?;
    /** Price mode for this cart item, if not set the platform default will be used. */
    private _priceMode?;
    /** Quantity for the cart item */
    private _quantity?;
    /** Price for the cart item, used when priceMode === EXTERNAL */
    private _price?;
    /** Customer notes for the cart item */
    private _notes?;
    /** Product identifier */
    private _productId;
    /** Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well. */
    private _clusterId?;
    /** Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well. */
    private _bundleId?;
    /**
     Creates a new instance of CartUnOrderableItem
     */
    constructor(data?: Partial<CartUnOrderableItem>);
    /**
     Item ID of the cart item, this id can be used for update or delete mutation for this cart item.
     */
    get itemId(): string;
    /**
     Item ID of the cart item, this id can be used for update or delete mutation for this cart item.
     */
    set itemId(value: string);
    /**
     Id of the parent cart item.
     */
    get parentItemUUID(): string | undefined;
    /**
     Id of the parent cart item.
     */
    set parentItemUUID(value: string | undefined);
    /**
     Price mode for this cart item, if not set the platform default will be used.
     */
    get priceMode(): PriceMode | undefined;
    /**
     Price mode for this cart item, if not set the platform default will be used.
     */
    set priceMode(value: PriceMode | undefined);
    /**
     Quantity for the cart item
     */
    get quantity(): number | undefined;
    /**
     Quantity for the cart item
     */
    set quantity(value: number | undefined);
    /**
     Price for the cart item, used when priceMode === EXTERNAL
     */
    get price(): number | undefined;
    /**
     Price for the cart item, used when priceMode === EXTERNAL
     */
    set price(value: number | undefined);
    /**
     Customer notes for the cart item
     */
    get notes(): string | undefined;
    /**
     Customer notes for the cart item
     */
    set notes(value: string | undefined);
    /**
     Product identifier
     */
    get productId(): number;
    /**
     Product identifier
     */
    set productId(value: number);
    /**
     Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well.
     */
    get clusterId(): number | undefined;
    /**
     Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well.
     */
    set clusterId(value: number | undefined);
    /**
     Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well.
     */
    get bundleId(): string | undefined;
    /**
     Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well.
     */
    set bundleId(value: string | undefined);
}
//# sourceMappingURL=CartUnOrderableItem.d.ts.map
import { PriceMode } from '../enum/PriceMode';
import { Taxcode } from '../enum/Taxcode';
import { CartItemSurcharge } from './CartItemSurcharge';
import { CartItemIncentive } from './CartItemIncentive';
import { Product } from './Product';
import { ICartBaseItem } from './ICartBaseItem';
/**
 Object class for CartBaseItem
 */
export declare class CartBaseItem implements ICartBaseItem {
    /** Item ID of the cart item, this id can be used for update or delete mutation for this cart item. */
    private _itemId;
    /** Id of the parent cart item. */
    private _parentItemUUID?;
    /** User notes on cart item level */
    private _notes?;
    /** Gross price per UOM of this cart item, no item specific discounts are applied to this price. */
    private _price;
    /** Net price per UOM of this cart item, no item specific discounts are applied to this price. */
    private _priceNet;
    /** Price mode for this cart item, if not set the platform default will be used. */
    private _priceMode?;
    /** Total gross price for this cart item, including item specific discounts. */
    private _totalPrice;
    /** Total net price for this cart item, including item specific discounts. */
    private _totalPriceNet;
    /** Gross sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price. */
    private _sum;
    /** Net sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price. */
    private _sumNet;
    /** Total gross sum of the main cart price and the prices of its child items. Including item specific discounts. */
    private _totalSum;
    /** Total net sum of the main cart price and the prices of its child items. Including item specific discounts. */
    private _totalSumNet;
    /** Quantity for this cart item  */
    private _quantity;
    /** Cart item's bundleId if applicable */
    private _bundleId?;
    /** Cart item's clusterId if applicable */
    private _clusterId?;
    /** Cart item's productId if applicable */
    private _productId?;
    /** Tax code for this cart item. */
    private _taxCode;
    /** Expected delivery date for this cart item. */
    private _deliveryDate?;
    /** Deadline for delivery of this cart item. */
    private _deliveryDeadline?;
    /** Discount applied to this cart item */
    private _discount;
    /** Discount percentage applied to this cart item */
    private _discountPercentage;
    /** List of surcharges for this cart item */
    private _surcharges?;
    /** Incentive that applied to this cart item */
    private _incentive?;
    /** product field */
    private _product;
    /**
     Creates a new instance of CartBaseItem
     */
    constructor(data?: Partial<CartBaseItem>);
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
     User notes on cart item level
     */
    get notes(): string | undefined;
    /**
     User notes on cart item level
     */
    set notes(value: string | undefined);
    /**
     Gross price per UOM of this cart item, no item specific discounts are applied to this price.
     */
    get price(): number;
    /**
     Gross price per UOM of this cart item, no item specific discounts are applied to this price.
     */
    set price(value: number);
    /**
     Net price per UOM of this cart item, no item specific discounts are applied to this price.
     */
    get priceNet(): number;
    /**
     Net price per UOM of this cart item, no item specific discounts are applied to this price.
     */
    set priceNet(value: number);
    /**
     Price mode for this cart item, if not set the platform default will be used.
     */
    get priceMode(): PriceMode | undefined;
    /**
     Price mode for this cart item, if not set the platform default will be used.
     */
    set priceMode(value: PriceMode | undefined);
    /**
     Total gross price for this cart item, including item specific discounts.
     */
    get totalPrice(): number;
    /**
     Total gross price for this cart item, including item specific discounts.
     */
    set totalPrice(value: number);
    /**
     Total net price for this cart item, including item specific discounts.
     */
    get totalPriceNet(): number;
    /**
     Total net price for this cart item, including item specific discounts.
     */
    set totalPriceNet(value: number);
    /**
     Gross sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price.
     */
    get sum(): number;
    /**
     Gross sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price.
     */
    set sum(value: number);
    /**
     Net sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price.
     */
    get sumNet(): number;
    /**
     Net sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price.
     */
    set sumNet(value: number);
    /**
     Total gross sum of the main cart price and the prices of its child items. Including item specific discounts.
     */
    get totalSum(): number;
    /**
     Total gross sum of the main cart price and the prices of its child items. Including item specific discounts.
     */
    set totalSum(value: number);
    /**
     Total net sum of the main cart price and the prices of its child items. Including item specific discounts.
     */
    get totalSumNet(): number;
    /**
     Total net sum of the main cart price and the prices of its child items. Including item specific discounts.
     */
    set totalSumNet(value: number);
    /**
     Quantity for this cart item
     */
    get quantity(): number;
    /**
     Quantity for this cart item
     */
    set quantity(value: number);
    /**
     Cart item's bundleId if applicable
     */
    get bundleId(): string | undefined;
    /**
     Cart item's bundleId if applicable
     */
    set bundleId(value: string | undefined);
    /**
     Cart item's clusterId if applicable
     */
    get clusterId(): number | undefined;
    /**
     Cart item's clusterId if applicable
     */
    set clusterId(value: number | undefined);
    /**
     Cart item's productId if applicable
     */
    get productId(): number | undefined;
    /**
     Cart item's productId if applicable
     */
    set productId(value: number | undefined);
    /**
     Tax code for this cart item.
     */
    get taxCode(): Taxcode;
    /**
     Tax code for this cart item.
     */
    set taxCode(value: Taxcode);
    /**
     Expected delivery date for this cart item.
     */
    get deliveryDate(): string | undefined;
    /**
     Expected delivery date for this cart item.
     */
    set deliveryDate(value: string | undefined);
    /**
     Deadline for delivery of this cart item.
     */
    get deliveryDeadline(): string | undefined;
    /**
     Deadline for delivery of this cart item.
     */
    set deliveryDeadline(value: string | undefined);
    /**
     Discount applied to this cart item
     */
    get discount(): number;
    /**
     Discount applied to this cart item
     */
    set discount(value: number);
    /**
     Discount percentage applied to this cart item
     */
    get discountPercentage(): number;
    /**
     Discount percentage applied to this cart item
     */
    set discountPercentage(value: number);
    /**
     List of surcharges for this cart item
     */
    get surcharges(): CartItemSurcharge[] | undefined;
    /**
     List of surcharges for this cart item
     */
    set surcharges(value: CartItemSurcharge[] | undefined);
    /**
     Incentive that applied to this cart item
     */
    get incentive(): CartItemIncentive | undefined;
    /**
     Incentive that applied to this cart item
     */
    set incentive(value: CartItemIncentive | undefined);
    /**
     product field
     */
    get product(): Product;
    /**
     product field
     */
    set product(value: Product);
}
//# sourceMappingURL=CartBaseItem.d.ts.map
import { Taxcode } from '../enum/Taxcode';
import { TenderItemIncentive } from './TenderItemIncentive';
import { TenderItemSurcharge } from './TenderItemSurcharge';
/**
 Object class for TenderBaseItem
 */
export declare class TenderBaseItem {
    /** Id of the tender item, this id can be used for update or delete mutation for this tender item */
    private _uuid;
    /** Id of the order item */
    private _orderItemId?;
    /** Tender/order item name */
    private _name;
    /** The tender/order item's productId, if applicable */
    private _productId;
    /** Tender/order item SKU */
    private _sku;
    /** The quantity for this tender/order item */
    private _quantity;
    /** Tender/order item supplier */
    private _supplier?;
    /** Tender/order item supplier code */
    private _supplierCode?;
    /** The gross sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding */
    private _price;
    /** The sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including */
    private _priceNet;
    /** The total gross price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding */
    private _totalPrice;
    /** The total price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including */
    private _totalPriceNet;
    /** The tax code for this tender/order item */
    private _taxCode;
    /** The tax percentage for this tender/order item */
    private _taxPercentage;
    /** Customer discount (%) */
    private _customerDiscountPercentage;
    /** Sales discount (%) */
    private _discountPercentage;
    /** Total discount (%) */
    private _totalDiscountPercentage;
    /** Default margin amount (list price). VAT excluding */
    private _marginAmount;
    /** Default margin percentage (list price) */
    private _marginPercentage;
    /** Margin amount. VAT excluding */
    private _saleMarginAmount;
    /** Margin percentage */
    private _saleMarginPercentage;
    /** Extra item discount (%) calculated based on tender/order total discount */
    private _attributedSaleDiscount;
    /** Margin percentage calculated based on tender/order total discount */
    private _attributedSaleMargin;
    /** Product list price per UOM of this tender/order item. VAT excluding */
    private _originalPrice;
    /** Product cost price per UOM of this tender/order item. VAT excluding */
    private _costPrice;
    /** Customer special price per UOM of this tender/order item. VAT excluding */
    private _customerPrice;
    /** Total amount of valuePoints that apply to this tender/order item */
    private _valuePoints?;
    /** The preferred delivery date for this order as requested by the user */
    private _expectedDeliveryDate?;
    /** The order item's ID in an external system */
    private _externalOrderitemId?;
    /** User notes on tender item level */
    private _notes?;
    /** The incentives applied to this tender item */
    private _incentive?;
    /** The surcharges applied to this tender item */
    private _surcharges?;
    /**
     Creates a new instance of TenderBaseItem
     */
    constructor(data?: Partial<TenderBaseItem>);
    /**
     Id of the tender item, this id can be used for update or delete mutation for this tender item
     */
    get uuid(): string;
    /**
     Id of the tender item, this id can be used for update or delete mutation for this tender item
     */
    set uuid(value: string);
    /**
     Id of the order item
     */
    get orderItemId(): number | undefined;
    /**
     Id of the order item
     */
    set orderItemId(value: number | undefined);
    /**
     Tender/order item name
     */
    get name(): string;
    /**
     Tender/order item name
     */
    set name(value: string);
    /**
     The tender/order item's productId, if applicable
     */
    get productId(): number;
    /**
     The tender/order item's productId, if applicable
     */
    set productId(value: number);
    /**
     Tender/order item SKU
     */
    get sku(): string;
    /**
     Tender/order item SKU
     */
    set sku(value: string);
    /**
     The quantity for this tender/order item
     */
    get quantity(): number;
    /**
     The quantity for this tender/order item
     */
    set quantity(value: number);
    /**
     Tender/order item supplier
     */
    get supplier(): string | undefined;
    /**
     Tender/order item supplier
     */
    set supplier(value: string | undefined);
    /**
     Tender/order item supplier code
     */
    get supplierCode(): string | undefined;
    /**
     Tender/order item supplier code
     */
    set supplierCode(value: string | undefined);
    /**
     The gross sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding
     */
    get price(): number;
    /**
     The gross sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding
     */
    set price(value: number);
    /**
     The sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including
     */
    get priceNet(): number;
    /**
     The sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including
     */
    set priceNet(value: number);
    /**
     The total gross price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding
     */
    get totalPrice(): number;
    /**
     The total gross price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding
     */
    set totalPrice(value: number);
    /**
     The total price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including
     */
    get totalPriceNet(): number;
    /**
     The total price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including
     */
    set totalPriceNet(value: number);
    /**
     The tax code for this tender/order item
     */
    get taxCode(): Taxcode;
    /**
     The tax code for this tender/order item
     */
    set taxCode(value: Taxcode);
    /**
     The tax percentage for this tender/order item
     */
    get taxPercentage(): number;
    /**
     The tax percentage for this tender/order item
     */
    set taxPercentage(value: number);
    /**
     Customer discount (%)
     */
    get customerDiscountPercentage(): number;
    /**
     Customer discount (%)
     */
    set customerDiscountPercentage(value: number);
    /**
     Sales discount (%)
     */
    get discountPercentage(): number;
    /**
     Sales discount (%)
     */
    set discountPercentage(value: number);
    /**
     Total discount (%)
     */
    get totalDiscountPercentage(): number;
    /**
     Total discount (%)
     */
    set totalDiscountPercentage(value: number);
    /**
     Default margin amount (list price). VAT excluding
     */
    get marginAmount(): number;
    /**
     Default margin amount (list price). VAT excluding
     */
    set marginAmount(value: number);
    /**
     Default margin percentage (list price)
     */
    get marginPercentage(): number;
    /**
     Default margin percentage (list price)
     */
    set marginPercentage(value: number);
    /**
     Margin amount. VAT excluding
     */
    get saleMarginAmount(): number;
    /**
     Margin amount. VAT excluding
     */
    set saleMarginAmount(value: number);
    /**
     Margin percentage
     */
    get saleMarginPercentage(): number;
    /**
     Margin percentage
     */
    set saleMarginPercentage(value: number);
    /**
     Extra item discount (%) calculated based on tender/order total discount
     */
    get attributedSaleDiscount(): number;
    /**
     Extra item discount (%) calculated based on tender/order total discount
     */
    set attributedSaleDiscount(value: number);
    /**
     Margin percentage calculated based on tender/order total discount
     */
    get attributedSaleMargin(): number;
    /**
     Margin percentage calculated based on tender/order total discount
     */
    set attributedSaleMargin(value: number);
    /**
     Product list price per UOM of this tender/order item. VAT excluding
     */
    get originalPrice(): number;
    /**
     Product list price per UOM of this tender/order item. VAT excluding
     */
    set originalPrice(value: number);
    /**
     Product cost price per UOM of this tender/order item. VAT excluding
     */
    get costPrice(): number;
    /**
     Product cost price per UOM of this tender/order item. VAT excluding
     */
    set costPrice(value: number);
    /**
     Customer special price per UOM of this tender/order item. VAT excluding
     */
    get customerPrice(): number;
    /**
     Customer special price per UOM of this tender/order item. VAT excluding
     */
    set customerPrice(value: number);
    /**
     Total amount of valuePoints that apply to this tender/order item
     */
    get valuePoints(): number | undefined;
    /**
     Total amount of valuePoints that apply to this tender/order item
     */
    set valuePoints(value: number | undefined);
    /**
     The preferred delivery date for this order as requested by the user
     */
    get expectedDeliveryDate(): string | undefined;
    /**
     The preferred delivery date for this order as requested by the user
     */
    set expectedDeliveryDate(value: string | undefined);
    /**
     The order item's ID in an external system
     */
    get externalOrderitemId(): string | undefined;
    /**
     The order item's ID in an external system
     */
    set externalOrderitemId(value: string | undefined);
    /**
     User notes on tender item level
     */
    get notes(): string | undefined;
    /**
     User notes on tender item level
     */
    set notes(value: string | undefined);
    /**
     The incentives applied to this tender item
     */
    get incentive(): TenderItemIncentive | undefined;
    /**
     The incentives applied to this tender item
     */
    set incentive(value: TenderItemIncentive | undefined);
    /**
     The surcharges applied to this tender item
     */
    get surcharges(): TenderItemSurcharge[] | undefined;
    /**
     The surcharges applied to this tender item
     */
    set surcharges(value: TenderItemSurcharge[] | undefined);
}
//# sourceMappingURL=TenderBaseItem.d.ts.map
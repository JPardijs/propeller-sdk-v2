import { OrderItemClass } from '../enum/OrderItemClass';
import { Taxcode } from '../enum/Taxcode';
import { YesNo } from '../enum/YesNo';
import { Source } from './Source';
import { Product } from './Product';
/**
 Object class for OrderItem
 */
export declare class OrderItem {
    /** The autoincerment ID for the OrderItem */
    private _id;
    /** The ID of the Order the OrderItem belongs to */
    private _orderId;
    /** The UUID for the OrderItem */
    private _uuid;
    /** The class of the orderItem. Either product, incentive, surcharge, postage, payment */
    private _class;
    /** The productId of the OrderItem */
    private _productId?;
    /** The ID of the parent OrderItem */
    private _parentOrderItemId?;
    /** The quantity of the OrderItem */
    private _quantity;
    /** The SKU of the product of the OrderItem */
    private _sku;
    /** Remarks by the customer for the OrderItem */
    private _notes?;
    /** The name of the product of the OrderItem */
    private _name;
    /** The supplier of the product of the OrderItem */
    private _supplier?;
    /** The supplierCode of the product of the OrderItem */
    private _supplierCode?;
    /** The manufacturer of the product of the OrderItem */
    private _manufacturer?;
    /** The manufacturerCode of the product of the OrderItem */
    private _manufacturerCode?;
    /** The eanCode of the product of the OrderItem */
    private _eanCode?;
    /** The original price of the OrderItem, before applying any discounts */
    private _originalPrice?;
    /** The calculated price per unit excluding tax */
    private _price;
    /** The total price of the OrderItem excluding tax */
    private _priceTotal;
    /** The calculated price per unit including tax */
    private _priceNet?;
    /** The total price of the OrderItem including tax */
    private _priceTotalNet?;
    /** The calculated customerPrice of the OrderItem at the time the order was placed */
    private _customerPrice?;
    /** The cost price of the OrderItem at the time the order was placed */
    private _costPrice?;
    /** The discount of the OrderItem */
    private _discount?;
    /** The total tax of the OrderItem */
    private _tax?;
    /** The tax percentage of the OrderItem */
    private _taxPercentage;
    /** The tax code of the OrderItem */
    private _taxCode;
    /** Is the OrderItem a bonusItem? */
    private _isBonus;
    /** The minimum quantity of the product of the OrderItem */
    private _minimumQuantity?;
    /** The unit of the product of the OrderItem */
    private _unit?;
    /** The package of the product of the OrderItem */
    private _package?;
    /** The package unit of the product of the OrderItem */
    private _packageUnit?;
    /** The package unit quantity of the product of the OrderItem */
    private _packageUnitQuantity?;
    /** The purchase unit of the product of the OrderItem */
    private _purchaseUnit?;
    /** The purchase minimum quantity of the product of the OrderItem */
    private _purchaseMinimumQuantity?;
    /** The requested delivery date for this orderline */
    private _requestDate?;
    /** sources field */
    private _sources?;
    /** product field */
    private _product?;
    /**
     Creates a new instance of OrderItem
     */
    constructor(data?: Partial<OrderItem>);
    /**
     The autoincerment ID for the OrderItem
     */
    get id(): number;
    /**
     The autoincerment ID for the OrderItem
     */
    set id(value: number);
    /**
     The ID of the Order the OrderItem belongs to
     */
    get orderId(): number;
    /**
     The ID of the Order the OrderItem belongs to
     */
    set orderId(value: number);
    /**
     The UUID for the OrderItem
     */
    get uuid(): string;
    /**
     The UUID for the OrderItem
     */
    set uuid(value: string);
    /**
     The class of the orderItem. Either product, incentive, surcharge, postage, payment
     */
    get class(): OrderItemClass;
    /**
     The class of the orderItem. Either product, incentive, surcharge, postage, payment
     */
    set class(value: OrderItemClass);
    /**
     The productId of the OrderItem
     */
    get productId(): number | undefined;
    /**
     The productId of the OrderItem
     */
    set productId(value: number | undefined);
    /**
     The ID of the parent OrderItem
     */
    get parentOrderItemId(): number | undefined;
    /**
     The ID of the parent OrderItem
     */
    set parentOrderItemId(value: number | undefined);
    /**
     The quantity of the OrderItem
     */
    get quantity(): number;
    /**
     The quantity of the OrderItem
     */
    set quantity(value: number);
    /**
     The SKU of the product of the OrderItem
     */
    get sku(): string;
    /**
     The SKU of the product of the OrderItem
     */
    set sku(value: string);
    /**
     Remarks by the customer for the OrderItem
     */
    get notes(): string | undefined;
    /**
     Remarks by the customer for the OrderItem
     */
    set notes(value: string | undefined);
    /**
     The name of the product of the OrderItem
     */
    get name(): string;
    /**
     The name of the product of the OrderItem
     */
    set name(value: string);
    /**
     The supplier of the product of the OrderItem
     */
    get supplier(): string | undefined;
    /**
     The supplier of the product of the OrderItem
     */
    set supplier(value: string | undefined);
    /**
     The supplierCode of the product of the OrderItem
     */
    get supplierCode(): string | undefined;
    /**
     The supplierCode of the product of the OrderItem
     */
    set supplierCode(value: string | undefined);
    /**
     The manufacturer of the product of the OrderItem
     */
    get manufacturer(): string | undefined;
    /**
     The manufacturer of the product of the OrderItem
     */
    set manufacturer(value: string | undefined);
    /**
     The manufacturerCode of the product of the OrderItem
     */
    get manufacturerCode(): string | undefined;
    /**
     The manufacturerCode of the product of the OrderItem
     */
    set manufacturerCode(value: string | undefined);
    /**
     The eanCode of the product of the OrderItem
     */
    get eanCode(): string | undefined;
    /**
     The eanCode of the product of the OrderItem
     */
    set eanCode(value: string | undefined);
    /**
     The original price of the OrderItem, before applying any discounts
     */
    get originalPrice(): number | undefined;
    /**
     The original price of the OrderItem, before applying any discounts
     */
    set originalPrice(value: number | undefined);
    /**
     The calculated price per unit excluding tax
     */
    get price(): number;
    /**
     The calculated price per unit excluding tax
     */
    set price(value: number);
    /**
     The total price of the OrderItem excluding tax
     */
    get priceTotal(): number;
    /**
     The total price of the OrderItem excluding tax
     */
    set priceTotal(value: number);
    /**
     The calculated price per unit including tax
     */
    get priceNet(): number | undefined;
    /**
     The calculated price per unit including tax
     */
    set priceNet(value: number | undefined);
    /**
     The total price of the OrderItem including tax
     */
    get priceTotalNet(): number | undefined;
    /**
     The total price of the OrderItem including tax
     */
    set priceTotalNet(value: number | undefined);
    /**
     The calculated customerPrice of the OrderItem at the time the order was placed
     */
    get customerPrice(): number | undefined;
    /**
     The calculated customerPrice of the OrderItem at the time the order was placed
     */
    set customerPrice(value: number | undefined);
    /**
     The cost price of the OrderItem at the time the order was placed
     */
    get costPrice(): number | undefined;
    /**
     The cost price of the OrderItem at the time the order was placed
     */
    set costPrice(value: number | undefined);
    /**
     The discount of the OrderItem
     */
    get discount(): number | undefined;
    /**
     The discount of the OrderItem
     */
    set discount(value: number | undefined);
    /**
     The total tax of the OrderItem
     */
    get tax(): number | undefined;
    /**
     The total tax of the OrderItem
     */
    set tax(value: number | undefined);
    /**
     The tax percentage of the OrderItem
     */
    get taxPercentage(): number;
    /**
     The tax percentage of the OrderItem
     */
    set taxPercentage(value: number);
    /**
     The tax code of the OrderItem
     */
    get taxCode(): Taxcode;
    /**
     The tax code of the OrderItem
     */
    set taxCode(value: Taxcode);
    /**
     Is the OrderItem a bonusItem?
     */
    get isBonus(): YesNo;
    /**
     Is the OrderItem a bonusItem?
     */
    set isBonus(value: YesNo);
    /**
     The minimum quantity of the product of the OrderItem
     */
    get minimumQuantity(): number | undefined;
    /**
     The minimum quantity of the product of the OrderItem
     */
    set minimumQuantity(value: number | undefined);
    /**
     The unit of the product of the OrderItem
     */
    get unit(): number | undefined;
    /**
     The unit of the product of the OrderItem
     */
    set unit(value: number | undefined);
    /**
     The package of the product of the OrderItem
     */
    get package(): string | undefined;
    /**
     The package of the product of the OrderItem
     */
    set package(value: string | undefined);
    /**
     The package unit of the product of the OrderItem
     */
    get packageUnit(): string | undefined;
    /**
     The package unit of the product of the OrderItem
     */
    set packageUnit(value: string | undefined);
    /**
     The package unit quantity of the product of the OrderItem
     */
    get packageUnitQuantity(): string | undefined;
    /**
     The package unit quantity of the product of the OrderItem
     */
    set packageUnitQuantity(value: string | undefined);
    /**
     The purchase unit of the product of the OrderItem
     */
    get purchaseUnit(): number | undefined;
    /**
     The purchase unit of the product of the OrderItem
     */
    set purchaseUnit(value: number | undefined);
    /**
     The purchase minimum quantity of the product of the OrderItem
     */
    get purchaseMinimumQuantity(): number | undefined;
    /**
     The purchase minimum quantity of the product of the OrderItem
     */
    set purchaseMinimumQuantity(value: number | undefined);
    /**
     The requested delivery date for this orderline
     */
    get requestDate(): string | undefined;
    /**
     The requested delivery date for this orderline
     */
    set requestDate(value: string | undefined);
    /**
     sources field
     */
    get sources(): Source[] | undefined;
    /**
     sources field
     */
    set sources(value: Source[] | undefined);
    /**
     product field
     */
    get product(): Product | undefined;
    /**
     product field
     */
    set product(value: Product | undefined);
}
//# sourceMappingURL=OrderItem.d.ts.map
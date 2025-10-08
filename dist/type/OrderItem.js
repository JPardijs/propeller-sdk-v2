"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
/**
 Object class for OrderItem
 */
class OrderItem {
    /**
     Creates a new instance of OrderItem
     */
    constructor(data = {}) {
        this._id = data.id;
        this._orderId = data.orderId;
        this._uuid = data.uuid;
        this._class = data.class;
        this._productId = data.productId;
        this._parentOrderItemId = data.parentOrderItemId;
        this._quantity = data.quantity;
        this._sku = data.sku;
        this._notes = data.notes;
        this._name = data.name;
        this._supplier = data.supplier;
        this._supplierCode = data.supplierCode;
        this._manufacturer = data.manufacturer;
        this._manufacturerCode = data.manufacturerCode;
        this._eanCode = data.eanCode;
        this._originalPrice = data.originalPrice;
        this._price = data.price;
        this._priceTotal = data.priceTotal;
        this._priceNet = data.priceNet;
        this._priceTotalNet = data.priceTotalNet;
        this._customerPrice = data.customerPrice;
        this._costPrice = data.costPrice;
        this._discount = data.discount;
        this._tax = data.tax;
        this._taxPercentage = data.taxPercentage;
        this._taxCode = data.taxCode;
        this._isBonus = data.isBonus;
        this._minimumQuantity = data.minimumQuantity;
        this._unit = data.unit;
        this._package = data.package;
        this._packageUnit = data.packageUnit;
        this._packageUnitQuantity = data.packageUnitQuantity;
        this._purchaseUnit = data.purchaseUnit;
        this._purchaseMinimumQuantity = data.purchaseMinimumQuantity;
        this._requestDate = data.requestDate;
        this._sources = data.sources;
        this._product = data.product;
    }
    /**
     The autoincerment ID for the OrderItem
     */
    get id() {
        return this._id;
    }
    /**
     The autoincerment ID for the OrderItem
     */
    set id(value) {
        this._id = value;
    }
    /**
     The ID of the Order the OrderItem belongs to
     */
    get orderId() {
        return this._orderId;
    }
    /**
     The ID of the Order the OrderItem belongs to
     */
    set orderId(value) {
        this._orderId = value;
    }
    /**
     The UUID for the OrderItem
     */
    get uuid() {
        return this._uuid;
    }
    /**
     The UUID for the OrderItem
     */
    set uuid(value) {
        this._uuid = value;
    }
    /**
     The class of the orderItem. Either product, incentive, surcharge, postage, payment
     */
    get class() {
        return this._class;
    }
    /**
     The class of the orderItem. Either product, incentive, surcharge, postage, payment
     */
    set class(value) {
        this._class = value;
    }
    /**
     The productId of the OrderItem
     */
    get productId() {
        return this._productId;
    }
    /**
     The productId of the OrderItem
     */
    set productId(value) {
        this._productId = value;
    }
    /**
     The ID of the parent OrderItem
     */
    get parentOrderItemId() {
        return this._parentOrderItemId;
    }
    /**
     The ID of the parent OrderItem
     */
    set parentOrderItemId(value) {
        this._parentOrderItemId = value;
    }
    /**
     The quantity of the OrderItem
     */
    get quantity() {
        return this._quantity;
    }
    /**
     The quantity of the OrderItem
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     The SKU of the product of the OrderItem
     */
    get sku() {
        return this._sku;
    }
    /**
     The SKU of the product of the OrderItem
     */
    set sku(value) {
        this._sku = value;
    }
    /**
     Remarks by the customer for the OrderItem
     */
    get notes() {
        return this._notes;
    }
    /**
     Remarks by the customer for the OrderItem
     */
    set notes(value) {
        this._notes = value;
    }
    /**
     The name of the product of the OrderItem
     */
    get name() {
        return this._name;
    }
    /**
     The name of the product of the OrderItem
     */
    set name(value) {
        this._name = value;
    }
    /**
     The supplier of the product of the OrderItem
     */
    get supplier() {
        return this._supplier;
    }
    /**
     The supplier of the product of the OrderItem
     */
    set supplier(value) {
        this._supplier = value;
    }
    /**
     The supplierCode of the product of the OrderItem
     */
    get supplierCode() {
        return this._supplierCode;
    }
    /**
     The supplierCode of the product of the OrderItem
     */
    set supplierCode(value) {
        this._supplierCode = value;
    }
    /**
     The manufacturer of the product of the OrderItem
     */
    get manufacturer() {
        return this._manufacturer;
    }
    /**
     The manufacturer of the product of the OrderItem
     */
    set manufacturer(value) {
        this._manufacturer = value;
    }
    /**
     The manufacturerCode of the product of the OrderItem
     */
    get manufacturerCode() {
        return this._manufacturerCode;
    }
    /**
     The manufacturerCode of the product of the OrderItem
     */
    set manufacturerCode(value) {
        this._manufacturerCode = value;
    }
    /**
     The eanCode of the product of the OrderItem
     */
    get eanCode() {
        return this._eanCode;
    }
    /**
     The eanCode of the product of the OrderItem
     */
    set eanCode(value) {
        this._eanCode = value;
    }
    /**
     The original price of the OrderItem, before applying any discounts
     */
    get originalPrice() {
        return this._originalPrice;
    }
    /**
     The original price of the OrderItem, before applying any discounts
     */
    set originalPrice(value) {
        this._originalPrice = value;
    }
    /**
     The calculated price per unit excluding tax
     */
    get price() {
        return this._price;
    }
    /**
     The calculated price per unit excluding tax
     */
    set price(value) {
        this._price = value;
    }
    /**
     The total price of the OrderItem excluding tax
     */
    get priceTotal() {
        return this._priceTotal;
    }
    /**
     The total price of the OrderItem excluding tax
     */
    set priceTotal(value) {
        this._priceTotal = value;
    }
    /**
     The calculated price per unit including tax
     */
    get priceNet() {
        return this._priceNet;
    }
    /**
     The calculated price per unit including tax
     */
    set priceNet(value) {
        this._priceNet = value;
    }
    /**
     The total price of the OrderItem including tax
     */
    get priceTotalNet() {
        return this._priceTotalNet;
    }
    /**
     The total price of the OrderItem including tax
     */
    set priceTotalNet(value) {
        this._priceTotalNet = value;
    }
    /**
     The calculated customerPrice of the OrderItem at the time the order was placed
     */
    get customerPrice() {
        return this._customerPrice;
    }
    /**
     The calculated customerPrice of the OrderItem at the time the order was placed
     */
    set customerPrice(value) {
        this._customerPrice = value;
    }
    /**
     The cost price of the OrderItem at the time the order was placed
     */
    get costPrice() {
        return this._costPrice;
    }
    /**
     The cost price of the OrderItem at the time the order was placed
     */
    set costPrice(value) {
        this._costPrice = value;
    }
    /**
     The discount of the OrderItem
     */
    get discount() {
        return this._discount;
    }
    /**
     The discount of the OrderItem
     */
    set discount(value) {
        this._discount = value;
    }
    /**
     The total tax of the OrderItem
     */
    get tax() {
        return this._tax;
    }
    /**
     The total tax of the OrderItem
     */
    set tax(value) {
        this._tax = value;
    }
    /**
     The tax percentage of the OrderItem
     */
    get taxPercentage() {
        return this._taxPercentage;
    }
    /**
     The tax percentage of the OrderItem
     */
    set taxPercentage(value) {
        this._taxPercentage = value;
    }
    /**
     The tax code of the OrderItem
     */
    get taxCode() {
        return this._taxCode;
    }
    /**
     The tax code of the OrderItem
     */
    set taxCode(value) {
        this._taxCode = value;
    }
    /**
     Is the OrderItem a bonusItem?
     */
    get isBonus() {
        return this._isBonus;
    }
    /**
     Is the OrderItem a bonusItem?
     */
    set isBonus(value) {
        this._isBonus = value;
    }
    /**
     The minimum quantity of the product of the OrderItem
     */
    get minimumQuantity() {
        return this._minimumQuantity;
    }
    /**
     The minimum quantity of the product of the OrderItem
     */
    set minimumQuantity(value) {
        this._minimumQuantity = value;
    }
    /**
     The unit of the product of the OrderItem
     */
    get unit() {
        return this._unit;
    }
    /**
     The unit of the product of the OrderItem
     */
    set unit(value) {
        this._unit = value;
    }
    /**
     The package of the product of the OrderItem
     */
    get package() {
        return this._package;
    }
    /**
     The package of the product of the OrderItem
     */
    set package(value) {
        this._package = value;
    }
    /**
     The package unit of the product of the OrderItem
     */
    get packageUnit() {
        return this._packageUnit;
    }
    /**
     The package unit of the product of the OrderItem
     */
    set packageUnit(value) {
        this._packageUnit = value;
    }
    /**
     The package unit quantity of the product of the OrderItem
     */
    get packageUnitQuantity() {
        return this._packageUnitQuantity;
    }
    /**
     The package unit quantity of the product of the OrderItem
     */
    set packageUnitQuantity(value) {
        this._packageUnitQuantity = value;
    }
    /**
     The purchase unit of the product of the OrderItem
     */
    get purchaseUnit() {
        return this._purchaseUnit;
    }
    /**
     The purchase unit of the product of the OrderItem
     */
    set purchaseUnit(value) {
        this._purchaseUnit = value;
    }
    /**
     The purchase minimum quantity of the product of the OrderItem
     */
    get purchaseMinimumQuantity() {
        return this._purchaseMinimumQuantity;
    }
    /**
     The purchase minimum quantity of the product of the OrderItem
     */
    set purchaseMinimumQuantity(value) {
        this._purchaseMinimumQuantity = value;
    }
    /**
     The requested delivery date for this orderline
     */
    get requestDate() {
        return this._requestDate;
    }
    /**
     The requested delivery date for this orderline
     */
    set requestDate(value) {
        this._requestDate = value;
    }
    /**
     sources field
     */
    get sources() {
        return this._sources;
    }
    /**
     sources field
     */
    set sources(value) {
        this._sources = value;
    }
    /**
     product field
     */
    get product() {
        return this._product;
    }
    /**
     product field
     */
    set product(value) {
        this._product = value;
    }
}
exports.OrderItem = OrderItem;
//# sourceMappingURL=OrderItem.js.map
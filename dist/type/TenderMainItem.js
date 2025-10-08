"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderMainItem = void 0;
/**
 Object class for TenderMainItem
 */
class TenderMainItem {
    /**
     Creates a new instance of TenderMainItem
     */
    constructor(data = {}) {
        this._productId = data.productId;
        this._product = data.product;
        this._uuid = data.uuid;
        this._orderItemId = data.orderItemId;
        this._name = data.name;
        this._sku = data.sku;
        this._quantity = data.quantity;
        this._supplier = data.supplier;
        this._supplierCode = data.supplierCode;
        this._price = data.price;
        this._priceNet = data.priceNet;
        this._totalPrice = data.totalPrice;
        this._totalPriceNet = data.totalPriceNet;
        this._taxCode = data.taxCode;
        this._taxPercentage = data.taxPercentage;
        this._customerDiscountPercentage = data.customerDiscountPercentage;
        this._discountPercentage = data.discountPercentage;
        this._totalDiscountPercentage = data.totalDiscountPercentage;
        this._marginAmount = data.marginAmount;
        this._marginPercentage = data.marginPercentage;
        this._saleMarginAmount = data.saleMarginAmount;
        this._saleMarginPercentage = data.saleMarginPercentage;
        this._attributedSaleDiscount = data.attributedSaleDiscount;
        this._attributedSaleMargin = data.attributedSaleMargin;
        this._originalPrice = data.originalPrice;
        this._costPrice = data.costPrice;
        this._customerPrice = data.customerPrice;
        this._valuePoints = data.valuePoints;
        this._expectedDeliveryDate = data.expectedDeliveryDate;
        this._externalOrderitemId = data.externalOrderitemId;
        this._notes = data.notes;
        this._incentive = data.incentive;
        this._surcharges = data.surcharges;
        this._childItems = data.childItems;
        this._sum = data.sum;
        this._sumNet = data.sumNet;
        this._totalSum = data.totalSum;
        this._totalSumNet = data.totalSumNet;
        this._discountPercentageSum = data.discountPercentageSum;
        this._totalDiscountPercentageSum = data.totalDiscountPercentageSum;
        this._saleMarginAmountSum = data.saleMarginAmountSum;
        this._saleMarginPercentageSum = data.saleMarginPercentageSum;
        this._attributedSaleDiscountSum = data.attributedSaleDiscountSum;
        this._attributedSaleMarginSum = data.attributedSaleMarginSum;
    }
    /**
     The tender/order item's productId, if applicable
     */
    get productId() {
        return this._productId;
    }
    /**
     The tender/order item's productId, if applicable
     */
    set productId(value) {
        this._productId = value;
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
    /**
     Id of the tender item, this id can be used for update or delete mutation for this tender item
     */
    get uuid() {
        return this._uuid;
    }
    /**
     Id of the tender item, this id can be used for update or delete mutation for this tender item
     */
    set uuid(value) {
        this._uuid = value;
    }
    /**
     Id of the order item
     */
    get orderItemId() {
        return this._orderItemId;
    }
    /**
     Id of the order item
     */
    set orderItemId(value) {
        this._orderItemId = value;
    }
    /**
     Tender/order item name
     */
    get name() {
        return this._name;
    }
    /**
     Tender/order item name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Tender/order item SKU
     */
    get sku() {
        return this._sku;
    }
    /**
     Tender/order item SKU
     */
    set sku(value) {
        this._sku = value;
    }
    /**
     The quantity for this tender/order item
     */
    get quantity() {
        return this._quantity;
    }
    /**
     The quantity for this tender/order item
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     Tender/order item supplier
     */
    get supplier() {
        return this._supplier;
    }
    /**
     Tender/order item supplier
     */
    set supplier(value) {
        this._supplier = value;
    }
    /**
     Tender/order item supplier code
     */
    get supplierCode() {
        return this._supplierCode;
    }
    /**
     Tender/order item supplier code
     */
    set supplierCode(value) {
        this._supplierCode = value;
    }
    /**
     The gross sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding
     */
    get price() {
        return this._price;
    }
    /**
     The gross sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding
     */
    set price(value) {
        this._price = value;
    }
    /**
     The sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including
     */
    get priceNet() {
        return this._priceNet;
    }
    /**
     The sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including
     */
    set priceNet(value) {
        this._priceNet = value;
    }
    /**
     The total gross price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding
     */
    get totalPrice() {
        return this._totalPrice;
    }
    /**
     The total gross price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding
     */
    set totalPrice(value) {
        this._totalPrice = value;
    }
    /**
     The total price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including
     */
    get totalPriceNet() {
        return this._totalPriceNet;
    }
    /**
     The total price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including
     */
    set totalPriceNet(value) {
        this._totalPriceNet = value;
    }
    /**
     The tax code for this tender/order item
     */
    get taxCode() {
        return this._taxCode;
    }
    /**
     The tax code for this tender/order item
     */
    set taxCode(value) {
        this._taxCode = value;
    }
    /**
     The tax percentage for this tender/order item
     */
    get taxPercentage() {
        return this._taxPercentage;
    }
    /**
     The tax percentage for this tender/order item
     */
    set taxPercentage(value) {
        this._taxPercentage = value;
    }
    /**
     Customer discount (%)
     */
    get customerDiscountPercentage() {
        return this._customerDiscountPercentage;
    }
    /**
     Customer discount (%)
     */
    set customerDiscountPercentage(value) {
        this._customerDiscountPercentage = value;
    }
    /**
     Sales discount (%)
     */
    get discountPercentage() {
        return this._discountPercentage;
    }
    /**
     Sales discount (%)
     */
    set discountPercentage(value) {
        this._discountPercentage = value;
    }
    /**
     Total discount (%)
     */
    get totalDiscountPercentage() {
        return this._totalDiscountPercentage;
    }
    /**
     Total discount (%)
     */
    set totalDiscountPercentage(value) {
        this._totalDiscountPercentage = value;
    }
    /**
     Default margin amount (list price). VAT excluding
     */
    get marginAmount() {
        return this._marginAmount;
    }
    /**
     Default margin amount (list price). VAT excluding
     */
    set marginAmount(value) {
        this._marginAmount = value;
    }
    /**
     Default margin percentage (list price)
     */
    get marginPercentage() {
        return this._marginPercentage;
    }
    /**
     Default margin percentage (list price)
     */
    set marginPercentage(value) {
        this._marginPercentage = value;
    }
    /**
     Margin amount. VAT excluding
     */
    get saleMarginAmount() {
        return this._saleMarginAmount;
    }
    /**
     Margin amount. VAT excluding
     */
    set saleMarginAmount(value) {
        this._saleMarginAmount = value;
    }
    /**
     Margin percentage
     */
    get saleMarginPercentage() {
        return this._saleMarginPercentage;
    }
    /**
     Margin percentage
     */
    set saleMarginPercentage(value) {
        this._saleMarginPercentage = value;
    }
    /**
     Extra item discount (%) calculated based on tender/order total discount
     */
    get attributedSaleDiscount() {
        return this._attributedSaleDiscount;
    }
    /**
     Extra item discount (%) calculated based on tender/order total discount
     */
    set attributedSaleDiscount(value) {
        this._attributedSaleDiscount = value;
    }
    /**
     Margin percentage calculated based on tender/order total discount
     */
    get attributedSaleMargin() {
        return this._attributedSaleMargin;
    }
    /**
     Margin percentage calculated based on tender/order total discount
     */
    set attributedSaleMargin(value) {
        this._attributedSaleMargin = value;
    }
    /**
     Product list price per UOM of this tender/order item. VAT excluding
     */
    get originalPrice() {
        return this._originalPrice;
    }
    /**
     Product list price per UOM of this tender/order item. VAT excluding
     */
    set originalPrice(value) {
        this._originalPrice = value;
    }
    /**
     Product cost price per UOM of this tender/order item. VAT excluding
     */
    get costPrice() {
        return this._costPrice;
    }
    /**
     Product cost price per UOM of this tender/order item. VAT excluding
     */
    set costPrice(value) {
        this._costPrice = value;
    }
    /**
     Customer special price per UOM of this tender/order item. VAT excluding
     */
    get customerPrice() {
        return this._customerPrice;
    }
    /**
     Customer special price per UOM of this tender/order item. VAT excluding
     */
    set customerPrice(value) {
        this._customerPrice = value;
    }
    /**
     Total amount of valuePoints that apply to this tender/order item
     */
    get valuePoints() {
        return this._valuePoints;
    }
    /**
     Total amount of valuePoints that apply to this tender/order item
     */
    set valuePoints(value) {
        this._valuePoints = value;
    }
    /**
     The preferred delivery date for this order as requested by the user
     */
    get expectedDeliveryDate() {
        return this._expectedDeliveryDate;
    }
    /**
     The preferred delivery date for this order as requested by the user
     */
    set expectedDeliveryDate(value) {
        this._expectedDeliveryDate = value;
    }
    /**
     The order item's ID in an external system
     */
    get externalOrderitemId() {
        return this._externalOrderitemId;
    }
    /**
     The order item's ID in an external system
     */
    set externalOrderitemId(value) {
        this._externalOrderitemId = value;
    }
    /**
     User notes on tender item level
     */
    get notes() {
        return this._notes;
    }
    /**
     User notes on tender item level
     */
    set notes(value) {
        this._notes = value;
    }
    /**
     incentive field
     */
    get incentive() {
        return this._incentive;
    }
    /**
     incentive field
     */
    set incentive(value) {
        this._incentive = value;
    }
    /**
     surcharges field
     */
    get surcharges() {
        return this._surcharges;
    }
    /**
     surcharges field
     */
    set surcharges(value) {
        this._surcharges = value;
    }
    /**
     The tender/order item's child items. E.g. surcharges, incentives, etc.
     */
    get childItems() {
        return this._childItems;
    }
    /**
     The tender/order item's child items. E.g. surcharges, incentives, etc.
     */
    set childItems(value) {
        this._childItems = value;
    }
    /**
     The gross price per UOM of this tender/order item, with item specific incentives and extra costs applied to this price. VAT excluding
     */
    get sum() {
        return this._sum;
    }
    /**
     The gross price per UOM of this tender/order item, with item specific incentives and extra costs applied to this price. VAT excluding
     */
    set sum(value) {
        this._sum = value;
    }
    /**
     The price per UOM of this tender/order item, with item specific incentives and extra costs applied to this price. VAT including
     */
    get sumNet() {
        return this._sumNet;
    }
    /**
     The price per UOM of this tender/order item, with item specific incentives and extra costs applied to this price. VAT including
     */
    set sumNet(value) {
        this._sumNet = value;
    }
    /**
     The total gross price of this tender/order item, with item specific incentives and extra costs applied to this price. VAT excluding
     */
    get totalSum() {
        return this._totalSum;
    }
    /**
     The total gross price of this tender/order item, with item specific incentives and extra costs applied to this price. VAT excluding
     */
    set totalSum(value) {
        this._totalSum = value;
    }
    /**
     The total price of this tender/order item, with item specific incentives and extra costs applied to this price. VAT including
     */
    get totalSumNet() {
        return this._totalSumNet;
    }
    /**
     The total price of this tender/order item, with item specific incentives and extra costs applied to this price. VAT including
     */
    set totalSumNet(value) {
        this._totalSumNet = value;
    }
    /**
     Sales discount (%). Includes item specific incentives and extra costs
     */
    get discountPercentageSum() {
        return this._discountPercentageSum;
    }
    /**
     Sales discount (%). Includes item specific incentives and extra costs
     */
    set discountPercentageSum(value) {
        this._discountPercentageSum = value;
    }
    /**
     Total discount (%). Includes item specific incentives and extra costs
     */
    get totalDiscountPercentageSum() {
        return this._totalDiscountPercentageSum;
    }
    /**
     Total discount (%). Includes item specific incentives and extra costs
     */
    set totalDiscountPercentageSum(value) {
        this._totalDiscountPercentageSum = value;
    }
    /**
     Margin amount. Includes item specific incentives and extra costs. VAT excluding
     */
    get saleMarginAmountSum() {
        return this._saleMarginAmountSum;
    }
    /**
     Margin amount. Includes item specific incentives and extra costs. VAT excluding
     */
    set saleMarginAmountSum(value) {
        this._saleMarginAmountSum = value;
    }
    /**
     Margin percentage. Includes item specific incentives and extra costs
     */
    get saleMarginPercentageSum() {
        return this._saleMarginPercentageSum;
    }
    /**
     Margin percentage. Includes item specific incentives and extra costs
     */
    set saleMarginPercentageSum(value) {
        this._saleMarginPercentageSum = value;
    }
    /**
     Extra item discount (%) calculated based on tender/order total discount. Includes item specific incentives and extra costs
     */
    get attributedSaleDiscountSum() {
        return this._attributedSaleDiscountSum;
    }
    /**
     Extra item discount (%) calculated based on tender/order total discount. Includes item specific incentives and extra costs
     */
    set attributedSaleDiscountSum(value) {
        this._attributedSaleDiscountSum = value;
    }
    /**
     Margin percentage calculated based on tender/order total discount. Includes item specific incentives and extra costs
     */
    get attributedSaleMarginSum() {
        return this._attributedSaleMarginSum;
    }
    /**
     Margin percentage calculated based on tender/order total discount. Includes item specific incentives and extra costs
     */
    set attributedSaleMarginSum(value) {
        this._attributedSaleMarginSum = value;
    }
}
exports.TenderMainItem = TenderMainItem;
//# sourceMappingURL=TenderMainItem.js.map
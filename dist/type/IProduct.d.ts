/**
 Base interface for product entities
 */
export interface IProduct {
    /** Product identifier */
    id: number;
    /** Product name */
    name: string;
    /** Product description */
    description?: string;
    /** Product SKU */
    sku: string;
    /** Whether the product is enabled */
    enabled: boolean;
    /** Product price */
    price?: number;
}
//# sourceMappingURL=IProduct.d.ts.map
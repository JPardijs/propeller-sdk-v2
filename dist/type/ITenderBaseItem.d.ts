/**
 Base interface for tender base item entities
 */
export interface ITenderBaseItem {
    /** Item identifier */
    uuid: string;
    /** Product identifier */
    productId?: number;
    /** Item quantity */
    quantity: number;
    /** Item price */
    price: number;
    /** Item description */
    description?: string;
}
//# sourceMappingURL=ITenderBaseItem.d.ts.map
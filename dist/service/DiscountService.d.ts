import { BaseService } from './BaseService';
import { Discount } from '../type/Discount';
import { DiscountResponse } from '../type/DiscountResponse';
import { DiscountSearchInput } from '../type/DiscountSearchInput';
import { DiscountCreateInput } from '../type/DiscountCreateInput';
import { DiscountUpdateInput } from '../type/DiscountUpdateInput';
import { DiscountCsvInput } from '../type/DiscountCsvInput';
/**
 Service class for Discount-related GraphQL operations
 */
export declare class DiscountService extends BaseService {
    /**
     Fetches a single discount by ID
     * @param id Discount ID to fetch
     * @returns Promise<Discount> The discount data
     */
    getDiscount(id: number): Promise<Discount>;
    /**
     Fetches a list of discounts with search criteria
     * @param input Discount search input parameters
     * @returns Promise<DiscountResponse> The discounts response data
     */
    getDiscounts(input?: DiscountSearchInput): Promise<DiscountResponse>;
    /**
     Creates a new discount
     * @param input Discount creation input data
     * @returns Promise<Discount> The created discount
     */
    createDiscount(input: DiscountCreateInput): Promise<Discount>;
    /**
     Updates an existing discount
     * @param input Discount update input data
     * @returns Promise<Discount> The updated discount
     */
    updateDiscount(input: DiscountUpdateInput): Promise<Discount>;
    /**
     Imports discounts from CSV
     * @param input Discount CSV import input data
     * @returns Promise<any> The import response
     */
    importDiscountsCsv(input: DiscountCsvInput): Promise<any>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=DiscountService.d.ts.map
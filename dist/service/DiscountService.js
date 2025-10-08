"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountService = void 0;
const BaseService_1 = require("./BaseService");
const Discount_1 = require("../type/Discount");
const DiscountResponse_1 = require("../type/DiscountResponse");
/**
 Service class for Discount-related GraphQL operations
 */
class DiscountService extends BaseService_1.BaseService {
    /**
     Fetches a single discount by ID
     * @param id Discount ID to fetch
     * @returns Promise<Discount> The discount data
     */
    async getDiscount(id) {
        const variables = { id };
        const result = await this.executeQuery('discount', variables);
        return new Discount_1.Discount(result.data.discount);
    }
    /**
     Fetches a list of discounts with search criteria
     * @param input Discount search input parameters
     * @returns Promise<DiscountResponse> The discounts response data
     */
    async getDiscounts(input) {
        const variables = { input };
        const result = await this.executeQuery('discounts', variables);
        return new DiscountResponse_1.DiscountResponse(result.data.discounts);
    }
    /**
     Creates a new discount
     * @param input Discount creation input data
     * @returns Promise<Discount> The created discount
     */
    async createDiscount(input) {
        const variables = { input };
        const result = await this.executeMutation('discountCreate', variables);
        return new Discount_1.Discount(result.data.discountCreate);
    }
    /**
     Updates an existing discount
     * @param input Discount update input data
     * @returns Promise<Discount> The updated discount
     */
    async updateDiscount(input) {
        const variables = { input };
        const result = await this.executeMutation('discountUpdate', variables);
        return new Discount_1.Discount(result.data.discountUpdate);
    }
    /**
     Imports discounts from CSV
     * @param input Discount CSV import input data
     * @returns Promise<any> The import response
     */
    async importDiscountsCsv(input) {
        const variables = { input };
        const result = await this.executeMutation('discountCsvImport', variables);
        return result.data.discountCsvImport;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.DiscountService = DiscountService;
//# sourceMappingURL=DiscountService.js.map
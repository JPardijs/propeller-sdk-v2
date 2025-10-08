"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurchargeService = void 0;
const BaseService_1 = require("./BaseService");
const Surcharge_1 = require("../type/Surcharge");
const SurchargesResponse_1 = require("../type/SurchargesResponse");
/**
 Service class for Surcharge-related GraphQL operations
 */
class SurchargeService extends BaseService_1.BaseService {
    /**
     Fetches a single surcharge by ID
     * @param id Surcharge ID to fetch
     * @returns Promise<Surcharge> The surcharge data
     */
    async getSurcharge(id) {
        const variables = { id };
        const result = await this.executeQuery('surcharge', variables);
        return new Surcharge_1.Surcharge(result.data.surcharge);
    }
    /**
     Fetches a list of surcharges with search criteria
     * @param input Surcharge search input parameters
     * @returns Promise<SurchargesResponse> The surcharges response data
     */
    async getSurcharges(input) {
        const variables = { input };
        const result = await this.executeQuery('surcharges', variables);
        return new SurchargesResponse_1.SurchargesResponse(result.data.surcharges);
    }
    /**
     Creates a new surcharge
     * @param input Surcharge creation input data
     * @returns Promise<Surcharge> The created surcharge
     */
    async createSurcharge(input) {
        const variables = { input };
        const result = await this.executeMutation('surchargeCreate', variables);
        return new Surcharge_1.Surcharge(result.data.surchargeCreate);
    }
    /**
     Updates an existing surcharge
     * @param input Surcharge update input data
     * @returns Promise<Surcharge> The updated surcharge
     */
    async updateSurcharge(input) {
        const variables = { input };
        const result = await this.executeMutation('surchargeUpdate', variables);
        return new Surcharge_1.Surcharge(result.data.surchargeUpdate);
    }
    /**
     Deletes a surcharge
     * @param id Surcharge ID to delete
     * @returns Promise<boolean> Success status
     */
    async deleteSurcharge(id) {
        const variables = { id };
        const result = await this.executeMutation('surchargeDelete', variables);
        return result.data.surchargeDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.SurchargeService = SurchargeService;
//# sourceMappingURL=SurchargeService.js.map
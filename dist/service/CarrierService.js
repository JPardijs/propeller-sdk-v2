"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrierService = void 0;
const BaseService_1 = require("./BaseService");
const Carrier_1 = require("../type/Carrier");
const CarriersResponse_1 = require("../type/CarriersResponse");
/**
 Service class for Carrier-related GraphQL operations
 */
class CarrierService extends BaseService_1.BaseService {
    /**
     Fetches a single carrier by ID
     * @param id Carrier ID to fetch
     * @returns Promise<Carrier> The carrier data
     */
    async getCarrier(id) {
        const variables = { id };
        const result = await this.executeQuery('carrier', variables);
        return new Carrier_1.Carrier(result.data.carrier);
    }
    /**
     Fetches a list of carriers with search criteria
     * @param input Carrier search input parameters
     * @returns Promise<CarriersResponse> The carriers response data
     */
    async getCarriers(input) {
        const variables = { input };
        const result = await this.executeQuery('carriers', variables);
        return new CarriersResponse_1.CarriersResponse(result.data.carriers);
    }
    /**
     Creates a new carrier
     * @param input Carrier creation input data
     * @returns Promise<Carrier> The created carrier
     */
    async createCarrier(input) {
        const variables = { input };
        const result = await this.executeMutation('carrierCreate', variables);
        return new Carrier_1.Carrier(result.data.carrierCreate);
    }
    /**
     Updates an existing carrier
     * @param input Carrier update input data
     * @returns Promise<Carrier> The updated carrier
     */
    async updateCarrier(input) {
        const variables = { input };
        const result = await this.executeMutation('carrierUpdate', variables);
        return new Carrier_1.Carrier(result.data.carrierUpdate);
    }
    /**
     Deletes a carrier
     * @param id Carrier ID to delete
     * @returns Promise<boolean> Success status
     */
    async deleteCarrier(id) {
        const variables = { id };
        const result = await this.executeMutation('carrierDelete', variables);
        return result.data.carrierDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.CarrierService = CarrierService;
//# sourceMappingURL=CarrierService.js.map
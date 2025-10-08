"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalAddressService = void 0;
const BaseService_1 = require("./BaseService");
const ExternalAddress_1 = require("../type/ExternalAddress");
/**
 Service for managing external addresses
 * @extends BaseService
 */
class ExternalAddressService extends BaseService_1.BaseService {
    /**
     Retrieves a specific external address
     * @param id External address ID
     * @returns Promise<ExternalAddress> External address data
     */
    async getExternalAddress(id) {
        const variables = { id };
        const result = await this.executeQuery('externalAddress', variables);
        return new ExternalAddress_1.ExternalAddress(result.data.externalAddress);
    }
    /**
     Creates a new external address
     * @param input External address creation input
     * @returns Promise<ExternalAddress> The created external address
     */
    async createExternalAddress(input) {
        const variables = { input };
        const result = await this.executeMutation('externalAddressCreate', variables);
        return new ExternalAddress_1.ExternalAddress(result.data.externalAddressCreate);
    }
    /**
     Updates an existing external address
     * @param input External address update input
     * @returns Promise<ExternalAddress> The updated external address
     */
    async updateExternalAddress(input) {
        const variables = { input };
        const result = await this.executeMutation('externalAddressUpdate', variables);
        return new ExternalAddress_1.ExternalAddress(result.data.externalAddressUpdate);
    }
    /**
     Deletes an external address
     * @param input External address delete input
     * @returns Promise<boolean> Success status
     */
    async deleteExternalAddress(input) {
        const variables = { input };
        const result = await this.executeMutation('externalAddressDelete', variables);
        return result.data.externalAddressDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.ExternalAddressService = ExternalAddressService;
//# sourceMappingURL=ExternalAddressService.js.map
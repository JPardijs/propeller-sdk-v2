"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseAuthorizationConfigService = void 0;
const BaseService_1 = require("./BaseService");
const PurchaseAuthorizationConfig_1 = require("../type/PurchaseAuthorizationConfig");
const PurchaseAuthorizationConfigResponse_1 = require("../type/PurchaseAuthorizationConfigResponse");
/**
 Service for managing purchase authorization configurations
 * @extends BaseService
 */
class PurchaseAuthorizationConfigService extends BaseService_1.BaseService {
    /**
     Retrieves a specific purchase authorization configuration
     * @param id Configuration ID
     * @returns Promise<PurchaseAuthorizationConfig> Purchase authorization configuration data
     */
    async getPurchaseAuthorizationConfig(id) {
        const variables = { id };
        const result = await this.executeQuery('purchaseAuthorizationConfig', variables);
        return new PurchaseAuthorizationConfig_1.PurchaseAuthorizationConfig(result.data.purchaseAuthorizationConfig);
    }
    /**
     Retrieves purchase authorization configurations with search
     * @param input Search input parameters
     * @returns Promise<PurchaseAuthorizationConfigResponse[]> List of purchase authorization configurations
     */
    async getPurchaseAuthorizationConfigs(input) {
        const variables = { input };
        const result = await this.executeQuery('purchaseAuthorizationConfigs', variables);
        return result.data.purchaseAuthorizationConfigs.map((config) => new PurchaseAuthorizationConfigResponse_1.PurchaseAuthorizationConfigResponse(config));
    }
    /**
     Creates a new purchase authorization configuration
     * @param input Configuration creation input
     * @returns Promise<PurchaseAuthorizationConfig> The created configuration
     */
    async createPurchaseAuthorizationConfig(input) {
        const variables = { input };
        const result = await this.executeMutation('purchaseAuthorizationConfigCreate', variables);
        return new PurchaseAuthorizationConfig_1.PurchaseAuthorizationConfig(result.data.purchaseAuthorizationConfigCreate);
    }
    /**
     Updates an existing purchase authorization configuration
     * @param input Configuration update input
     * @returns Promise<PurchaseAuthorizationConfig> The updated configuration
     */
    async updatePurchaseAuthorizationConfig(input) {
        const variables = { input };
        const result = await this.executeMutation('purchaseAuthorizationConfigUpdate', variables);
        return new PurchaseAuthorizationConfig_1.PurchaseAuthorizationConfig(result.data.purchaseAuthorizationConfigUpdate);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.PurchaseAuthorizationConfigService = PurchaseAuthorizationConfigService;
//# sourceMappingURL=PurchaseAuthorizationConfigService.js.map
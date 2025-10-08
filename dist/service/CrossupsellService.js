"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossupsellService = void 0;
const BaseService_1 = require("./BaseService");
const Crossupsell_1 = require("../type/Crossupsell");
const CrossupsellsResponse_1 = require("../type/CrossupsellsResponse");
/**
 Service class for Crossupsell-related GraphQL operations
 */
class CrossupsellService extends BaseService_1.BaseService {
    /**
     Fetches a single crossupsell by ID
     * @param id Crossupsell ID to fetch
     * @returns Promise<Crossupsell> The crossupsell data
     */
    async getCrossupsell(id) {
        const variables = { id };
        const result = await this.executeQuery('crossupsell', variables);
        return new Crossupsell_1.Crossupsell(result.data.crossupsell);
    }
    /**
     Fetches a list of crossupsells with search criteria
     * @param input Crossupsell search input parameters
     * @returns Promise<CrossupsellsResponse> The crossupsells response data
     */
    async getCrossupsells(input) {
        const variables = { input };
        const result = await this.executeQuery('crossupsells', variables);
        return new CrossupsellsResponse_1.CrossupsellsResponse(result.data.crossupsells);
    }
    /**
     Creates a new crossupsell
     * @param input Crossupsell creation input data
     * @returns Promise<Crossupsell> The created crossupsell
     */
    async createCrossupsell(input) {
        const variables = { input };
        const result = await this.executeMutation('crossupsellCreate', variables);
        return new Crossupsell_1.Crossupsell(result.data.crossupsellCreate);
    }
    /**
     Updates an existing crossupsell
     * @param input Crossupsell update input data
     * @returns Promise<Crossupsell> The updated crossupsell
     */
    async updateCrossupsell(input) {
        const variables = { input };
        const result = await this.executeMutation('crossupsellUpdate', variables);
        return new Crossupsell_1.Crossupsell(result.data.crossupsellUpdate);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.CrossupsellService = CrossupsellService;
//# sourceMappingURL=CrossupsellService.js.map
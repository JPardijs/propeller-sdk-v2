"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxService = void 0;
const BaseService_1 = require("./BaseService");
const Tax_1 = require("../type/Tax");
const TaxesResponse_1 = require("../type/TaxesResponse");
const ZoneTaxCode_1 = require("../type/ZoneTaxCode");
const ZoneTaxCodeResponse_1 = require("../type/ZoneTaxCodeResponse");
/**
 Service for managing tax and zone tax code operations
 * @extends BaseService
 */
class TaxService extends BaseService_1.BaseService {
    /**
     Retrieves a specific tax
     * @param id Tax ID
     * @returns Promise<Tax> Tax data
     */
    async getTax(id) {
        const variables = { id };
        const result = await this.executeQuery('tax', variables);
        return new Tax_1.Tax(result.data.tax);
    }
    /**
     Retrieves taxes with search criteria
     * @param input Search input parameters
     * @returns Promise<TaxesResponse> Taxes response
     */
    async getTaxes(input) {
        const variables = { input };
        const result = await this.executeQuery('taxes', variables);
        return new TaxesResponse_1.TaxesResponse(result.data.taxes);
    }
    /**
     Creates a new tax
     * @param input Tax creation input
     * @returns Promise<Tax> The created tax
     */
    async createTax(input) {
        const variables = { input };
        const result = await this.executeMutation('taxCreate', variables);
        return new Tax_1.Tax(result.data.taxCreate);
    }
    /**
     Updates an existing tax
     * @param input Tax update input
     * @returns Promise<Tax> The updated tax
     */
    async updateTax(input) {
        const variables = { input };
        const result = await this.executeMutation('taxUpdate', variables);
        return new Tax_1.Tax(result.data.taxUpdate);
    }
    /**
     Retrieves a specific zone tax code
     * @param id Zone tax code ID
     * @returns Promise<ZoneTaxCode> Zone tax code data
     */
    async getZoneTaxCode(id) {
        const variables = { id };
        const result = await this.executeQuery('zoneTaxCode', variables);
        return new ZoneTaxCode_1.ZoneTaxCode(result.data.zoneTaxCode);
    }
    /**
     Retrieves zone tax codes with search criteria
     * @param input Search input parameters
     * @returns Promise<ZoneTaxCodeResponse> Zone tax codes response
     */
    async getZoneTaxCodes(input) {
        const variables = { input };
        const result = await this.executeQuery('zoneTaxCodes', variables);
        return new ZoneTaxCodeResponse_1.ZoneTaxCodeResponse(result.data.zoneTaxCodes);
    }
    /**
     Creates a new zone tax code
     * @param input Zone tax code creation input
     * @returns Promise<ZoneTaxCode> The created zone tax code
     */
    async createZoneTaxCode(input) {
        const variables = { input };
        const result = await this.executeMutation('zoneTaxCodeCreate', variables);
        return new ZoneTaxCode_1.ZoneTaxCode(result.data.zoneTaxCodeCreate);
    }
    /**
     Creates multiple zone tax codes
     * @param input Array of zone tax code creation inputs
     * @returns Promise<ZoneTaxCode[]> Array of created zone tax codes
     */
    async createZoneTaxCodes(input) {
        const variables = { input };
        const result = await this.executeMutation('zoneTaxCodesCreate', variables);
        return result.data.zoneTaxCodesCreate.map((zoneTaxCode) => new ZoneTaxCode_1.ZoneTaxCode(zoneTaxCode));
    }
    /**
     Updates an existing zone tax code
     * @param input Zone tax code update input
     * @returns Promise<ZoneTaxCode> The updated zone tax code
     */
    async updateZoneTaxCode(input) {
        const variables = { input };
        const result = await this.executeMutation('zoneTaxCodeUpdate', variables);
        return new ZoneTaxCode_1.ZoneTaxCode(result.data.zoneTaxCodeUpdate);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.TaxService = TaxService;
//# sourceMappingURL=TaxService.js.map
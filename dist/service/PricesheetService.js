"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricesheetService = void 0;
const BaseService_1 = require("./BaseService");
const Pricesheet_1 = require("../type/Pricesheet");
const PricesheetResponse_1 = require("../type/PricesheetResponse");
const CsvImportResponse_1 = require("../type/CsvImportResponse");
/**
 Service class for Pricesheet-related GraphQL operations
 */
class PricesheetService extends BaseService_1.BaseService {
    /**
     Fetches a list of pricesheets with search criteria
     * @param input Pricesheet search input parameters
     * @returns Promise<PricesheetResponse> The pricesheets response data
     */
    async getPricesheets(input) {
        const variables = { input };
        const result = await this.executeQuery('pricesheets', variables);
        return new PricesheetResponse_1.PricesheetResponse(result.data.pricesheets);
    }
    /**
     Fetches a single pricesheet by ID
     * @param variables Variables for the pricesheet query
     * - id: string - Pricesheet ID to fetch
     * @returns Promise<Pricesheet> The pricesheet data
     */
    async getPricesheet(variables) {
        const result = await this.executeQuery('pricesheet', variables);
        return new Pricesheet_1.Pricesheet(result.data.pricesheet);
    }
    /**
     Creates a new pricesheet
     * @param input Pricesheet creation input data
     * @returns Promise<Pricesheet> The created pricesheet data
     */
    async createPricesheet(input) {
        const variables = { input };
        const result = await this.executeMutation('pricesheetCreate', variables);
        return new Pricesheet_1.Pricesheet(result.data.pricesheetCreate);
    }
    /**
     Updates an existing pricesheet
     * @param id Pricesheet ID to update
     * @param input Pricesheet update input data
     * @returns Promise<Pricesheet> The updated pricesheet data
     */
    async updatePricesheet(id, input) {
        const variables = { id, input };
        const result = await this.executeMutation('pricesheetUpdate', variables);
        return new Pricesheet_1.Pricesheet(result.data.pricesheetUpdate);
    }
    /**
     Assigns a pricesheet to entities
     * @param id Pricesheet ID to assign
     * @param input Pricesheet assignment input data
     * @returns Promise<Pricesheet> The assigned pricesheet data
     */
    async assignPricesheet(id, input) {
        const variables = { id, input };
        const result = await this.executeMutation('pricesheetAssign', variables);
        return new Pricesheet_1.Pricesheet(result.data.pricesheetAssign);
    }
    /**
     Unassigns a pricesheet from entities
     * @param id Pricesheet ID to unassign
     * @param input Pricesheet unassignment input data
     * @returns Promise<Pricesheet> The unassigned pricesheet data
     */
    async unassignPricesheet(id, input) {
        const variables = { id, input };
        const result = await this.executeMutation('pricesheetUnassign', variables);
        return new Pricesheet_1.Pricesheet(result.data.pricesheetUnassign);
    }
    /**
     Imports pricesheet data from CSV file
     * @param input CSV import input data
     * @returns Promise<CsvImportResponse> The CSV import response
     */
    async importPricesheetFromCSV(input) {
        const variables = { input };
        const result = await this.executeMutation('pricesheetCsvImport', variables);
        return new CsvImportResponse_1.CsvImportResponse(result.data.pricesheetCsvImport);
    }
}
exports.PricesheetService = PricesheetService;
//# sourceMappingURL=PricesheetService.js.map
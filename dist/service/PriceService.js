"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceService = void 0;
const BaseService_1 = require("./BaseService");
const Price_1 = require("../type/Price");
const PriceResponse_1 = require("../type/PriceResponse");
const ProductPrice_1 = require("../type/ProductPrice");
const CsvImportResponse_1 = require("../type/CsvImportResponse");
/**
 Service class for Price-related GraphQL operations
 */
class PriceService extends BaseService_1.BaseService {
    /**
     Fetches a list of prices with search criteria
     * @param input Price search input parameters
     * @returns Promise<PriceResponse> The prices response data
     */
    async getPrices(input) {
        const variables = { input };
        const result = await this.executeQuery('prices', variables);
        return new PriceResponse_1.PriceResponse(result.data.prices);
    }
    /**
     Fetches a single price by ID
     * @param variables Variables for the price query
     * - id: string - Price ID to fetch
     * @returns Promise<Price> The price data
     */
    async getPrice(variables) {
        const result = await this.executeQuery('price', variables);
        return new Price_1.Price(result.data.price);
    }
    /**
     Calculates price based on input parameters
     * @param variables Variables for the price calculate query
     * - input: PriceCalculateInput - Price calculation input parameters
     * @returns Promise<ProductPrice> The calculated price data
     */
    async calculatePrice(variables) {
        const result = await this.executeQuery('priceCalculate', variables);
        return new ProductPrice_1.ProductPrice(result.data.priceCalculate);
    }
    /**
     Gets the default price based on input parameters
     * @param variables Variables for the price default query
     * - input: PriceCalculateDefaultInput - Price calculation default input parameters
     * @returns Promise<ProductPrice> The default price data
     */
    async getDefaultPrice(variables) {
        const result = await this.executeQuery('priceDefault', variables);
        return new ProductPrice_1.ProductPrice(result.data.priceDefault);
    }
    /**
     Explains price calculation breakdown
     * @param variables Variables for the price explain query
     * - input: PriceCalculateInput - Price calculation input parameters
     * @returns Promise<ProductPrice> The price explanation data
     */
    async explainPrice(variables) {
        const result = await this.executeQuery('priceExplain', variables);
        return new ProductPrice_1.ProductPrice(result.data.priceExplain);
    }
    /**
     Creates a new price
     * @param input Price creation input data
     * @returns Promise<Price> The created price data
     */
    async createPrice(input) {
        const variables = { input };
        const result = await this.executeMutation('priceCreate', variables);
        return new Price_1.Price(result.data.priceCreate);
    }
    /**
     Updates an existing price
     * @param id Price ID to update
     * @param input Price update input data
     * @returns Promise<Price> The updated price data
     */
    async updatePrice(id, input) {
        const variables = { id, input };
        const result = await this.executeMutation('priceUpdate', variables);
        return new Price_1.Price(result.data.priceUpdate);
    }
    /**
     Imports prices from CSV file
     * @param input CSV import input data
     * @returns Promise<CsvImportResponse> The CSV import response
     */
    async importPricesFromCSV(input) {
        const variables = { input };
        const result = await this.executeMutation('priceCsvImport', variables);
        return new CsvImportResponse_1.CsvImportResponse(result.data.priceCsvImport);
    }
}
exports.PriceService = PriceService;
//# sourceMappingURL=PriceService.js.map
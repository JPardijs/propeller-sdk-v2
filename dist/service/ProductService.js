"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const BaseService_1 = require("./BaseService");
const Product_1 = require("../type/Product");
const ProductsResponse_1 = require("../type/ProductsResponse");
const CsvImportResponse_1 = require("../type/CsvImportResponse");
const SurchargesResponse_1 = require("../type/SurchargesResponse");
const AttributeResultResponse_1 = require("../type/AttributeResultResponse");
const AttributeResponse_1 = require("../type/AttributeResponse");
/**
 Service class for Product-related GraphQL operations
 */
class ProductService extends BaseService_1.BaseService {
    /**
     Fetches a single product by ID, slug, or SKU
     * @param variables input variables for aproduct to fetch
     * - productId: int - Product ID to fetch
     * - slug: string - Product slug to fetch
     * - sku: string - Product SKU to fetch
     * - language: string - Language for localized content
     * - applyOrderlists: boolean - Whether to apply orderlist logic
     * - orderlistIds: number[] - Array of orderlist IDs to apply
     * - priceCalculateProductInput: PriceCalculateProductInput - Price calculation input
     * - userBulkPriceProductInput: UserBulkPriceProductInput - User bulk price input
     * - attributeResultSearchInput: AttributeResultSearchInput - Attribute search input
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - mediaVideoSearchInput: MediaVideoProductSearchInput - Video search input
     * - mediaDocumentSearchInput: MediaDocumentProductSearchInput - Document search input
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Product> The product data
     */
    async getProduct(variables) {
        const result = await this.executeQuery('product', variables);
        return new Product_1.Product(result.data.product);
    }
    /**
     Fetches a list of products with search criteria
     * @param variables
     * - input: ProductSearchInput - Product search input parameters
     * - language: string - Language for localized content
     * - priceCalculateProductInput: PriceCalculateProductInput - Price calculation input
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * - filterAvailableAttributeInput: FilterAvailableAttributeInput - Filter available attributes input
     * @returns Promise<ProductsResponse> The products response data
     */
    async getProducts(variables) {
        const result = await this.executeQuery('products', variables);
        return new ProductsResponse_1.ProductsResponse(result.data.products);
    }
    /**
     Creates a new product
     * @param input Product creation input data
     * @returns Promise<Product> The created product
     */
    async createProduct(input) {
        const variables = { input };
        const result = await this.executeMutation('productCreate', variables);
        return new Product_1.Product(result.data.productCreate);
    }
    /**
     Updates an existing product
     * @param input Product update input data
     * @returns Promise<Product> The updated product
     */
    async updateProduct(input) {
        const variables = { input };
        const result = await this.executeMutation('productUpdate', variables);
        return new Product_1.Product(result.data.productUpdate);
    }
    /**
     Imports products from CSV
     * @param input CSV import input data
     * @returns Promise<CsvImportResponse> The import response
     */
    async importProductsCsv(input) {
        const variables = { input };
        const result = await this.executeMutation('productCsvImport', variables);
        return new CsvImportResponse_1.CsvImportResponse(result.data.productCsvImport);
    }
    /**
     Adds surcharges to a product
     * @param input Surcharges input data
     * @returns Promise<boolean> Success status
     */
    async addSurchargesToProduct(input) {
        const variables = { input };
        const result = await this.executeMutation('addSurchargesToProduct', variables);
        return result.data.addSurchargesToProduct;
    }
    /**
     Fetches surcharges for a product
     * @param productId Product ID
     * @returns Promise<SurchargesResponse> The surcharges response
     */
    async getProductSurcharges(productId) {
        const variables = { productId };
        const result = await this.executeQuery('productSurcharges', variables);
        return new SurchargesResponse_1.SurchargesResponse(result.data.productSurcharges);
    }
    /**
     Fetches attributes for a product
     * @param productId Product ID
     * @param input Attribute search input
     * @returns Promise<AttributeResponse> The attributes response
     */
    async getAttributesByProductId(productId, input) {
        const variables = { productId, input };
        const result = await this.executeQuery('attributesByProductId', variables);
        return new AttributeResponse_1.AttributeResponse(result.data.attributesByProductId);
    }
    /**
     Fetches attribute results for a product
     * @param productId Product ID
     * @param input Attribute result search input
     * @returns Promise<AttributeResultResponse> The attribute result response
     */
    async getAttributeResultByProductId(productId, input) {
        const variables = { productId, input };
        const result = await this.executeQuery('attributeResultByProductId', variables);
        return new AttributeResultResponse_1.AttributeResultResponse(result.data.attributeResultByProductId);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map
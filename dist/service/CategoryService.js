"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const BaseService_1 = require("./BaseService");
const Category_1 = require("../type/Category");
const CsvImportResponse_1 = require("../type/CsvImportResponse");
const AttributeResultResponse_1 = require("../type/AttributeResultResponse");
/**
 Service class for Category-related GraphQL operations
 */
class CategoryService extends BaseService_1.BaseService {
    /**
     Fetches a list of categories
     * @param filter Category filter criteria
     * @param userId User ID for personalization
     * @returns Promise<Category[]> Array of categories
     */
    async getCategories(filter, userId) {
        const variables = { filter, userId };
        const result = await this.executeQuery('categories', variables);
        return result.data.categories.map((category) => new Category_1.Category(category));
    }
    /**
     Fetches a single category by ID or slug
     * @param variables Variables for the category query
     *  - categoryId: number - Category ID to fetch
     *  - slug: string - Category slug to fetch
     *  - userId: number - User ID for personalization
     *  - hidden: boolean - Whether to include hidden categories
     *  - language: string - Language for localized content
     *  - imageSearchFilters: MediaImageProductSearchInput
     *  - imageVariantFilters: TransformationsInput!
     *  - filterAvailableAttributeInput: FilterAvailableAttributeInput
     * @returns Promise<Category> The category data
     */
    async getCategory(variables) {
        const result = await this.executeQuery('category', variables);
        return new Category_1.Category(result.data.category);
    }
    /**
     Creates a new category
     * @param input Category creation input data
     * @returns Promise<Category> The created category
     */
    async createCategory(input) {
        const variables = { input };
        const result = await this.executeMutation('categoryCreate', variables);
        return new Category_1.Category(result.data.categoryCreate);
    }
    /**
     Updates an existing category
     * @param input Category update input data
     * @returns Promise<Category> The updated category
     */
    async updateCategory(input) {
        const variables = { input };
        const result = await this.executeMutation('categoryUpdate', variables);
        return new Category_1.Category(result.data.categoryUpdate);
    }
    /**
     Imports categories from CSV
     * @param input CSV import input data
     * @returns Promise<CsvImportResponse> The import response
     */
    async importCategoriesCsv(input) {
        const variables = { input };
        const result = await this.executeMutation('categoryCsvImport', variables);
        return new CsvImportResponse_1.CsvImportResponse(result.data.categoryCsvImport);
    }
    /**
     Adds products/clusters to a category
     * @param input Category add products/clusters input data
     * @returns Promise<Category> The updated category
     */
    async addProductsClustersToCategory(input) {
        const variables = { input };
        const result = await this.executeMutation('categoryAddProductsClusters', variables);
        return new Category_1.Category(result.data.categoryAddProductsClusters);
    }
    /**
     Removes products/clusters from a category
     * @param input Category remove products/clusters input data
     * @returns Promise<Category> The updated category
     */
    async removeProductsClustersFromCategory(input) {
        const variables = { input };
        const result = await this.executeMutation('categoryRemoveProductsClusters', variables);
        return new Category_1.Category(result.data.categoryRemoveProductsClusters);
    }
    /**
     Fetches attribute results for a category
     * @param categoryId Category ID
     * @param input Attribute result search input
     * @returns Promise<AttributeResultResponse> The attribute result response
     */
    async getAttributeResultByCategoryId(categoryId, input) {
        const variables = { categoryId, input };
        const result = await this.executeQuery('attributeResultByCategoryId', variables);
        return new AttributeResultResponse_1.AttributeResultResponse(result.data.attributeResultByCategoryId);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=CategoryService.js.map
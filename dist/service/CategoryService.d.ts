import { BaseService } from './BaseService';
import { Category } from '../type/Category';
import { CategoryInput } from '../type/CategoryInput';
import { CategoryCsvInput } from '../type/CategoryCsvInput';
import { CategoryAddProductsClustersInput } from '../type/CategoryAddProductsClustersInput';
import { CategoryRemoveProductsClustersInput } from '../type/CategoryRemoveProductsClustersInput';
import { CsvImportResponse } from '../type/CsvImportResponse';
import { AttributeResultSearchInput } from '../type/AttributeResultSearchInput';
import { AttributeResultResponse } from '../type/AttributeResultResponse';
import { MediaImageProductSearchInput } from '../type/MediaImageProductSearchInput';
import { TransformationsInput } from '../type/TransformationsInput';
import { FilterAvailableAttributeInput } from '../type/FilterAvailableAttributeInput';
/**
 * Category query variables interface
 Variables for the category query
 */
export interface CategoryQueryVariables {
    /** Category ID to fetch */
    categoryId?: number;
    /** Category slug to fetch */
    slug?: string;
    /** User ID for personalization */
    userId?: number;
    /** Whether to include hidden categories */
    hidden?: boolean;
    /** Language for localized content */
    language?: string;
    /** Image search filters */
    imageSearchFilters?: MediaImageProductSearchInput;
    /** Image transformation filters */
    imageVariantFilters?: TransformationsInput;
    /** Filter available attributes input */
    filterAvailableAttributeInput?: FilterAvailableAttributeInput;
}
/**
 Service class for Category-related GraphQL operations
 */
export declare class CategoryService extends BaseService {
    /**
     Fetches a list of categories
     * @param filter Category filter criteria
     * @param userId User ID for personalization
     * @returns Promise<Category[]> Array of categories
     */
    getCategories(filter?: CategoryInput, userId?: number): Promise<Category[]>;
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
    getCategory(variables: CategoryQueryVariables): Promise<Category>;
    /**
     Creates a new category
     * @param input Category creation input data
     * @returns Promise<Category> The created category
     */
    createCategory(input: CategoryInput): Promise<Category>;
    /**
     Updates an existing category
     * @param input Category update input data
     * @returns Promise<Category> The updated category
     */
    updateCategory(input: CategoryInput): Promise<Category>;
    /**
     Imports categories from CSV
     * @param input CSV import input data
     * @returns Promise<CsvImportResponse> The import response
     */
    importCategoriesCsv(input: CategoryCsvInput): Promise<CsvImportResponse>;
    /**
     Adds products/clusters to a category
     * @param input Category add products/clusters input data
     * @returns Promise<Category> The updated category
     */
    addProductsClustersToCategory(input: CategoryAddProductsClustersInput): Promise<Category>;
    /**
     Removes products/clusters from a category
     * @param input Category remove products/clusters input data
     * @returns Promise<Category> The updated category
     */
    removeProductsClustersFromCategory(input: CategoryRemoveProductsClustersInput): Promise<Category>;
    /**
     Fetches attribute results for a category
     * @param categoryId Category ID
     * @param input Attribute result search input
     * @returns Promise<AttributeResultResponse> The attribute result response
     */
    getAttributeResultByCategoryId(categoryId: number, input: AttributeResultSearchInput): Promise<AttributeResultResponse>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=CategoryService.d.ts.map
import { BaseService } from './BaseService';
import { Pricesheet } from '../type/Pricesheet';
import { PricesheetResponse } from '../type/PricesheetResponse';
import { PricesheetSearchInput } from '../type/PricesheetSearchInput';
import { PricesheetCreateInput } from '../type/PricesheetCreateInput';
import { PricesheetUpdateInput } from '../type/PricesheetUpdateInput';
import { PricesheetAssignInput } from '../type/PricesheetAssignInput';
import { PricesheetUnassignInput } from '../type/PricesheetUnassignInput';
import { PricesheetCsvInput } from '../type/PricesheetCsvInput';
import { CsvImportResponse } from '../type/CsvImportResponse';
/**
 * Pricesheet query variables interface
 Variables for the pricesheet query
 */
export interface PricesheetQueryVariables {
    /** Pricesheet ID to fetch */
    id: string;
}
/**
 Service class for Pricesheet-related GraphQL operations
 */
export declare class PricesheetService extends BaseService {
    /**
     Fetches a list of pricesheets with search criteria
     * @param input Pricesheet search input parameters
     * @returns Promise<PricesheetResponse> The pricesheets response data
     */
    getPricesheets(input?: PricesheetSearchInput): Promise<PricesheetResponse>;
    /**
     Fetches a single pricesheet by ID
     * @param variables Variables for the pricesheet query
     * - id: string - Pricesheet ID to fetch
     * @returns Promise<Pricesheet> The pricesheet data
     */
    getPricesheet(variables: PricesheetQueryVariables): Promise<Pricesheet>;
    /**
     Creates a new pricesheet
     * @param input Pricesheet creation input data
     * @returns Promise<Pricesheet> The created pricesheet data
     */
    createPricesheet(input: PricesheetCreateInput): Promise<Pricesheet>;
    /**
     Updates an existing pricesheet
     * @param id Pricesheet ID to update
     * @param input Pricesheet update input data
     * @returns Promise<Pricesheet> The updated pricesheet data
     */
    updatePricesheet(id: string, input: PricesheetUpdateInput): Promise<Pricesheet>;
    /**
     Assigns a pricesheet to entities
     * @param id Pricesheet ID to assign
     * @param input Pricesheet assignment input data
     * @returns Promise<Pricesheet> The assigned pricesheet data
     */
    assignPricesheet(id: string, input: PricesheetAssignInput): Promise<Pricesheet>;
    /**
     Unassigns a pricesheet from entities
     * @param id Pricesheet ID to unassign
     * @param input Pricesheet unassignment input data
     * @returns Promise<Pricesheet> The unassigned pricesheet data
     */
    unassignPricesheet(id: string, input: PricesheetUnassignInput): Promise<Pricesheet>;
    /**
     Imports pricesheet data from CSV file
     * @param input CSV import input data
     * @returns Promise<CsvImportResponse> The CSV import response
     */
    importPricesheetFromCSV(input: PricesheetCsvInput): Promise<CsvImportResponse>;
}
//# sourceMappingURL=PricesheetService.d.ts.map
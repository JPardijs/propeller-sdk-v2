import { BaseService } from './BaseService';
import { Tax } from '../type/Tax';
import { TaxesResponse } from '../type/TaxesResponse';
import { TaxSearchInput } from '../type/TaxSearchInput';
import { TaxCreateInput } from '../type/TaxCreateInput';
import { TaxUpdateInput } from '../type/TaxUpdateInput';
import { ZoneTaxCode } from '../type/ZoneTaxCode';
import { ZoneTaxCodeResponse } from '../type/ZoneTaxCodeResponse';
import { ZoneTaxCodeSearchInput } from '../type/ZoneTaxCodeSearchInput';
import { ZoneTaxCodeCreateInput } from '../type/ZoneTaxCodeCreateInput';
import { ZoneTaxCodeUpdateInput } from '../type/ZoneTaxCodeUpdateInput';
/**
 Service for managing tax and zone tax code operations
 * @extends BaseService
 */
export declare class TaxService extends BaseService {
    /**
     Retrieves a specific tax
     * @param id Tax ID
     * @returns Promise<Tax> Tax data
     */
    getTax(id: number): Promise<Tax>;
    /**
     Retrieves taxes with search criteria
     * @param input Search input parameters
     * @returns Promise<TaxesResponse> Taxes response
     */
    getTaxes(input?: TaxSearchInput): Promise<TaxesResponse>;
    /**
     Creates a new tax
     * @param input Tax creation input
     * @returns Promise<Tax> The created tax
     */
    createTax(input: TaxCreateInput): Promise<Tax>;
    /**
     Updates an existing tax
     * @param input Tax update input
     * @returns Promise<Tax> The updated tax
     */
    updateTax(input: TaxUpdateInput): Promise<Tax>;
    /**
     Retrieves a specific zone tax code
     * @param id Zone tax code ID
     * @returns Promise<ZoneTaxCode> Zone tax code data
     */
    getZoneTaxCode(id: number): Promise<ZoneTaxCode>;
    /**
     Retrieves zone tax codes with search criteria
     * @param input Search input parameters
     * @returns Promise<ZoneTaxCodeResponse> Zone tax codes response
     */
    getZoneTaxCodes(input?: ZoneTaxCodeSearchInput): Promise<ZoneTaxCodeResponse>;
    /**
     Creates a new zone tax code
     * @param input Zone tax code creation input
     * @returns Promise<ZoneTaxCode> The created zone tax code
     */
    createZoneTaxCode(input: ZoneTaxCodeCreateInput): Promise<ZoneTaxCode>;
    /**
     Creates multiple zone tax codes
     * @param input Array of zone tax code creation inputs
     * @returns Promise<ZoneTaxCode[]> Array of created zone tax codes
     */
    createZoneTaxCodes(input: ZoneTaxCodeCreateInput[]): Promise<ZoneTaxCode[]>;
    /**
     Updates an existing zone tax code
     * @param input Zone tax code update input
     * @returns Promise<ZoneTaxCode> The updated zone tax code
     */
    updateZoneTaxCode(input: ZoneTaxCodeUpdateInput): Promise<ZoneTaxCode>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=TaxService.d.ts.map
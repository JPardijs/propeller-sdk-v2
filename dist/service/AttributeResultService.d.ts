import { BaseService } from './BaseService';
import { AttributeResult } from '../type/AttributeResult';
/**
 Service class for AttributeResult-related GraphQL operations
 */
export declare class AttributeResultService extends BaseService {
    /**
     Fetches attribute results by category ID
     * @param categoryId Category ID to fetch attributes for
     * @returns Promise<AttributeResult> The attribute result data
     */
    getAttributeResultByCategoryId(categoryId: number): Promise<AttributeResult>;
    /**
     Fetches attribute results by cluster ID
     * @param clusterId Cluster ID to fetch attributes for
     * @returns Promise<AttributeResult> The attribute result data
     */
    getAttributeResultByClusterId(clusterId: number): Promise<AttributeResult>;
    /**
     Fetches attribute results by company ID
     * @param companyId Company ID to fetch attributes for
     * @returns Promise<AttributeResult> The attribute result data
     */
    getAttributeResultByCompanyId(companyId: number): Promise<AttributeResult>;
    /**
     Fetches attribute results by contact ID
     * @param contactId Contact ID to fetch attributes for
     * @returns Promise<AttributeResult> The attribute result data
     */
    getAttributeResultByContactId(contactId: number): Promise<AttributeResult>;
    /**
     Fetches attribute results by customer ID
     * @param customerId Customer ID to fetch attributes for
     * @returns Promise<AttributeResult> The attribute result data
     */
    getAttributeResultByCustomerId(customerId: number): Promise<AttributeResult>;
    /**
     Fetches attribute results by product ID
     * @param productId Product ID to fetch attributes for
     * @returns Promise<AttributeResult> The attribute result data
     */
    getAttributeResultByProductId(productId: number): Promise<AttributeResult>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=AttributeResultService.d.ts.map
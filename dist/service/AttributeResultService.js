"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeResultService = void 0;
const BaseService_1 = require("./BaseService");
const AttributeResult_1 = require("../type/AttributeResult");
/**
 Service class for AttributeResult-related GraphQL operations
 */
class AttributeResultService extends BaseService_1.BaseService {
    /**
     Fetches attribute results by category ID
     * @param categoryId Category ID to fetch attributes for
     * @returns Promise<AttributeResult> The attribute result data
     */
    async getAttributeResultByCategoryId(categoryId) {
        const variables = { categoryId };
        const result = await this.executeQuery('attributeResultByCategoryId', variables);
        return new AttributeResult_1.AttributeResult(result.data.attributeResultByCategoryId);
    }
    /**
     Fetches attribute results by cluster ID
     * @param clusterId Cluster ID to fetch attributes for
     * @returns Promise<AttributeResult> The attribute result data
     */
    async getAttributeResultByClusterId(clusterId) {
        const variables = { clusterId };
        const result = await this.executeQuery('attributeResultByClusterId', variables);
        return new AttributeResult_1.AttributeResult(result.data.attributeResultByClusterId);
    }
    /**
     Fetches attribute results by company ID
     * @param companyId Company ID to fetch attributes for
     * @returns Promise<AttributeResult> The attribute result data
     */
    async getAttributeResultByCompanyId(companyId) {
        const variables = { companyId };
        const result = await this.executeQuery('attributeResultByCompanyId', variables);
        return new AttributeResult_1.AttributeResult(result.data.attributeResultByCompanyId);
    }
    /**
     Fetches attribute results by contact ID
     * @param contactId Contact ID to fetch attributes for
     * @returns Promise<AttributeResult> The attribute result data
     */
    async getAttributeResultByContactId(contactId) {
        const variables = { contactId };
        const result = await this.executeQuery('attributeResultByContactId', variables);
        return new AttributeResult_1.AttributeResult(result.data.attributeResultByContactId);
    }
    /**
     Fetches attribute results by customer ID
     * @param customerId Customer ID to fetch attributes for
     * @returns Promise<AttributeResult> The attribute result data
     */
    async getAttributeResultByCustomerId(customerId) {
        const variables = { customerId };
        const result = await this.executeQuery('attributeResultByCustomerId', variables);
        return new AttributeResult_1.AttributeResult(result.data.attributeResultByCustomerId);
    }
    /**
     Fetches attribute results by product ID
     * @param productId Product ID to fetch attributes for
     * @returns Promise<AttributeResult> The attribute result data
     */
    async getAttributeResultByProductId(productId) {
        const variables = { productId };
        const result = await this.executeQuery('attributeResultByProductId', variables);
        return new AttributeResult_1.AttributeResult(result.data.attributeResultByProductId);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.AttributeResultService = AttributeResultService;
//# sourceMappingURL=AttributeResultService.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleService = void 0;
const BaseService_1 = require("./BaseService");
const BusinessRule_1 = require("../type/BusinessRule");
const BusinessRuleResponse_1 = require("../type/BusinessRuleResponse");
const BusinessRuleDecisionTable_1 = require("../type/BusinessRuleDecisionTable");
/**
 Service class for BusinessRule-related GraphQL operations
 */
class BusinessRuleService extends BaseService_1.BaseService {
    /**
     Fetches a single business rule by ID
     * @param id BusinessRule ID to fetch
     * @returns Promise<BusinessRule> The business rule data
     */
    async getBusinessRule(id) {
        const variables = { id };
        const result = await this.executeQuery('businessRule', variables);
        return new BusinessRule_1.BusinessRule(result.data.businessRule);
    }
    /**
     Fetches a list of business rules with search criteria
     * @param input BusinessRule search input parameters
     * @returns Promise<BusinessRuleResponse> The business rules response data
     */
    async getBusinessRules(input) {
        const variables = { input };
        const result = await this.executeQuery('businessRules', variables);
        return new BusinessRuleResponse_1.BusinessRuleResponse(result.data.businessRules);
    }
    /**
     Fetches business rule decision table
     * @param input BusinessRuleDecisionTable search input parameters
     * @returns Promise<BusinessRuleDecisionTable> The decision table data
     */
    async getBusinessRuleDecisionTable(input) {
        const variables = { input };
        const result = await this.executeQuery('businessRuleDecisionTable', variables);
        return new BusinessRuleDecisionTable_1.BusinessRuleDecisionTable(result.data.businessRuleDecisionTable);
    }
    /**
     Fetches business rule field definitions
     * @returns Promise<any> The field definitions data
     */
    async getBusinessRuleFieldDefinitions() {
        const variables = {};
        const result = await this.executeQuery('businessRuleFieldDefinitions', variables);
        return result.data.businessRuleFieldDefinitions;
    }
    /**
     Fetches business rule JDM
     * @param input Business rule JDM input parameters
     * @returns Promise<any> The JDM data
     */
    async getBusinessRuleJDM(input) {
        const variables = { input };
        const result = await this.executeQuery('businessRuleJDM', variables);
        return result.data.businessRuleJDM;
    }
    /**
     Creates a new business rule
     * @param input BusinessRule creation input data
     * @returns Promise<BusinessRule> The created business rule
     */
    async createBusinessRule(input) {
        const variables = { input };
        const result = await this.executeMutation('businessRuleCreate', variables);
        return new BusinessRule_1.BusinessRule(result.data.businessRuleCreate);
    }
    /**
     Updates an existing business rule
     * @param input BusinessRule update input data
     * @returns Promise<BusinessRule> The updated business rule
     */
    async updateBusinessRule(input) {
        const variables = { input };
        const result = await this.executeMutation('businessRuleUpdate', variables);
        return new BusinessRule_1.BusinessRule(result.data.businessRuleUpdate);
    }
    /**
     Updates a business rule decision table
     * @param input BusinessRuleDecisionTable update input data
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    async updateBusinessRuleDecisionTable(input) {
        const variables = { input };
        const result = await this.executeMutation('businessRuleDecisionTableUpdate', variables);
        return new BusinessRuleDecisionTable_1.BusinessRuleDecisionTable(result.data.businessRuleDecisionTableUpdate);
    }
    /**
     Adds a column to business rule decision table
     * @param input Add column input data
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    async addColumnToDecisionTable(input) {
        const variables = { input };
        const result = await this.executeMutation('businessRuleDecisionTableAddColumn', variables);
        return new BusinessRuleDecisionTable_1.BusinessRuleDecisionTable(result.data.businessRuleDecisionTableAddColumn);
    }
    /**
     Deletes a column from business rule decision table
     * @param input Delete column input data
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    async deleteColumnFromDecisionTable(input) {
        const variables = { input };
        const result = await this.executeMutation('businessRuleDecisionTableDeleteColumn', variables);
        return new BusinessRuleDecisionTable_1.BusinessRuleDecisionTable(result.data.businessRuleDecisionTableDeleteColumn);
    }
    /**
     Adds a row to business rule decision table
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    async addRowToDecisionTable() {
        const variables = {};
        const result = await this.executeMutation('businessRuleDecisionTableAddRow', variables);
        return new BusinessRuleDecisionTable_1.BusinessRuleDecisionTable(result.data.businessRuleDecisionTableAddRow);
    }
    /**
     Deletes a row from business rule decision table
     * @param input Delete row input data
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    async deleteRowFromDecisionTable(input) {
        const variables = { input };
        const result = await this.executeMutation('businessRuleDecisionTableDeleteRow', variables);
        return new BusinessRuleDecisionTable_1.BusinessRuleDecisionTable(result.data.businessRuleDecisionTableDeleteRow);
    }
    /**
     Moves a row in business rule decision table
     * @param input Move row input data
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    async moveRowInDecisionTable(input) {
        const variables = { input };
        const result = await this.executeMutation('businessRuleDecisionTableMoveRow', variables);
        return new BusinessRuleDecisionTable_1.BusinessRuleDecisionTable(result.data.businessRuleDecisionTableMoveRow);
    }
    /**
     Sets a cell value in business rule decision table
     * @param input Set cell input data
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    async setCellInDecisionTable(input) {
        const variables = { input };
        const result = await this.executeMutation('businessRuleDecisionTableSetCell', variables);
        return new BusinessRuleDecisionTable_1.BusinessRuleDecisionTable(result.data.businessRuleDecisionTableSetCell);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.BusinessRuleService = BusinessRuleService;
//# sourceMappingURL=BusinessRuleService.js.map
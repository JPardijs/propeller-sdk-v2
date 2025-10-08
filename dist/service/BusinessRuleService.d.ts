import { BaseService } from './BaseService';
import { BusinessRule } from '../type/BusinessRule';
import { BusinessRuleResponse } from '../type/BusinessRuleResponse';
import { BusinessRuleSearchInput } from '../type/BusinessRuleSearchInput';
import { BusinessRuleCreateInput } from '../type/BusinessRuleCreateInput';
import { BusinessRuleUpdateInput } from '../type/BusinessRuleUpdateInput';
import { BusinessRuleDecisionTable } from '../type/BusinessRuleDecisionTable';
import { BusinessRuleDecisionTableSearchInput } from '../type/BusinessRuleDecisionTableSearchInput';
import { BusinessRuleDecisionTableUpdateInput } from '../type/BusinessRuleDecisionTableUpdateInput';
import { BusinessRuleDecisionTableAddColumnInput } from '../type/BusinessRuleDecisionTableAddColumnInput';
import { BusinessRuleDecisionTableDeleteColumnInput } from '../type/BusinessRuleDecisionTableDeleteColumnInput';
import { BusinessRuleDecisionTableDeleteRowInput } from '../type/BusinessRuleDecisionTableDeleteRowInput';
import { BusinessRuleDecisionTableMoveRowInput } from '../type/BusinessRuleDecisionTableMoveRowInput';
import { BusinessRuleDecisionTableSetCellInput } from '../type/BusinessRuleDecisionTableSetCellInput';
/**
 Service class for BusinessRule-related GraphQL operations
 */
export declare class BusinessRuleService extends BaseService {
    /**
     Fetches a single business rule by ID
     * @param id BusinessRule ID to fetch
     * @returns Promise<BusinessRule> The business rule data
     */
    getBusinessRule(id: number): Promise<BusinessRule>;
    /**
     Fetches a list of business rules with search criteria
     * @param input BusinessRule search input parameters
     * @returns Promise<BusinessRuleResponse> The business rules response data
     */
    getBusinessRules(input?: BusinessRuleSearchInput): Promise<BusinessRuleResponse>;
    /**
     Fetches business rule decision table
     * @param input BusinessRuleDecisionTable search input parameters
     * @returns Promise<BusinessRuleDecisionTable> The decision table data
     */
    getBusinessRuleDecisionTable(input?: BusinessRuleDecisionTableSearchInput): Promise<BusinessRuleDecisionTable>;
    /**
     Fetches business rule field definitions
     * @returns Promise<any> The field definitions data
     */
    getBusinessRuleFieldDefinitions(): Promise<any>;
    /**
     Fetches business rule JDM
     * @param input Business rule JDM input parameters
     * @returns Promise<any> The JDM data
     */
    getBusinessRuleJDM(input?: any): Promise<any>;
    /**
     Creates a new business rule
     * @param input BusinessRule creation input data
     * @returns Promise<BusinessRule> The created business rule
     */
    createBusinessRule(input: BusinessRuleCreateInput): Promise<BusinessRule>;
    /**
     Updates an existing business rule
     * @param input BusinessRule update input data
     * @returns Promise<BusinessRule> The updated business rule
     */
    updateBusinessRule(input: BusinessRuleUpdateInput): Promise<BusinessRule>;
    /**
     Updates a business rule decision table
     * @param input BusinessRuleDecisionTable update input data
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    updateBusinessRuleDecisionTable(input: BusinessRuleDecisionTableUpdateInput): Promise<BusinessRuleDecisionTable>;
    /**
     Adds a column to business rule decision table
     * @param input Add column input data
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    addColumnToDecisionTable(input: BusinessRuleDecisionTableAddColumnInput): Promise<BusinessRuleDecisionTable>;
    /**
     Deletes a column from business rule decision table
     * @param input Delete column input data
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    deleteColumnFromDecisionTable(input: BusinessRuleDecisionTableDeleteColumnInput): Promise<BusinessRuleDecisionTable>;
    /**
     Adds a row to business rule decision table
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    addRowToDecisionTable(): Promise<BusinessRuleDecisionTable>;
    /**
     Deletes a row from business rule decision table
     * @param input Delete row input data
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    deleteRowFromDecisionTable(input: BusinessRuleDecisionTableDeleteRowInput): Promise<BusinessRuleDecisionTable>;
    /**
     Moves a row in business rule decision table
     * @param input Move row input data
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    moveRowInDecisionTable(input: BusinessRuleDecisionTableMoveRowInput): Promise<BusinessRuleDecisionTable>;
    /**
     Sets a cell value in business rule decision table
     * @param input Set cell input data
     * @returns Promise<BusinessRuleDecisionTable> The updated decision table
     */
    setCellInDecisionTable(input: BusinessRuleDecisionTableSetCellInput): Promise<BusinessRuleDecisionTable>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=BusinessRuleService.d.ts.map
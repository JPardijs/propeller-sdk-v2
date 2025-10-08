"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const BaseService_1 = require("./BaseService");
const Role_1 = require("../type/Role");
const RoleResponse_1 = require("../type/RoleResponse");
const RoleDefinition_1 = require("../type/RoleDefinition");
const RoleDefinitionResponse_1 = require("../type/RoleDefinitionResponse");
/**
 Service class for Role and RoleDefinition-related GraphQL operations
 */
class RoleService extends BaseService_1.BaseService {
    /**
     Fetches a single role by ID
     * @param id Role ID to fetch
     * @returns Promise<Role> The role data
     */
    async getRole(id) {
        const variables = { id };
        const result = await this.executeQuery('role', variables);
        return new Role_1.Role(result.data.role);
    }
    /**
     Fetches a list of roles with search criteria
     * @param input Role search input parameters
     * @returns Promise<RoleResponse> The roles response data
     */
    async getRoles(input) {
        const variables = { input };
        const result = await this.executeQuery('roles', variables);
        return new RoleResponse_1.RoleResponse(result.data.roles);
    }
    /**
     Creates a new role
     * @param input Role creation input data
     * @returns Promise<Role> The created role
     */
    async createRole(input) {
        const variables = { input };
        const result = await this.executeMutation('roleCreate', variables);
        return new Role_1.Role(result.data.roleCreate);
    }
    /**
     Updates an existing role
     * @param input Role update input data
     * @returns Promise<Role> The updated role
     */
    async updateRole(input) {
        const variables = { input };
        const result = await this.executeMutation('roleUpdate', variables);
        return new Role_1.Role(result.data.roleUpdate);
    }
    /**
     Fetches a single role definition by ID
     * @param id RoleDefinition ID to fetch
     * @returns Promise<RoleDefinition> The role definition data
     */
    async getRoleDefinition(id) {
        const variables = { id };
        const result = await this.executeQuery('roleDefinition', variables);
        return new RoleDefinition_1.RoleDefinition(result.data.roleDefinition);
    }
    /**
     Fetches a list of role definitions with search criteria
     * @param input RoleDefinition search input parameters
     * @returns Promise<RoleDefinitionResponse> The role definitions response data
     */
    async getRoleDefinitions(input) {
        const variables = { input };
        const result = await this.executeQuery('roleDefinitions', variables);
        return new RoleDefinitionResponse_1.RoleDefinitionResponse(result.data.roleDefinitions);
    }
    /**
     Creates a new role definition
     * @param input RoleDefinition creation input data
     * @returns Promise<RoleDefinition> The created role definition
     */
    async createRoleDefinition(input) {
        const variables = { input };
        const result = await this.executeMutation('roleDefinitionCreate', variables);
        return new RoleDefinition_1.RoleDefinition(result.data.roleDefinitionCreate);
    }
    /**
     Updates an existing role definition
     * @param input RoleDefinition update input data
     * @returns Promise<RoleDefinition> The updated role definition
     */
    async updateRoleDefinition(input) {
        const variables = { input };
        const result = await this.executeMutation('roleDefinitionUpdate', variables);
        return new RoleDefinition_1.RoleDefinition(result.data.roleDefinitionUpdate);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.RoleService = RoleService;
//# sourceMappingURL=RoleService.js.map
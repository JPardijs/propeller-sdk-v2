import { BaseService } from './BaseService';
import { Role } from '../type/Role';
import { RoleResponse } from '../type/RoleResponse';
import { RoleSearchInput } from '../type/RoleSearchInput';
import { RoleCreateInput } from '../type/RoleCreateInput';
import { RoleUpdateInput } from '../type/RoleUpdateInput';
import { RoleDefinition } from '../type/RoleDefinition';
import { RoleDefinitionResponse } from '../type/RoleDefinitionResponse';
import { RoleDefinitionSearchInput } from '../type/RoleDefinitionSearchInput';
import { RoleDefinitionCreateInput } from '../type/RoleDefinitionCreateInput';
import { RoleDefinitionUpdateInput } from '../type/RoleDefinitionUpdateInput';
/**
 Service class for Role and RoleDefinition-related GraphQL operations
 */
export declare class RoleService extends BaseService {
    /**
     Fetches a single role by ID
     * @param id Role ID to fetch
     * @returns Promise<Role> The role data
     */
    getRole(id: number): Promise<Role>;
    /**
     Fetches a list of roles with search criteria
     * @param input Role search input parameters
     * @returns Promise<RoleResponse> The roles response data
     */
    getRoles(input?: RoleSearchInput): Promise<RoleResponse>;
    /**
     Creates a new role
     * @param input Role creation input data
     * @returns Promise<Role> The created role
     */
    createRole(input: RoleCreateInput): Promise<Role>;
    /**
     Updates an existing role
     * @param input Role update input data
     * @returns Promise<Role> The updated role
     */
    updateRole(input: RoleUpdateInput): Promise<Role>;
    /**
     Fetches a single role definition by ID
     * @param id RoleDefinition ID to fetch
     * @returns Promise<RoleDefinition> The role definition data
     */
    getRoleDefinition(id: number): Promise<RoleDefinition>;
    /**
     Fetches a list of role definitions with search criteria
     * @param input RoleDefinition search input parameters
     * @returns Promise<RoleDefinitionResponse> The role definitions response data
     */
    getRoleDefinitions(input?: RoleDefinitionSearchInput): Promise<RoleDefinitionResponse>;
    /**
     Creates a new role definition
     * @param input RoleDefinition creation input data
     * @returns Promise<RoleDefinition> The created role definition
     */
    createRoleDefinition(input: RoleDefinitionCreateInput): Promise<RoleDefinition>;
    /**
     Updates an existing role definition
     * @param input RoleDefinition update input data
     * @returns Promise<RoleDefinition> The updated role definition
     */
    updateRoleDefinition(input: RoleDefinitionUpdateInput): Promise<RoleDefinition>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=RoleService.d.ts.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCIPUserService = void 0;
const BaseService_1 = require("./BaseService");
/**
 Service class for GCIP User-related GraphQL operations
 */
class GCIPUserService extends BaseService_1.BaseService {
    /**
     * Retrieve GCIP user by ID
     * @param id - The user ID to retrieve
     * @returns Promise resolving to user data
     */
    async getGCIPUser(id) {
        const variables = { input: { id } };
        const result = await this.executeQuery('user', variables);
        return result.data.user;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.GCIPUserService = GCIPUserService;
//# sourceMappingURL=GCIPUserService.js.map
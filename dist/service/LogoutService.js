"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutService = void 0;
const BaseService_1 = require("./BaseService");
const Logout_1 = require("../type/Logout");
/**
 Service for handling user logout operations
 * @extends BaseService
 */
class LogoutService extends BaseService_1.BaseService {
    /**
     Logs out a user and ends their session
     * @param userId User ID to logout
     * @returns Promise<Logout> Logout response
     */
    async logout(userId) {
        const variables = { userId };
        const result = await this.executeMutation('logout', variables);
        return new Logout_1.Logout(result.data.logout);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.LogoutService = LogoutService;
//# sourceMappingURL=LogoutService.js.map
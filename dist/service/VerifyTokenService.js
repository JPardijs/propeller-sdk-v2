"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyTokenService = void 0;
const BaseService_1 = require("./BaseService");
/**
 Service class for VerifyToken-related GraphQL operations
 */
class VerifyTokenService extends BaseService_1.BaseService {
    /**
     Verifies a token and returns response
     * @param input VerifyToken input data
     * @returns Promise<any> The verify token response data
     */
    async verifyToken(input) {
        const variables = { input };
        const result = await this.executeMutation('verifyToken', variables);
        return result.data.verifyToken;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.VerifyTokenService = VerifyTokenService;
//# sourceMappingURL=VerifyTokenService.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicTokenService = void 0;
const BaseService_1 = require("./BaseService");
const MagicToken_1 = require("../type/MagicToken");
const MagicTokenResponse_1 = require("../type/MagicTokenResponse");
const Login_1 = require("../type/Login");
/**
 Service for magic token authentication
 * @extends BaseService
 */
class MagicTokenService extends BaseService_1.BaseService {
    /**
     Retrieves a specific magic token
     * @param id Magic token ID
     * @returns Promise<MagicToken> Magic token data
     */
    async getMagicToken(id) {
        const variables = { id };
        const result = await this.executeQuery('magicToken', variables);
        return new MagicToken_1.MagicToken(result.data.magicToken);
    }
    /**
     Retrieves magic tokens with search
     * @param input Search input parameters
     * @returns Promise<MagicTokenResponse> Magic tokens response
     */
    async getMagicTokens(input) {
        const variables = { input };
        const result = await this.executeQuery('magicTokens', variables);
        return new MagicTokenResponse_1.MagicTokenResponse(result.data.magicTokens);
    }
    /**
     Creates a new magic token
     * @param input Magic token creation input
     * @returns Promise<MagicToken> The created magic token
     */
    async createMagicToken(input) {
        const variables = { input };
        const result = await this.executeMutation('magicTokenCreate', variables);
        return new MagicToken_1.MagicToken(result.data.magicTokenCreate);
    }
    /**
     Updates an existing magic token
     * @param id Magic token ID
     * @param input Magic token update input
     * @returns Promise<MagicToken> The updated magic token
     */
    async updateMagicToken(id, input) {
        const variables = { id, input };
        const result = await this.executeMutation('magicTokenUpdate', variables);
        return new MagicToken_1.MagicToken(result.data.magicTokenUpdate);
    }
    /**
     Authenticates a user using a magic token
     * @param id Magic token ID
     * @returns Promise<Login> Login response with user data
     */
    async magicTokenLogin(id) {
        const variables = { id };
        const result = await this.executeMutation('magicTokenLogin', variables);
        return new Login_1.Login(result.data.magicTokenLogin);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.MagicTokenService = MagicTokenService;
//# sourceMappingURL=MagicTokenService.js.map
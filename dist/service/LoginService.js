"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const BaseService_1 = require("./BaseService");
const Login_1 = require("../type/Login");
const RefreshTokenResponse_1 = require("../type/RefreshTokenResponse");
/**
 Service for handling user authentication and login operations
 * @extends BaseService
 */
class LoginService extends BaseService_1.BaseService {
    /**
     Authenticates a user with credentials
     * @param input Login credentials input
     * @returns Promise<Login> Login response with user data
     */
    async login(input) {
        const variables = { input };
        const result = await this.executeMutation('login', variables);
        return new Login_1.Login(result.data.login);
    }
    /**
     Creates authentication claims for a user
     * @param input Authentication input data
     * @returns Promise<Login> Authentication response
     */
    async authenticate(input) {
        const variables = { input };
        const result = await this.executeMutation('authenticationCreate', variables);
        return new Login_1.Login(result.data.authenticationCreate);
    }
    /**
     Exchanges a refresh token for a new access token
     * @param refreshToken The refresh token to exchange
     * @returns Promise<RefreshTokenResponse> New token response with fresh access token
     */
    async exchangeRefreshToken(refreshToken) {
        const input = { refreshToken };
        const variables = { input };
        const result = await this.executeMutation('exchangeRefreshToken', variables);
        return new RefreshTokenResponse_1.RefreshTokenResponse(result.data.exchangeRefreshToken);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.LoginService = LoginService;
//# sourceMappingURL=LoginService.js.map
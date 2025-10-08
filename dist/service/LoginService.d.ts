import { BaseService } from './BaseService';
import { Login } from '../type/Login';
import { LoginInput } from '../type/LoginInput';
import { CreateAuthenticationInput } from '../type/CreateAuthenticationInput';
import { RefreshTokenResponse } from '../type/RefreshTokenResponse';
/**
 Service for handling user authentication and login operations
 * @extends BaseService
 */
export declare class LoginService extends BaseService {
    /**
     Authenticates a user with credentials
     * @param input Login credentials input
     * @returns Promise<Login> Login response with user data
     */
    login(input: LoginInput): Promise<Login>;
    /**
     Creates authentication claims for a user
     * @param input Authentication input data
     * @returns Promise<Login> Authentication response
     */
    authenticate(input: CreateAuthenticationInput): Promise<Login>;
    /**
     Exchanges a refresh token for a new access token
     * @param refreshToken The refresh token to exchange
     * @returns Promise<RefreshTokenResponse> New token response with fresh access token
     */
    exchangeRefreshToken(refreshToken: string): Promise<RefreshTokenResponse>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=LoginService.d.ts.map
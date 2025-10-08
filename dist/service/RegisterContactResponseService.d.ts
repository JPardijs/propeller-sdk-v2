import { BaseService } from './BaseService';
import { RegisterContactResponse } from '../type/RegisterContactResponse';
import { RegisterContactInput } from '../type/RegisterContactInput';
/**
 Service class for RegisterContactResponse-related GraphQL operations
 */
export declare class RegisterContactResponseService extends BaseService {
    /**
     Registers a new contact and returns response
     * @param input RegisterContact input data
     * @returns Promise<RegisterContactResponse> The register contact response data
     */
    registerContact(input: RegisterContactInput): Promise<RegisterContactResponse>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=RegisterContactResponseService.d.ts.map
import { BaseService } from './BaseService';
import { RegisterCustomerResponse } from '../type/RegisterCustomerResponse';
import { RegisterCustomerInput } from '../type/RegisterCustomerInput';
/**
 Service class for RegisterCustomerResponse-related GraphQL operations
 */
export declare class RegisterCustomerResponseService extends BaseService {
    /**
     Registers a new customer and returns response
     * @param input RegisterCustomer input data
     * @returns Promise<RegisterCustomerResponse> The register customer response data
     */
    registerCustomer(input: RegisterCustomerInput): Promise<RegisterCustomerResponse>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=RegisterCustomerResponseService.d.ts.map
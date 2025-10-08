"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterCustomerResponseService = void 0;
const BaseService_1 = require("./BaseService");
const RegisterCustomerResponse_1 = require("../type/RegisterCustomerResponse");
/**
 Service class for RegisterCustomerResponse-related GraphQL operations
 */
class RegisterCustomerResponseService extends BaseService_1.BaseService {
    /**
     Registers a new customer and returns response
     * @param input RegisterCustomer input data
     * @returns Promise<RegisterCustomerResponse> The register customer response data
     */
    async registerCustomer(input) {
        const variables = { input };
        const result = await this.executeMutation('registerCustomer', variables);
        return new RegisterCustomerResponse_1.RegisterCustomerResponse(result.data.registerCustomer);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.RegisterCustomerResponseService = RegisterCustomerResponseService;
//# sourceMappingURL=RegisterCustomerResponseService.js.map
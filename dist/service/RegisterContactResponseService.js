"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterContactResponseService = void 0;
const BaseService_1 = require("./BaseService");
const RegisterContactResponse_1 = require("../type/RegisterContactResponse");
/**
 Service class for RegisterContactResponse-related GraphQL operations
 */
class RegisterContactResponseService extends BaseService_1.BaseService {
    /**
     Registers a new contact and returns response
     * @param input RegisterContact input data
     * @returns Promise<RegisterContactResponse> The register contact response data
     */
    async registerContact(input) {
        const variables = { input };
        const result = await this.executeMutation('registerContact', variables);
        return new RegisterContactResponse_1.RegisterContactResponse(result.data.registerContact);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.RegisterContactResponseService = RegisterContactResponseService;
//# sourceMappingURL=RegisterContactResponseService.js.map
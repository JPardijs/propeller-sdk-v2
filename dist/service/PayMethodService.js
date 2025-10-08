"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayMethodService = void 0;
const BaseService_1 = require("./BaseService");
const PayMethod_1 = require("../type/PayMethod");
const PayMethodsResponse_1 = require("../type/PayMethodsResponse");
/**
 Service for managing payment methods
 * @extends BaseService
 */
class PayMethodService extends BaseService_1.BaseService {
    /**
     Retrieves a specific payment method
     * @param id Payment method ID
     * @returns Promise<PayMethod> Payment method data
     */
    async getPayMethod(id) {
        const variables = { id };
        const result = await this.executeQuery('payMethod', variables);
        return new PayMethod_1.PayMethod(result.data.payMethod);
    }
    /**
     Retrieves payment methods with search
     * @param input Search input parameters
     * @returns Promise<PayMethodsResponse> Payment methods response
     */
    async getPayMethods(input) {
        const variables = { input };
        const result = await this.executeQuery('payMethods', variables);
        return new PayMethodsResponse_1.PayMethodsResponse(result.data.payMethods);
    }
    /**
     Creates a new payment method
     * @param input Payment method creation input
     * @returns Promise<PayMethod> The created payment method
     */
    async createPayMethod(input) {
        const variables = { input };
        const result = await this.executeMutation('payMethodCreate', variables);
        return new PayMethod_1.PayMethod(result.data.payMethodCreate);
    }
    /**
     Updates an existing payment method
     * @param input Payment method update input
     * @returns Promise<PayMethod> The updated payment method
     */
    async updatePayMethod(input) {
        const variables = { input };
        const result = await this.executeMutation('payMethodUpdate', variables);
        return new PayMethod_1.PayMethod(result.data.payMethodUpdate);
    }
    /**
     Deletes a payment method
     * @param id PayMethod ID to delete
     * @returns Promise<boolean> Success status
     */
    async deletePayMethod(id) {
        const variables = { id };
        const result = await this.executeMutation('payMethodDelete', variables);
        return result.data.payMethodDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.PayMethodService = PayMethodService;
//# sourceMappingURL=PayMethodService.js.map
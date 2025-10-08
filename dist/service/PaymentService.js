"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const BaseService_1 = require("./BaseService");
const Payment_1 = require("../type/Payment");
const PaymentsResponse_1 = require("../type/PaymentsResponse");
/**
 Service for managing payments
 * @extends BaseService
 */
class PaymentService extends BaseService_1.BaseService {
    /**
     Retrieves a specific payment
     * @param id Payment ID
     * @returns Promise<Payment> Payment data
     */
    async getPayment(id) {
        const variables = { id };
        const result = await this.executeQuery('payment', variables);
        return new Payment_1.Payment(result.data.payment);
    }
    /**
     Retrieves payments with search
     * @param input Search input parameters
     * @returns Promise<PaymentsResponse> Payments response
     */
    async getPayments(input) {
        const variables = { input };
        const result = await this.executeQuery('payments', variables);
        return new PaymentsResponse_1.PaymentsResponse(result.data.payments);
    }
    /**
     Creates a new payment
     * @param input Payment creation input
     * @returns Promise<Payment> The created payment
     */
    async createPayment(input) {
        const variables = { input };
        const result = await this.executeMutation('paymentCreate', variables);
        return new Payment_1.Payment(result.data.paymentCreate);
    }
    /**
     Updates an existing payment
     * @param input Payment update input
     * @returns Promise<Payment> The updated payment
     */
    async updatePayment(input) {
        const variables = { input };
        const result = await this.executeMutation('paymentUpdate', variables);
        return new Payment_1.Payment(result.data.paymentUpdate);
    }
    /**
     Deletes a payment
     * @param id Payment ID to delete
     * @returns Promise<boolean> Success status
     */
    async deletePayment(id) {
        const variables = { id };
        const result = await this.executeMutation('paymentDelete', variables);
        return result.data.paymentDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=PaymentService.js.map
import { BaseService } from './BaseService';
import { Payment } from '../type/Payment';
import { PaymentsResponse } from '../type/PaymentsResponse';
import { PaymentsSearchInput } from '../type/PaymentsSearchInput';
import { PaymentInput } from '../type/PaymentInput';
import { UpdatePaymentInput } from '../type/UpdatePaymentInput';
/**
 Service for managing payments
 * @extends BaseService
 */
export declare class PaymentService extends BaseService {
    /**
     Retrieves a specific payment
     * @param id Payment ID
     * @returns Promise<Payment> Payment data
     */
    getPayment(id: number): Promise<Payment>;
    /**
     Retrieves payments with search
     * @param input Search input parameters
     * @returns Promise<PaymentsResponse> Payments response
     */
    getPayments(input?: PaymentsSearchInput): Promise<PaymentsResponse>;
    /**
     Creates a new payment
     * @param input Payment creation input
     * @returns Promise<Payment> The created payment
     */
    createPayment(input: PaymentInput): Promise<Payment>;
    /**
     Updates an existing payment
     * @param input Payment update input
     * @returns Promise<Payment> The updated payment
     */
    updatePayment(input: UpdatePaymentInput): Promise<Payment>;
    /**
     Deletes a payment
     * @param id Payment ID to delete
     * @returns Promise<boolean> Success status
     */
    deletePayment(id: number): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=PaymentService.d.ts.map
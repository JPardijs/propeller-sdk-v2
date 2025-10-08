import { BaseService } from './BaseService';
import { PayMethod } from '../type/PayMethod';
import { PayMethodsResponse } from '../type/PayMethodsResponse';
import { PayMethodSearchInput } from '../type/PayMethodSearchInput';
import { PayMethodCreateInput } from '../type/PayMethodCreateInput';
import { PayMethodUpdateInput } from '../type/PayMethodUpdateInput';
/**
 Service for managing payment methods
 * @extends BaseService
 */
export declare class PayMethodService extends BaseService {
    /**
     Retrieves a specific payment method
     * @param id Payment method ID
     * @returns Promise<PayMethod> Payment method data
     */
    getPayMethod(id: number): Promise<PayMethod>;
    /**
     Retrieves payment methods with search
     * @param input Search input parameters
     * @returns Promise<PayMethodsResponse> Payment methods response
     */
    getPayMethods(input?: PayMethodSearchInput): Promise<PayMethodsResponse>;
    /**
     Creates a new payment method
     * @param input Payment method creation input
     * @returns Promise<PayMethod> The created payment method
     */
    createPayMethod(input: PayMethodCreateInput): Promise<PayMethod>;
    /**
     Updates an existing payment method
     * @param input Payment method update input
     * @returns Promise<PayMethod> The updated payment method
     */
    updatePayMethod(input: PayMethodUpdateInput): Promise<PayMethod>;
    /**
     Deletes a payment method
     * @param id PayMethod ID to delete
     * @returns Promise<boolean> Success status
     */
    deletePayMethod(id: number): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=PayMethodService.d.ts.map
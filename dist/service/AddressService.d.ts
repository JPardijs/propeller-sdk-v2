import { BaseService } from './BaseService';
import { Address } from '../type/Address';
import { CompanyAddressCreateInput } from '../type/CompanyAddressCreateInput';
import { CompanyAddressUpdateInput } from '../type/CompanyAddressUpdateInput';
import { CompanyAddressDeleteInput } from '../type/CompanyAddressDeleteInput';
import { CustomerAddressCreateInput } from '../type/CustomerAddressCreateInput';
import { CustomerAddressUpdateInput } from '../type/CustomerAddressUpdateInput';
import { CustomerAddressDeleteInput } from '../type/CustomerAddressDeleteInput';
/**
 Service class for Address-related GraphQL operations
 */
export declare class AddressService extends BaseService {
    /**
     Fetches addresses for a company
     * @param companyId Company ID
     * @returns Promise<Address[]> The addresses array
     */
    getAddressesByCompanyId(companyId: number): Promise<Address[]>;
    /**
     Fetches addresses for a customer
     * @param customerId Customer ID
     * @returns Promise<Address[]> The addresses array
     */
    getAddressesByCustomerId(customerId: number): Promise<Address[]>;
    /**
     Fetches addresses for an order
     * @param orderId Order ID
     * @returns Promise<Address[]> The addresses array
     */
    getAddressesByOrderId(orderId: number): Promise<Address[]>;
    /**
     Fetches addresses for a user
     * @param userId User ID
     * @returns Promise<Address[]> The addresses array
     */
    getAddressesByUserId(userId: number): Promise<Address[]>;
    /**
     Creates a new address for a company
     * @param input Company address creation input data
     * @returns Promise<Address> The created address
     */
    createCompanyAddress(input: CompanyAddressCreateInput): Promise<Address>;
    /**
     Updates an existing company address
     * @param input Company address update input data
     * @returns Promise<Address> The updated address
     */
    updateCompanyAddress(input: CompanyAddressUpdateInput): Promise<Address>;
    /**
     Deletes a company address
     * @param input Company address deletion input data
     * @returns Promise<boolean> Success status of the deletion
     */
    deleteCompanyAddress(input: CompanyAddressDeleteInput): Promise<boolean>;
    /**
     Creates a new address for a customer
     * @param input Customer address creation input data
     * @returns Promise<Address> The created address
     */
    createCustomerAddress(input: CustomerAddressCreateInput): Promise<Address>;
    /**
     Updates an existing customer address
     * @param input Customer address update input data
     * @returns Promise<Address> The updated address
     */
    updateCustomerAddress(input: CustomerAddressUpdateInput): Promise<Address>;
    /**
     Deletes a customer address
     * @param input Customer address deletion input data
     * @returns Promise<boolean> Success status of the deletion
     */
    deleteCustomerAddress(input: CustomerAddressDeleteInput): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=AddressService.d.ts.map
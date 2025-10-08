"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressService = void 0;
const BaseService_1 = require("./BaseService");
const Address_1 = require("../type/Address");
/**
 Service class for Address-related GraphQL operations
 */
class AddressService extends BaseService_1.BaseService {
    /**
     Fetches addresses for a company
     * @param companyId Company ID
     * @returns Promise<Address[]> The addresses array
     */
    async getAddressesByCompanyId(companyId) {
        const variables = { companyId };
        const result = await this.executeQuery('addressesByCompanyId', variables);
        return result.data.addressesByCompanyId.map((address) => new Address_1.Address(address));
    }
    /**
     Fetches addresses for a customer
     * @param customerId Customer ID
     * @returns Promise<Address[]> The addresses array
     */
    async getAddressesByCustomerId(customerId) {
        const variables = { customerId };
        const result = await this.executeQuery('addressesByCustomerId', variables);
        return result.data.addressesByCustomerId.map((address) => new Address_1.Address(address));
    }
    /**
     Fetches addresses for an order
     * @param orderId Order ID
     * @returns Promise<Address[]> The addresses array
     */
    async getAddressesByOrderId(orderId) {
        const variables = { orderId };
        const result = await this.executeQuery('addressesByOrderId', variables);
        return result.data.addressesByOrderId.map((address) => new Address_1.Address(address));
    }
    /**
     Fetches addresses for a user
     * @param userId User ID
     * @returns Promise<Address[]> The addresses array
     */
    async getAddressesByUserId(userId) {
        const variables = { userId };
        const result = await this.executeQuery('addressesByUserId', variables);
        return result.data.addressesByUserId.map((address) => new Address_1.Address(address));
    }
    // Company Address Methods
    /**
     Creates a new address for a company
     * @param input Company address creation input data
     * @returns Promise<Address> The created address
     */
    async createCompanyAddress(input) {
        const variables = { input };
        const result = await this.executeMutation('companyAddressCreate', variables);
        return new Address_1.Address(result.data.companyAddressCreate);
    }
    /**
     Updates an existing company address
     * @param input Company address update input data
     * @returns Promise<Address> The updated address
     */
    async updateCompanyAddress(input) {
        const variables = { input };
        const result = await this.executeMutation('companyAddressUpdate', variables);
        return new Address_1.Address(result.data.companyAddressUpdate);
    }
    /**
     Deletes a company address
     * @param input Company address deletion input data
     * @returns Promise<boolean> Success status of the deletion
     */
    async deleteCompanyAddress(input) {
        const variables = { input };
        const result = await this.executeMutation('companyAddressDelete', variables);
        return result.data.companyAddressDelete;
    }
    // Customer Address Methods
    /**
     Creates a new address for a customer
     * @param input Customer address creation input data
     * @returns Promise<Address> The created address
     */
    async createCustomerAddress(input) {
        const variables = { input };
        const result = await this.executeMutation('customerAddressCreate', variables);
        return new Address_1.Address(result.data.customerAddressCreate);
    }
    /**
     Updates an existing customer address
     * @param input Customer address update input data
     * @returns Promise<Address> The updated address
     */
    async updateCustomerAddress(input) {
        const variables = { input };
        const result = await this.executeMutation('customerAddressUpdate', variables);
        return new Address_1.Address(result.data.customerAddressUpdate);
    }
    /**
     Deletes a customer address
     * @param input Customer address deletion input data
     * @returns Promise<boolean> Success status of the deletion
     */
    async deleteCustomerAddress(input) {
        const variables = { input };
        const result = await this.executeMutation('customerAddressDelete', variables);
        return result.data.customerAddressDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.AddressService = AddressService;
//# sourceMappingURL=AddressService.js.map
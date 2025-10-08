"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const BaseService_1 = require("./BaseService");
const Contact_1 = require("../type/Contact");
const Customer_1 = require("../type/Customer");
const Login_1 = require("../type/Login");
const GCIPUser_1 = require("../type/GCIPUser");
const RegisterContactResponse_1 = require("../type/RegisterContactResponse");
const RegisterCustomerResponse_1 = require("../type/RegisterCustomerResponse");
const Logout_1 = require("../type/Logout");
const Address_1 = require("../type/Address");
const PublishEmailEventResponse_1 = require("../type/PublishEmailEventResponse");
const EmailEventType_1 = require("../enum/EmailEventType");
/**
 * Service class for user-related GraphQL operations
 */
class UserService extends BaseService_1.BaseService {
    constructor(client) {
        super(client);
    }
    /**
     * Get current viewer information (authenticated user)
     * @returns Promise<ViewerResult> The current viewer
     */
    async getViewer() {
        const result = await this.executeQuery('viewer');
        const viewerData = result.data.viewer;
        // Return appropriate type based on __typename
        if (viewerData.__typename === 'Contact') {
            return new Contact_1.Contact(viewerData);
        }
        else if (viewerData.__typename === 'Customer') {
            return new Customer_1.Customer(viewerData);
        }
        // Default to Contact if typename is unclear
        return new Contact_1.Contact(viewerData);
    }
    /**
     * Login with credentials
     * @param input Login credentials
     * @returns Promise<Login> The login response with session information
     */
    async login(input) {
        const result = await this.executeMutation('login', { input });
        return new Login_1.Login(result.data.login);
    }
    /**
     * Get user by search criteria
     * @param input User search input parameters
     * @returns Promise<ViewerResult> The user information
     */
    async getUser(input) {
        const result = await this.executeQuery('user', { input });
        const userData = result.data.user;
        // Return appropriate type based on __typename
        if (userData.__typename === 'Contact') {
            return new Contact_1.Contact(userData);
        }
        else if (userData.__typename === 'Customer') {
            return new Customer_1.Customer(userData);
        }
        // Default to Contact if typename is unclear
        return new Contact_1.Contact(userData);
    }
    /**
     * Get authentication information for user by email
     * @param email User email address
     * @returns Promise<GCIPUser> The authentication user information
     */
    async authenticate(email) {
        const result = await this.executeQuery('authentication', { email });
        return new GCIPUser_1.GCIPUser(result.data.authentication);
    }
    /**
     * Logout current user
     * @returns Promise<Logout> The logout response
     */
    async logout() {
        const result = await this.executeMutation('logout');
        return new Logout_1.Logout(result.data.logout);
    }
    /**
     * Register new contact
     * @param input Contact registration input data
     * @returns Promise<RegisterContactResponse> The registration response
     */
    async registerContact(input) {
        const result = await this.executeMutation('contactRegister', { input });
        return new RegisterContactResponse_1.RegisterContactResponse(result.data.contactRegister);
    }
    /**
     * Register new customer
     * @param input Customer registration input data
     * @returns Promise<RegisterCustomerResponse> The registration response
     */
    async registerCustomer(input) {
        const result = await this.executeMutation('customerRegister', { input });
        return new RegisterCustomerResponse_1.RegisterCustomerResponse(result.data.customerRegister);
    }
    /**
     * Update user information
     * @param input User update input data
     * @returns Promise<ViewerResult> The updated user
     */
    async updateUser(input) {
        const result = await this.executeMutation('updateUser', { input });
        const userData = result.data.updateUser;
        // Return appropriate type based on __typename
        if (userData.__typename === 'Contact') {
            return new Contact_1.Contact(userData);
        }
        else if (userData.__typename === 'Customer') {
            return new Customer_1.Customer(userData);
        }
        // Default to Contact if typename is unclear
        return new Contact_1.Contact(userData);
    }
    /**
     * Get users with search and pagination
     * @param searchInput Search criteria for users
     * @param limit Maximum number of results to return
     * @param offset Number of results to skip for pagination
     * @returns Promise<(Contact | Customer)[]> Array of users
     */
    async getUsers(searchInput, limit, offset) {
        const result = await this.executeQuery('users', { searchInput, limit, offset });
        // Map each user to appropriate type based on __typename
        return result.data.users.map((userData) => {
            if (userData.__typename === 'Contact') {
                return new Contact_1.Contact(userData);
            }
            else if (userData.__typename === 'Customer') {
                return new Customer_1.Customer(userData);
            }
            // Default to Contact if typename is unclear
            return new Contact_1.Contact(userData);
        });
    }
    /**
     * Send a password reset email to the specified user
     * @param input Password reset request input data
     * @returns Promise<PublishEmailEventResponse> The email send response
     */
    async sendPasswordResetEmail(input) {
        // Build the full PasswordResetLinkEmailInput from the simplified input
        const passwordResetInput = {
            type: EmailEventType_1.EmailEventType.PASSWORD_RESET,
            email: input.email,
            redirectUrl: input.redirectUrl,
            linkText: input.linkText || 'Reset Your Password',
            subject: input.subject,
            language: input.language,
            siteId: input.siteId
        };
        const result = await this.executeMutation('publishPasswordResetEmailEvent', { input: passwordResetInput });
        return new PublishEmailEventResponse_1.PublishEmailEventResponse(result.data.publishPasswordResetEmailEvent);
    }
    /**
     * Create user address
     * @param input User address creation input data
     * @returns Promise<Address> The created address
     */
    async createUserAddress(input) {
        const result = await this.executeMutation('userAddressCreate', { input });
        return new Address_1.Address(result.data.userAddressCreate);
    }
    /**
     * Update user address
     * @param input User address update input data
     * @returns Promise<Address> The updated address
     */
    async updateUserAddress(input) {
        const result = await this.executeMutation('userAddressUpdate', { input });
        return new Address_1.Address(result.data.userAddressUpdate);
    }
    /**
     * Delete user address
     * @param input User address deletion input data
     * @returns Promise<boolean> Success status of the deletion
     */
    async deleteUserAddress(input) {
        const result = await this.executeMutation('userAddressDelete', { input });
        return result.data.userAddressDelete;
    }
    /**
     * Initializes the service by preloading common fragments
     */
    async initializeService() {
        // Service initialization logic if needed
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map
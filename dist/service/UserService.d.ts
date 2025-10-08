import { BaseService } from './BaseService';
import { GraphQLClient } from '../client/GraphQLClient';
import { Contact } from '../type/Contact';
import { Customer } from '../type/Customer';
import { LoginInput } from '../type/LoginInput';
import { Login } from '../type/Login';
import { GCIPUser } from '../type/GCIPUser';
import { RegisterContactInput } from '../type/RegisterContactInput';
import { RegisterCustomerInput } from '../type/RegisterCustomerInput';
import { RegisterContactResponse } from '../type/RegisterContactResponse';
import { RegisterCustomerResponse } from '../type/RegisterCustomerResponse';
import { Logout } from '../type/Logout';
import { UserAddressCreateInput } from '../type/UserAddressCreateInput';
import { UserAddressUpdateInput } from '../type/UserAddressUpdateInput';
import { UserAddressDeleteInput } from '../type/UserAddressDeleteInput';
import { Address } from '../type/Address';
import { PublishEmailEventResponse } from '../type/PublishEmailEventResponse';
/**
 * Viewer result type alias
 * @type ViewerResult
 Union type for viewer query results
 */
export type ViewerResult = Contact | Customer;
/**
 * Input object for searching users
 */
export interface UserSearchInput {
    /** User ID to search for */
    userId?: number;
    /** Email to search for */
    email?: string;
    /** Contact ID to search for */
    contactId?: number;
    /** Customer ID to search for */
    customerId?: number;
}
/**
 * Input object for updating user information
 */
export interface UserUpdateInput {
    /** User ID */
    userId: number;
    /** First name */
    firstName?: string;
    /** Last name */
    lastName?: string;
    /** Email address */
    email?: string;
    /** Phone number */
    phone?: string;
    /** Mobile number */
    mobile?: string;
}
/**
 * Simplified input object for password reset requests
 */
export interface PasswordResetInput {
    /** The email address of the user to generate the recovery link for */
    email: string;
    /** The page the user will be redirected to after the user changed their password */
    redirectUrl?: string;
    /** Text to display that will lead to link when clicked */
    linkText?: string;
    /** The subject of the email (optional, will use default if not provided) */
    subject?: string;
    /** Language for the email (optional) */
    language?: string;
    /** The id of the site to use when sending the email (optional) */
    siteId?: number;
}
/**
 * Service class for user-related GraphQL operations
 */
export declare class UserService extends BaseService {
    constructor(client: GraphQLClient);
    /**
     * Get current viewer information (authenticated user)
     * @returns Promise<ViewerResult> The current viewer
     */
    getViewer(): Promise<ViewerResult>;
    /**
     * Login with credentials
     * @param input Login credentials
     * @returns Promise<Login> The login response with session information
     */
    login(input: LoginInput): Promise<Login>;
    /**
     * Get user by search criteria
     * @param input User search input parameters
     * @returns Promise<ViewerResult> The user information
     */
    getUser(input: UserSearchInput): Promise<ViewerResult>;
    /**
     * Get authentication information for user by email
     * @param email User email address
     * @returns Promise<GCIPUser> The authentication user information
     */
    authenticate(email: string): Promise<GCIPUser>;
    /**
     * Logout current user
     * @returns Promise<Logout> The logout response
     */
    logout(): Promise<Logout>;
    /**
     * Register new contact
     * @param input Contact registration input data
     * @returns Promise<RegisterContactResponse> The registration response
     */
    registerContact(input: RegisterContactInput): Promise<RegisterContactResponse>;
    /**
     * Register new customer
     * @param input Customer registration input data
     * @returns Promise<RegisterCustomerResponse> The registration response
     */
    registerCustomer(input: RegisterCustomerInput): Promise<RegisterCustomerResponse>;
    /**
     * Update user information
     * @param input User update input data
     * @returns Promise<ViewerResult> The updated user
     */
    updateUser(input: UserUpdateInput): Promise<ViewerResult>;
    /**
     * Get users with search and pagination
     * @param searchInput Search criteria for users
     * @param limit Maximum number of results to return
     * @param offset Number of results to skip for pagination
     * @returns Promise<(Contact | Customer)[]> Array of users
     */
    getUsers(searchInput?: UserSearchInput, limit?: number, offset?: number): Promise<(Contact | Customer)[]>;
    /**
     * Send a password reset email to the specified user
     * @param input Password reset request input data
     * @returns Promise<PublishEmailEventResponse> The email send response
     */
    sendPasswordResetEmail(input: PasswordResetInput): Promise<PublishEmailEventResponse>;
    /**
     * Create user address
     * @param input User address creation input data
     * @returns Promise<Address> The created address
     */
    createUserAddress(input: UserAddressCreateInput): Promise<Address>;
    /**
     * Update user address
     * @param input User address update input data
     * @returns Promise<Address> The updated address
     */
    updateUserAddress(input: UserAddressUpdateInput): Promise<Address>;
    /**
     * Delete user address
     * @param input User address deletion input data
     * @returns Promise<boolean> Success status of the deletion
     */
    deleteUserAddress(input: UserAddressDeleteInput): Promise<boolean>;
    /**
     * Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=UserService.d.ts.map
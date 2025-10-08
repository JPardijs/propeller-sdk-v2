/**
 * Represents a GraphQL operation (query or mutation)
 */
export interface GraphQLOperation {
    operationName?: string;
    query: string;
    variables?: Record<string, any>;
    skipFragmentResolution?: boolean;
}
/**
 * GraphQL response structure
 */
export interface GraphQLResponse<T = any> {
    data?: T;
    errors?: Array<{
        message: string;
        locations?: Array<{
            line: number;
            column: number;
        }>;
        path?: Array<string | number>;
    }>;
    extensions?: Record<string, any>;
}
/**
 * Configuration for the GraphQL client
 */
export interface GraphQLClientConfig {
    /** API endpoint URL - can be direct external API or proxy endpoint */
    endpoint: string;
    /** Standard API key - only used in direct mode */
    apiKey?: string;
    /** Order Editor API key for specific mutations - only used in direct mode */
    orderEditorApiKey?: string;
    /** Additional headers */
    headers?: Record<string, string>;
    /** Request timeout in milliseconds */
    timeout?: number;
    /** Security mode: 'proxy' (recommended) or 'direct' (legacy, insecure) */
    securityMode?: 'proxy' | 'direct';
    /** Proxy endpoint for secure mode - if not provided, uses endpoint */
    proxyEndpoint?: string;
    /** Client identifier for proxy mode (optional) */
    clientId?: string;
}
/**
 * A secure GraphQL client for the Propeller eCommerce Platform
 *
 * Features:
 * - Automatic fragment resolution
 * - Secure proxy mode to protect API keys
 * - API key management for different operation types (direct mode only)
 * - Support for both queries and mutations
 * - Error handling and response validation
 * - TypeScript support with full type safety
 *
 * SECURITY: Use 'proxy' mode in production to keep API keys server-side
 */
export declare class GraphQLClient {
    private config;
    private fragments;
    /** Mutations that require Order Editor API key */
    private static readonly ORDER_EDITOR_MUTATIONS;
    /**
     * @param config - Client configuration
     */
    constructor(config: GraphQLClientConfig);
    /**
     * Load all fragments from the generated fragments
     * @private
     */
    private loadFragments;
    /**
     * Register a GraphQL fragment manually
     * @param name - Fragment name
     * @param definition - Fragment definition
     */
    registerFragment(name: string, definition: string): void;
    /**
     * Resolve fragments in a GraphQL query string
     * @private
     * @param query - GraphQL query string
     * @returns Query with resolved fragments
     */
    private resolveFragments;
    /**
     * Recursively collect all required fragments for a query
     * @private
     * @param query - GraphQL query string
     * @param visited - Set of already visited fragments to prevent infinite recursion
     * @returns Set of required fragment names
     */
    private collectRequiredFragments;
    /**
     * Determine which API key to use based on the operation (direct mode only)
     * @private
     * @param operationName - Name of the GraphQL operation
     * @returns Appropriate API key
     */
    private getApiKey;
    /**
     * Build request headers for a GraphQL operation
     * @private
     * @param operationName - Name of the GraphQL operation
     * @returns Headers object
     */
    private buildHeaders;
    /**
     * Get the appropriate endpoint for the current security mode
     * @private
     * @returns Endpoint URL to use
     */
    private getEndpoint;
    /**
     * Extract operation name from a GraphQL query
     * @private
     * @param query - GraphQL query string
     * @returns Operation name if found
     */
    private extractOperationName;
    /**
     * Execute a GraphQL operation
     * @param operation - GraphQL operation to execute
     * @returns Promise resolving to the GraphQL response
     */
    execute<T = any>(operation: GraphQLOperation): Promise<GraphQLResponse<T>>;
    /**
     * Execute a GraphQL query
     * @param query - GraphQL query string
     * @param variables - Query variables
     * @param operationName - Optional operation name
     * @returns Promise resolving to the query result data
     */
    query<T = any>(query: string, variables?: Record<string, any>, operationName?: string): Promise<T>;
    /**
     * Execute a GraphQL mutation
     * @param mutation - GraphQL mutation string
     * @param variables - Mutation variables
     * @param operationName - Optional operation name
     * @returns Promise resolving to the mutation result data
     */
    mutate<T = any>(mutation: string, variables?: Record<string, any>, operationName?: string): Promise<T>;
    /**
     * Update client configuration
     * @param newConfig - Partial configuration to update
     */
    updateConfig(newConfig: Partial<GraphQLClientConfig>): void;
    /**
     * Get current client configuration
     * @returns Current configuration (without sensitive data)
     */
    getConfig(): Omit<GraphQLClientConfig, 'apiKey' | 'orderEditorApiKey'>;
    /**
     * Get current security mode
     * @returns Current security mode
     */
    getSecurityMode(): 'proxy' | 'direct';
    /**
     * Check if client is in secure proxy mode
     * @returns True if using secure proxy mode
     */
    isSecureMode(): boolean;
    /**
     * Set access token for authentication
     * @param token - Access token from login
     */
    setAccessToken(token: string): void;
    /**
     * Clear access token (logout)
     */
    clearAccessToken(): void;
    /**
     * Get current access token
     * @returns Access token if available, undefined otherwise
     */
    getAccessToken(): string | undefined;
    /**
     * Check if user is authenticated
     * @returns True if access token exists
     */
    isAuthenticated(): boolean;
}
/**
 * Create a new GraphQL client instance
 * @param config - Client configuration
 * @returns GraphQL client instance
 */
export declare function createGraphQLClient(config: GraphQLClientConfig): GraphQLClient;
/**
 * Initialize the default GraphQL client
 * @param config - Client configuration
 */
export declare function initializeClient(config: GraphQLClientConfig): void;
/**
 * Get the default GraphQL client instance
 * @returns Default client instance
 * @throws Error if client hasn't been initialized
 */
export declare function getClient(): GraphQLClient;
/**
 * Singleton GraphQL client instance
 * @deprecated Use getClient() instead
 */
export declare const client: GraphQLClient;
//# sourceMappingURL=GraphQLClient.d.ts.map
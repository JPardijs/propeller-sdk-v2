import { GraphQLClient } from '../client/GraphQLClient';
/**
 * Base service class providing common GraphQL operations
 * with proper fragment inlining using GraphQL AST manipulation
 */
export declare abstract class BaseService {
    protected client: GraphQLClient;
    private queryCache;
    private mutationCache;
    private fragmentDefinitions;
    constructor(client: GraphQLClient);
    /**
     * Initialize all fragments as parsed GraphQL AST nodes
     */
    private initializeFragments;
    /**
     * Execute a query with automatic fragment inlining
     */
    protected executeQuery(queryName: string, variables?: any): Promise<any>;
    /**
     * Execute a mutation with automatic fragment inlining
     */
    protected executeMutation(mutationName: string, variables?: any): Promise<any>;
    /**
     * Resolve fragments by including fragment definitions while keeping fragment spreads as references
     */
    private inlineFragments;
    /**
     * Recursively collect all required fragments from a GraphQL document
     */
    private collectRequiredFragments;
}
//# sourceMappingURL=BaseService.d.ts.map
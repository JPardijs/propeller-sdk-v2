"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const graphql_1 = require("graphql");
const queries_1 = require("../generated/queries");
const mutations_1 = require("../generated/mutations");
const fragments_1 = require("../generated/fragments");
/**
 * Base service class providing common GraphQL operations
 * with proper fragment inlining using GraphQL AST manipulation
 */
class BaseService {
    constructor(client) {
        // Cache for resolved GraphQL documents
        this.queryCache = new Map();
        this.mutationCache = new Map();
        this.fragmentDefinitions = new Map();
        this.client = client;
        this.initializeFragments();
    }
    /**
     * Initialize all fragments as parsed GraphQL AST nodes
     */
    initializeFragments() {
        console.log('🔧 Initializing fragments with GraphQL AST...');
        try {
            const fragmentEntries = Object.entries(fragments_1.fragments);
            for (const [fragmentName, fragmentString] of fragmentEntries) {
                try {
                    const fragmentDoc = (0, graphql_1.parse)(fragmentString);
                    const fragmentDef = fragmentDoc.definitions[0];
                    if (fragmentDef && fragmentDef.kind === graphql_1.Kind.FRAGMENT_DEFINITION) {
                        this.fragmentDefinitions.set(fragmentDef.name.value, fragmentDef);
                    }
                }
                catch (error) {
                    console.warn(`⚠️  Failed to parse fragment ${fragmentName}:`, error);
                }
            }
            console.log(`✅ Fragments initialized. Cache size: ${this.fragmentDefinitions.size}`);
        }
        catch (error) {
            console.error('❌ Failed to initialize fragments:', error);
        }
    }
    /**
     * Execute a query with automatic fragment inlining
     */
    async executeQuery(queryName, variables = {}) {
        console.log(`🔍 Loading query: ${queryName}`);
        // Check cache first
        if (this.queryCache.has(queryName)) {
            const cachedQuery = this.queryCache.get(queryName);
            return this.client.execute({ query: (0, graphql_1.print)(cachedQuery), variables, skipFragmentResolution: true });
        }
        // Get raw query string with proper type checking
        const queryString = queries_1.queries[queryName];
        if (!queryString) {
            throw new Error(`Query '${queryName}' not found in bundled queries`);
        }
        console.log(`📄 Raw query loaded: ${queryString.substring(0, 100)}...`);
        try {
            // Parse and inline fragments
            const resolvedQuery = this.inlineFragments(queryString);
            // Cache the resolved query
            this.queryCache.set(queryName, resolvedQuery);
            console.log(`✅ Query resolved and cached.`);
            return this.client.execute({ query: (0, graphql_1.print)(resolvedQuery), variables, skipFragmentResolution: true });
        }
        catch (error) {
            console.error(`❌ Failed to resolve query ${queryName}:`, error);
            throw error;
        }
    }
    /**
     * Execute a mutation with automatic fragment inlining
     */
    async executeMutation(mutationName, variables = {}) {
        console.log(`🔍 Loading mutation: ${mutationName}`);
        // Check cache first
        if (this.mutationCache.has(mutationName)) {
            const cachedMutation = this.mutationCache.get(mutationName);
            return this.client.execute({ query: (0, graphql_1.print)(cachedMutation), variables, skipFragmentResolution: true });
        }
        // Get raw mutation string with proper type checking
        const mutationString = mutations_1.mutations[mutationName];
        if (!mutationString) {
            throw new Error(`Mutation '${mutationName}' not found in bundled mutations`);
        }
        console.log(`📄 Raw mutation loaded: ${mutationString.substring(0, 100)}...`);
        try {
            // Parse and inline fragments
            const resolvedMutation = this.inlineFragments(mutationString);
            // Cache the resolved mutation
            this.mutationCache.set(mutationName, resolvedMutation);
            console.log(`✅ Mutation resolved and cached.`);
            return this.client.execute({ query: (0, graphql_1.print)(resolvedMutation), variables, skipFragmentResolution: true });
        }
        catch (error) {
            console.error(`❌ Failed to resolve mutation ${mutationName}:`, error);
            throw error;
        }
    }
    /**
     * Resolve fragments by including fragment definitions while keeping fragment spreads as references
     */
    inlineFragments(operationString) {
        try {
            // Parse the operation
            const document = (0, graphql_1.parse)(operationString);
            // Collect all required fragments recursively
            const requiredFragments = this.collectRequiredFragments(document);
            // Add fragment definitions to the document
            const fragmentDefinitions = Array.from(requiredFragments)
                .map(fragmentName => this.fragmentDefinitions.get(fragmentName))
                .filter(Boolean);
            // Create new document with fragment definitions included
            const documentWithFragments = {
                ...document,
                definitions: [
                    ...fragmentDefinitions,
                    ...document.definitions
                ]
            };
            return documentWithFragments;
        }
        catch (error) {
            console.error('❌ Failed to resolve fragments:', error);
            // Fallback to original operation
            return (0, graphql_1.parse)(operationString);
        }
    }
    /**
     * Recursively collect all required fragments from a GraphQL document
     */
    collectRequiredFragments(document, visited = new Set()) {
        const requiredFragments = new Set();
        (0, graphql_1.visit)(document, {
            FragmentSpread: (node) => {
                const fragmentName = node.name.value;
                if (!visited.has(fragmentName) && this.fragmentDefinitions.has(fragmentName)) {
                    visited.add(fragmentName);
                    requiredFragments.add(fragmentName);
                    // Recursively collect fragments used by this fragment
                    const fragmentDef = this.fragmentDefinitions.get(fragmentName);
                    const fragmentDoc = {
                        kind: graphql_1.Kind.DOCUMENT,
                        definitions: [fragmentDef]
                    };
                    const nestedFragments = this.collectRequiredFragments(fragmentDoc, visited);
                    nestedFragments.forEach(name => requiredFragments.add(name));
                }
            }
        });
        return requiredFragments;
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=BaseService.js.map
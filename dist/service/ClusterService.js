"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterService = void 0;
const BaseService_1 = require("./BaseService");
const Cluster_1 = require("../type/Cluster");
/**
 Service class for Cluster-related GraphQL operations
 */
class ClusterService extends BaseService_1.BaseService {
    /**
     Retrieves a specific cluster configuration
     * @param clusterId Cluster ID to get configuration for
     * @returns Promise<Cluster> Cluster data
     */
    async getClusterConfig(clusterId) {
        const variables = { clusterId };
        const result = await this.executeQuery('clusterGetConfig', variables);
        return new Cluster_1.Cluster(result.data.cluster);
    }
    /**
     Fetches a single cluster by ID or slug
     * @param variables Variables for cluster query
     * - clusterId: number - Cluster ID to fetch
     * - slug: string - Cluster slug to fetch
     * - language: string - Language for localized content
     * - priceCalculateProductInput: PriceCalculateProductInput - Price calculation input
     * - userBulkPriceProductInput: UserBulkPriceProductInput - User bulk price input
     * - attributeResultSearchInput: AttributeResultSearchInput - Attribute search input
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - mediaVideoSearchInput: MediaVideoProductSearchInput - Video search input
     * - mediaDocumentSearchInput: MediaDocumentProductSearchInput - Document search input
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Cluster> Cluster data
     */
    async getCluster(variables) {
        const result = await this.executeQuery('cluster', variables);
        return new Cluster_1.Cluster(result.data.cluster);
    }
    /**
     Fetches a list of clusters with search criteria
     * @param input Cluster search input parameters
     * @returns Promise<Cluster[]> Array of clusters
     */
    async getClusters(input) {
        const variables = { input };
        const result = await this.executeQuery('clusters', variables);
        return result.data.clusters.map((cluster) => new Cluster_1.Cluster(cluster));
    }
    /**
     Creates a new cluster
     * @param variables Cluster creation variables
     * @returns Promise<Cluster> The created cluster
     */
    async createCluster(variables) {
        const result = await this.executeMutation('clusterCreate', variables);
        return new Cluster_1.Cluster(result.data.clusterCreate);
    }
    /**
     Updates an existing cluster
     * @param variables Cluster update variables
     * @returns Promise<Cluster> The updated cluster
     */
    async updateCluster(variables) {
        const result = await this.executeMutation('clusterUpdate', variables);
        return new Cluster_1.Cluster(result.data.clusterUpdate);
    }
    /**
     Deletes a cluster
     * @param variables Cluster delete variables
     * @returns Promise<boolean> Success status
     */
    async deleteCluster(variables) {
        const result = await this.executeMutation('clusterDelete', variables);
        return result.data.clusterDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.ClusterService = ClusterService;
//# sourceMappingURL=ClusterService.js.map
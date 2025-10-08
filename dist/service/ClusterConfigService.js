"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterConfigService = void 0;
const BaseService_1 = require("./BaseService");
const ClusterConfig_1 = require("../type/ClusterConfig");
const ClusterConfigResponse_1 = require("../type/ClusterConfigResponse");
/**
 Service for managing cluster configurations
 * @extends BaseService
 */
class ClusterConfigService extends BaseService_1.BaseService {
    /**
     Retrieves a specific cluster configuration
     * @param id Cluster config ID
     * @returns Promise<ClusterConfig> Cluster configuration data
     */
    async getClusterConfig(id) {
        const variables = { id };
        const result = await this.executeQuery('clusterConfig', variables);
        return new ClusterConfig_1.ClusterConfig(result.data.clusterConfig);
    }
    /**
     Retrieves cluster configurations
     * @returns Promise<ClusterConfigResponse[]> List of cluster configurations
     */
    async getClusterConfigs() {
        const result = await this.executeQuery('clusterConfigs', {});
        return result.data.clusterConfigs.map((config) => new ClusterConfigResponse_1.ClusterConfigResponse(config));
    }
    /**
     Creates a new cluster configuration
     * @param input Cluster config creation input
     * @returns Promise<ClusterConfig> The created cluster configuration
     */
    async createClusterConfig(input) {
        const variables = { input };
        const result = await this.executeMutation('clusterConfigCreate', variables);
        return new ClusterConfig_1.ClusterConfig(result.data.clusterConfigCreate);
    }
    /**
     Updates cluster configuration settings
     * @param input Cluster config setting update input
     * @returns Promise<ClusterConfig> The updated cluster configuration
     */
    async updateClusterConfigSetting(input) {
        const variables = { input };
        const result = await this.executeMutation('clusterConfigSettingUpdate', variables);
        return new ClusterConfig_1.ClusterConfig(result.data.clusterConfigSettingUpdate);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.ClusterConfigService = ClusterConfigService;
//# sourceMappingURL=ClusterConfigService.js.map
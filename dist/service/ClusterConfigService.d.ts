import { BaseService } from './BaseService';
import { ClusterConfig } from '../type/ClusterConfig';
import { ClusterConfigResponse } from '../type/ClusterConfigResponse';
import { ClusterConfigCreateInput } from '../type/ClusterConfigCreateInput';
import { ClusterConfigSettingUpdateInput } from '../type/ClusterConfigSettingUpdateInput';
/**
 Service for managing cluster configurations
 * @extends BaseService
 */
export declare class ClusterConfigService extends BaseService {
    /**
     Retrieves a specific cluster configuration
     * @param id Cluster config ID
     * @returns Promise<ClusterConfig> Cluster configuration data
     */
    getClusterConfig(id: number): Promise<ClusterConfig>;
    /**
     Retrieves cluster configurations
     * @returns Promise<ClusterConfigResponse[]> List of cluster configurations
     */
    getClusterConfigs(): Promise<ClusterConfigResponse[]>;
    /**
     Creates a new cluster configuration
     * @param input Cluster config creation input
     * @returns Promise<ClusterConfig> The created cluster configuration
     */
    createClusterConfig(input: ClusterConfigCreateInput): Promise<ClusterConfig>;
    /**
     Updates cluster configuration settings
     * @param input Cluster config setting update input
     * @returns Promise<ClusterConfig> The updated cluster configuration
     */
    updateClusterConfigSetting(input: ClusterConfigSettingUpdateInput): Promise<ClusterConfig>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=ClusterConfigService.d.ts.map
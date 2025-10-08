import { Cluster } from './Cluster';
import { ClusterProductsActionResponse } from './ClusterProductsActionResponse';
/**
 Object class for ClusterUnassignProductsResponse
 */
export declare class ClusterUnassignProductsResponse {
    /** The cluster object */
    private _cluster;
    /** Output messages about the actions performed. */
    private _actions;
    /**
     Creates a new instance of ClusterUnassignProductsResponse
     */
    constructor(data?: Partial<ClusterUnassignProductsResponse>);
    /**
     The cluster object
     */
    get cluster(): Cluster;
    /**
     The cluster object
     */
    set cluster(value: Cluster);
    /**
     Output messages about the actions performed.
     */
    get actions(): ClusterProductsActionResponse;
    /**
     Output messages about the actions performed.
     */
    set actions(value: ClusterProductsActionResponse);
}
//# sourceMappingURL=ClusterUnassignProductsResponse.d.ts.map
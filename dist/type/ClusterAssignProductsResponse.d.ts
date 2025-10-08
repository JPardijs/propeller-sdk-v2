import { Cluster } from './Cluster';
import { ClusterProductsActionResponse } from './ClusterProductsActionResponse';
/**
 Object class for ClusterAssignProductsResponse
 */
export declare class ClusterAssignProductsResponse {
    /** The cluster object */
    private _cluster;
    /** Output messages about the actions performed. */
    private _actions;
    /**
     Creates a new instance of ClusterAssignProductsResponse
     */
    constructor(data?: Partial<ClusterAssignProductsResponse>);
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
//# sourceMappingURL=ClusterAssignProductsResponse.d.ts.map
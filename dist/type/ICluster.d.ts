/**
 Base interface for cluster entities
 */
export interface ICluster {
    /** Cluster identifier */
    id: number;
    /** Cluster name */
    name: string;
    /** Cluster description */
    description?: string;
    /** Whether the cluster is enabled */
    enabled: boolean;
    /** Cluster priority */
    priority?: number;
}
//# sourceMappingURL=ICluster.d.ts.map
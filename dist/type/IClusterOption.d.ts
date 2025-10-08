/**
 Base interface for cluster option entities
 */
export interface IClusterOption {
    /** Option identifier */
    id: string;
    /** Option name */
    name: string;
    /** Option description */
    description?: string;
    /** Option value */
    value?: any;
    /** Whether the option is enabled */
    enabled: boolean;
}
//# sourceMappingURL=IClusterOption.d.ts.map
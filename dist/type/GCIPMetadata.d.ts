/**
 Object class for GCIPMetadata
 */
export declare class GCIPMetadata {
    /** lastSignInTime field */
    private _lastSignInTime?;
    /** creationTime field */
    private _creationTime?;
    /** lastRefreshTime field */
    private _lastRefreshTime?;
    /**
     Creates a new instance of GCIPMetadata
     */
    constructor(data?: Partial<GCIPMetadata>);
    /**
     lastSignInTime field
     */
    get lastSignInTime(): string | undefined;
    /**
     lastSignInTime field
     */
    set lastSignInTime(value: string | undefined);
    /**
     creationTime field
     */
    get creationTime(): string | undefined;
    /**
     creationTime field
     */
    set creationTime(value: string | undefined);
    /**
     lastRefreshTime field
     */
    get lastRefreshTime(): string | undefined;
    /**
     lastRefreshTime field
     */
    set lastRefreshTime(value: string | undefined);
}
//# sourceMappingURL=GCIPMetadata.d.ts.map
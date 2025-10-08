import { EnrolledFactor } from './EnrolledFactor';
/**
 Object class for MultiFactor
 */
export declare class MultiFactor {
    /** The factors enrolled for the user */
    private _enrolledFactors?;
    /**
     Creates a new instance of MultiFactor
     */
    constructor(data?: Partial<MultiFactor>);
    /**
     The factors enrolled for the user
     */
    get enrolledFactors(): EnrolledFactor[] | undefined;
    /**
     The factors enrolled for the user
     */
    set enrolledFactors(value: EnrolledFactor[] | undefined);
}
//# sourceMappingURL=MultiFactor.d.ts.map
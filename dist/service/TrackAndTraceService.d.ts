import { BaseService } from './BaseService';
import { TrackAndTrace } from '../type/TrackAndTrace';
import { TrackAndTraceResponse } from '../type/TrackAndTraceResponse';
import { TrackAndTraceSearchInput } from '../type/TrackAndTraceSearchInput';
import { TrackAndTraceCreateInput } from '../type/TrackAndTraceCreateInput';
import { TrackAndTraceUpdateInput } from '../type/TrackAndTraceUpdateInput';
/**
 Service for managing track and trace operations
 * @extends BaseService
 */
export declare class TrackAndTraceService extends BaseService {
    /**
     Retrieves a specific track and trace record
     * @param id Track and trace ID
     * @returns Promise<TrackAndTrace> Track and trace data
     */
    getTrackAndTrace(id: number): Promise<TrackAndTrace>;
    /**
     Retrieves track and trace records with search
     * @param input Search input parameters
     * @returns Promise<TrackAndTraceResponse> Track and trace response
     */
    getTrackAndTraces(input?: TrackAndTraceSearchInput): Promise<TrackAndTraceResponse>;
    /**
     Creates a new track and trace record
     * @param input Track and trace creation input
     * @returns Promise<TrackAndTrace> The created track and trace record
     */
    createTrackAndTrace(input: TrackAndTraceCreateInput): Promise<TrackAndTrace>;
    /**
     Updates an existing track and trace record
     * @param input Track and trace update input
     * @returns Promise<TrackAndTrace> The updated track and trace record
     */
    updateTrackAndTrace(input: TrackAndTraceUpdateInput): Promise<TrackAndTrace>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=TrackAndTraceService.d.ts.map
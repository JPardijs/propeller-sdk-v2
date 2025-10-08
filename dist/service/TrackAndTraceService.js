"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackAndTraceService = void 0;
const BaseService_1 = require("./BaseService");
const TrackAndTrace_1 = require("../type/TrackAndTrace");
const TrackAndTraceResponse_1 = require("../type/TrackAndTraceResponse");
/**
 Service for managing track and trace operations
 * @extends BaseService
 */
class TrackAndTraceService extends BaseService_1.BaseService {
    /**
     Retrieves a specific track and trace record
     * @param id Track and trace ID
     * @returns Promise<TrackAndTrace> Track and trace data
     */
    async getTrackAndTrace(id) {
        const variables = { id };
        const result = await this.executeQuery('trackAndTrace', variables);
        return new TrackAndTrace_1.TrackAndTrace(result.data.trackAndTrace);
    }
    /**
     Retrieves track and trace records with search
     * @param input Search input parameters
     * @returns Promise<TrackAndTraceResponse> Track and trace response
     */
    async getTrackAndTraces(input) {
        const variables = { input };
        const result = await this.executeQuery('trackAndTraces', variables);
        return new TrackAndTraceResponse_1.TrackAndTraceResponse(result.data.trackAndTraces);
    }
    /**
     Creates a new track and trace record
     * @param input Track and trace creation input
     * @returns Promise<TrackAndTrace> The created track and trace record
     */
    async createTrackAndTrace(input) {
        const variables = { input };
        const result = await this.executeMutation('trackAndTraceCreate', variables);
        return new TrackAndTrace_1.TrackAndTrace(result.data.trackAndTraceCreate);
    }
    /**
     Updates an existing track and trace record
     * @param input Track and trace update input
     * @returns Promise<TrackAndTrace> The updated track and trace record
     */
    async updateTrackAndTrace(input) {
        const variables = { input };
        const result = await this.executeMutation('trackAndTraceUpdate', variables);
        return new TrackAndTrace_1.TrackAndTrace(result.data.trackAndTraceUpdate);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.TrackAndTraceService = TrackAndTraceService;
//# sourceMappingURL=TrackAndTraceService.js.map
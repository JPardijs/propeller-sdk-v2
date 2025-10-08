"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventActionConfigService = void 0;
const BaseService_1 = require("./BaseService");
const EventActionConfigResponse_1 = require("../type/EventActionConfigResponse");
const PublishEmailEventResponse_1 = require("../type/PublishEmailEventResponse");
/**
 Service for managing event action configurations
 * @extends BaseService
 */
class EventActionConfigService extends BaseService_1.BaseService {
    /**
     Retrieves a specific event action configuration
     * @param id Event action config ID
     * @returns Promise<EventActionConfigResponse> Event action configuration data
     */
    async getEventActionConfig(id) {
        const variables = { id };
        const result = await this.executeQuery('eventActionConfig', variables);
        return new EventActionConfigResponse_1.EventActionConfigResponse(result.data.eventActionConfig);
    }
    /**
     Retrieves event action configurations with optional search
     * @param input Search input parameters
     * @returns Promise<EventActionConfigResponse[]> List of event action configurations
     */
    async getEventActionConfigs(input) {
        const variables = { input };
        const result = await this.executeQuery('eventActionConfigs', variables);
        return result.data.eventActionConfigs.map((config) => new EventActionConfigResponse_1.EventActionConfigResponse(config));
    }
    /**
     Creates a new event to email configuration
     * @param input EventToEmailConfig creation input data
     * @returns Promise<EventActionConfig> The created event action config
     */
    async createEventToEmailConfig(input) {
        const variables = { input };
        const result = await this.executeMutation('eventToEmailConfigCreate', variables);
        return new EventActionConfigResponse_1.EventActionConfigResponse(result.data.eventToEmailConfigCreate);
    }
    /**
     Updates an existing event to email configuration
     * @param input EventToEmailConfig update input data
     * @returns Promise<EventActionConfig> The updated event action config
     */
    async updateEventToEmailConfig(input) {
        const variables = { input };
        const result = await this.executeMutation('eventToEmailConfigUpdate', variables);
        return new EventActionConfigResponse_1.EventActionConfigResponse(result.data.eventToEmailConfigUpdate);
    }
    /**
     Creates a new event to webhook configuration
     * @param input EventToWebHookConfig creation input data
     * @returns Promise<EventActionConfig> The created event action config
     */
    async createEventToWebHookConfig(input) {
        const variables = { input };
        const result = await this.executeMutation('eventToWebHookConfigCreate', variables);
        return new EventActionConfigResponse_1.EventActionConfigResponse(result.data.eventToWebHookConfigCreate);
    }
    /**
     Updates an existing event to webhook configuration
     * @param input EventToWebHookConfig update input data
     * @returns Promise<EventActionConfig> The updated event action config
     */
    async updateEventToWebHookConfig(input) {
        const variables = { input };
        const result = await this.executeMutation('eventToWebHookConfigUpdate', variables);
        return new EventActionConfigResponse_1.EventActionConfigResponse(result.data.eventToWebHookConfigUpdate);
    }
    /**
     Publishes an email event
     * @param input Email event input data
     * @returns Promise<PublishEmailEventResponse> The publish response
     */
    async publishEmailEvent(input) {
        const variables = { input };
        const result = await this.executeMutation('publishEmailEvent', variables);
        return new PublishEmailEventResponse_1.PublishEmailEventResponse(result.data.publishEmailEvent);
    }
    /**
     Publishes an email send event
     * @param input Email send event input data
     * @returns Promise<PublishEmailEventResponse> The publish response
     */
    async publishEmailSendEvent(input) {
        const variables = { input };
        const result = await this.executeMutation('publishEmailSendEvent', variables);
        return new PublishEmailEventResponse_1.PublishEmailEventResponse(result.data.publishEmailSendEvent);
    }
    /**
     Publishes a password reset email event
     * @param input Password reset email event input data
     * @returns Promise<PublishEmailEventResponse> The publish response
     */
    async publishPasswordResetEmailEvent(input) {
        const variables = { input };
        const result = await this.executeMutation('publishPasswordResetEmailEvent', variables);
        return new PublishEmailEventResponse_1.PublishEmailEventResponse(result.data.publishPasswordResetEmailEvent);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.EventActionConfigService = EventActionConfigService;
//# sourceMappingURL=EventActionConfigService.js.map
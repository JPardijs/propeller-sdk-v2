import { BaseService } from './BaseService';
import { EventActionConfigResponse } from '../type/EventActionConfigResponse';
import { EventActionConfigSearchInput } from '../type/EventActionConfigSearchInput';
import { EventToEmailConfigCreateInput } from '../type/EventToEmailConfigCreateInput';
import { EventToEmailConfigUpdateInput } from '../type/EventToEmailConfigUpdateInput';
import { EventToWebHookConfigCreateInput } from '../type/EventToWebHookConfigCreateInput';
import { EventToWebHookConfigUpdateInput } from '../type/EventToWebHookConfigUpdateInput';
import { EmailEventInput } from '../type/EmailEventInput';
import { EmailSendEventInput } from '../type/EmailSendEventInput';
import { PasswordResetLinkEmailInput } from '../type/PasswordResetLinkEmailInput';
import { PublishEmailEventResponse } from '../type/PublishEmailEventResponse';
/**
 Service for managing event action configurations
 * @extends BaseService
 */
export declare class EventActionConfigService extends BaseService {
    /**
     Retrieves a specific event action configuration
     * @param id Event action config ID
     * @returns Promise<EventActionConfigResponse> Event action configuration data
     */
    getEventActionConfig(id: number): Promise<EventActionConfigResponse>;
    /**
     Retrieves event action configurations with optional search
     * @param input Search input parameters
     * @returns Promise<EventActionConfigResponse[]> List of event action configurations
     */
    getEventActionConfigs(input?: EventActionConfigSearchInput): Promise<EventActionConfigResponse[]>;
    /**
     Creates a new event to email configuration
     * @param input EventToEmailConfig creation input data
     * @returns Promise<EventActionConfig> The created event action config
     */
    createEventToEmailConfig(input: EventToEmailConfigCreateInput): Promise<EventActionConfigResponse>;
    /**
     Updates an existing event to email configuration
     * @param input EventToEmailConfig update input data
     * @returns Promise<EventActionConfig> The updated event action config
     */
    updateEventToEmailConfig(input: EventToEmailConfigUpdateInput): Promise<EventActionConfigResponse>;
    /**
     Creates a new event to webhook configuration
     * @param input EventToWebHookConfig creation input data
     * @returns Promise<EventActionConfig> The created event action config
     */
    createEventToWebHookConfig(input: EventToWebHookConfigCreateInput): Promise<EventActionConfigResponse>;
    /**
     Updates an existing event to webhook configuration
     * @param input EventToWebHookConfig update input data
     * @returns Promise<EventActionConfig> The updated event action config
     */
    updateEventToWebHookConfig(input: EventToWebHookConfigUpdateInput): Promise<EventActionConfigResponse>;
    /**
     Publishes an email event
     * @param input Email event input data
     * @returns Promise<PublishEmailEventResponse> The publish response
     */
    publishEmailEvent(input: EmailEventInput): Promise<PublishEmailEventResponse>;
    /**
     Publishes an email send event
     * @param input Email send event input data
     * @returns Promise<PublishEmailEventResponse> The publish response
     */
    publishEmailSendEvent(input: EmailSendEventInput): Promise<PublishEmailEventResponse>;
    /**
     Publishes a password reset email event
     * @param input Password reset email event input data
     * @returns Promise<PublishEmailEventResponse> The publish response
     */
    publishPasswordResetEmailEvent(input: PasswordResetLinkEmailInput): Promise<PublishEmailEventResponse>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=EventActionConfigService.d.ts.map
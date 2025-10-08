import { EventTrigger } from '../enum/EventTrigger';
import { LocalizedString } from './LocalizedString';
/**
 The configuration for sending an email based on a template when an event gets triggered which has the emailTemplateId as a field to identify the template to use
 */
export declare class EventToEmailConfig {
    /** The ID of the event, uuid v7 format */
    private _id;
    /** The event to trigger the action defined in the event action config */
    private _trigger;
    /** The event code to use when the trigger is [CUSTOM_EVENT] */
    private _code?;
    /** The creation date of this EventActionConfig */
    private _createdAt;
    /** The last modified date of this EventActionConfig */
    private _lastModifiedAt;
    /** ID of the user who created this EventActionConfig */
    private _createdBy?;
    /** ID of the user who last modified this EventActionConfig */
    private _lastModifiedBy?;
    /** names field */
    private _names;
    /** The ID of the email template to use */
    private _emailTemplateId;
    /**
     Creates a new instance of EventToEmailConfig
     */
    constructor(data?: Partial<EventToEmailConfig>);
    /**
     The ID of the event, uuid v7 format
     */
    get id(): string;
    /**
     The ID of the event, uuid v7 format
     */
    set id(value: string);
    /**
     The event to trigger the action defined in the event action config
     */
    get trigger(): EventTrigger;
    /**
     The event to trigger the action defined in the event action config
     */
    set trigger(value: EventTrigger);
    /**
     The event code to use when the trigger is [CUSTOM_EVENT]
     */
    get code(): string | undefined;
    /**
     The event code to use when the trigger is [CUSTOM_EVENT]
     */
    set code(value: string | undefined);
    /**
     The creation date of this EventActionConfig
     */
    get createdAt(): string;
    /**
     The creation date of this EventActionConfig
     */
    set createdAt(value: string);
    /**
     The last modified date of this EventActionConfig
     */
    get lastModifiedAt(): string;
    /**
     The last modified date of this EventActionConfig
     */
    set lastModifiedAt(value: string);
    /**
     ID of the user who created this EventActionConfig
     */
    get createdBy(): number | undefined;
    /**
     ID of the user who created this EventActionConfig
     */
    set createdBy(value: number | undefined);
    /**
     ID of the user who last modified this EventActionConfig
     */
    get lastModifiedBy(): number | undefined;
    /**
     ID of the user who last modified this EventActionConfig
     */
    set lastModifiedBy(value: number | undefined);
    /**
     names field
     */
    get names(): LocalizedString[];
    /**
     names field
     */
    set names(value: LocalizedString[]);
    /**
     The ID of the email template to use
     */
    get emailTemplateId(): string;
    /**
     The ID of the email template to use
     */
    set emailTemplateId(value: string);
}
//# sourceMappingURL=EventToEmailConfig.d.ts.map
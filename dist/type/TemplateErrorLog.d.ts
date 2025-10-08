import { TemplateErrorType } from '../enum/TemplateErrorType';
/**
 Error log entry for template processing failures
 * Records detailed information about errors that occur during template rendering or custom query execution, including stack traces, error messages, and context information for debugging and monitoring purposes.
 */
export declare class TemplateErrorLog {
    /** Unique identifier for the error log */
    private _id;
    /** Stack trace of the error */
    private _stackTrace;
    /** When the error occurred */
    private _createdAt;
    /** Event instance data that caused the error */
    private _eventInstance?;
    /** Topic name for the event */
    private _topicName?;
    /** Type of error that occurred */
    private _errorType;
    /** Error message */
    private _errorMessage;
    /** ID of the template that caused the error */
    private _templateId?;
    /** Name of the specific field that caused the render error */
    private _fieldName?;
    /**
     Creates a new instance of TemplateErrorLog
     */
    constructor(data?: Partial<TemplateErrorLog>);
    /**
     Unique identifier for the error log
     */
    get id(): string;
    /**
     Unique identifier for the error log
     */
    set id(value: string);
    /**
     Stack trace of the error
     */
    get stackTrace(): string;
    /**
     Stack trace of the error
     */
    set stackTrace(value: string);
    /**
     When the error occurred
     */
    get createdAt(): string;
    /**
     When the error occurred
     */
    set createdAt(value: string);
    /**
     Event instance data that caused the error
     */
    get eventInstance(): string | undefined;
    /**
     Event instance data that caused the error
     */
    set eventInstance(value: string | undefined);
    /**
     Topic name for the event
     */
    get topicName(): string | undefined;
    /**
     Topic name for the event
     */
    set topicName(value: string | undefined);
    /**
     Type of error that occurred
     */
    get errorType(): TemplateErrorType;
    /**
     Type of error that occurred
     */
    set errorType(value: TemplateErrorType);
    /**
     Error message
     */
    get errorMessage(): string;
    /**
     Error message
     */
    set errorMessage(value: string);
    /**
     ID of the template that caused the error
     */
    get templateId(): string | undefined;
    /**
     ID of the template that caused the error
     */
    set templateId(value: string | undefined);
    /**
     Name of the specific field that caused the render error
     */
    get fieldName(): string | undefined;
    /**
     Name of the specific field that caused the render error
     */
    set fieldName(value: string | undefined);
}
//# sourceMappingURL=TemplateErrorLog.d.ts.map
import { LocalizedTemplateContent } from './LocalizedTemplateContent';
import { LocalizedString } from './LocalizedString';
import { EmailSender } from './EmailSender';
import { EmailContact } from './EmailContact';
import { DocumentTemplate } from './DocumentTemplate';
/**
 Object class for EmailTemplate
 */
export declare class EmailTemplate {
    /** A unique identifier for the template */
    private _id;
    /** Uploaded handlebars template content, per given language */
    private _contents?;
    /** The name of the template per given language */
    private _names;
    /** The content of the template */
    private _content?;
    /** GraphQL query to be executed before rendering the template to fetch additional data not in the original event payload.  */
    private _customQuery?;
    /** Variables that are use in the custom query, can use handlebars variables. Has to be a valid JSON string after rendering */
    private _queryVariables?;
    /** The creation date of this Template */
    private _createdAt;
    /** The last modified date of this Template */
    private _lastModifiedAt;
    /** ID of the user who created this Template */
    private _createdBy?;
    /** ID of the user who last modified this Template */
    private _lastModifiedBy?;
    /** Subject for the email per given language, supports handlebars variables */
    private _subjects;
    /** From EmailContact for the email */
    private _from;
    /** To EmailContacts for the email */
    private _tos?;
    /** CC EmailContacts for the email */
    private _ccs?;
    /** BCC EmailContacts for the email */
    private _bccs?;
    /** DocumentTemplates to attach to the email */
    private _attachments?;
    /**
     Creates a new instance of EmailTemplate
     */
    constructor(data?: Partial<EmailTemplate>);
    /**
     A unique identifier for the template
     */
    get id(): string;
    /**
     A unique identifier for the template
     */
    set id(value: string);
    /**
     Uploaded handlebars template content, per given language
     */
    get contents(): LocalizedTemplateContent[] | undefined;
    /**
     Uploaded handlebars template content, per given language
     */
    set contents(value: LocalizedTemplateContent[] | undefined);
    /**
     The name of the template per given language
     */
    get names(): LocalizedString[];
    /**
     The name of the template per given language
     */
    set names(value: LocalizedString[]);
    /**
     The content of the template
     */
    get content(): string | undefined;
    /**
     The content of the template
     */
    set content(value: string | undefined);
    /**
     GraphQL query to be executed before rendering the template to fetch additional data not in the original event payload.
     */
    get customQuery(): string | undefined;
    /**
     GraphQL query to be executed before rendering the template to fetch additional data not in the original event payload.
     */
    set customQuery(value: string | undefined);
    /**
     Variables that are use in the custom query, can use handlebars variables. Has to be a valid JSON string after rendering
     */
    get queryVariables(): string | undefined;
    /**
     Variables that are use in the custom query, can use handlebars variables. Has to be a valid JSON string after rendering
     */
    set queryVariables(value: string | undefined);
    /**
     The creation date of this Template
     */
    get createdAt(): string;
    /**
     The creation date of this Template
     */
    set createdAt(value: string);
    /**
     The last modified date of this Template
     */
    get lastModifiedAt(): string;
    /**
     The last modified date of this Template
     */
    set lastModifiedAt(value: string);
    /**
     ID of the user who created this Template
     */
    get createdBy(): number | undefined;
    /**
     ID of the user who created this Template
     */
    set createdBy(value: number | undefined);
    /**
     ID of the user who last modified this Template
     */
    get lastModifiedBy(): number | undefined;
    /**
     ID of the user who last modified this Template
     */
    set lastModifiedBy(value: number | undefined);
    /**
     Subject for the email per given language, supports handlebars variables
     */
    get subjects(): LocalizedString[];
    /**
     Subject for the email per given language, supports handlebars variables
     */
    set subjects(value: LocalizedString[]);
    /**
     From EmailContact for the email
     */
    get from(): EmailSender;
    /**
     From EmailContact for the email
     */
    set from(value: EmailSender);
    /**
     To EmailContacts for the email
     */
    get tos(): EmailContact[] | undefined;
    /**
     To EmailContacts for the email
     */
    set tos(value: EmailContact[] | undefined);
    /**
     CC EmailContacts for the email
     */
    get ccs(): EmailContact[] | undefined;
    /**
     CC EmailContacts for the email
     */
    set ccs(value: EmailContact[] | undefined);
    /**
     BCC EmailContacts for the email
     */
    get bccs(): EmailContact[] | undefined;
    /**
     BCC EmailContacts for the email
     */
    set bccs(value: EmailContact[] | undefined);
    /**
     DocumentTemplates to attach to the email
     */
    get attachments(): DocumentTemplate[] | undefined;
    /**
     DocumentTemplates to attach to the email
     */
    set attachments(value: DocumentTemplate[] | undefined);
}
//# sourceMappingURL=EmailTemplate.d.ts.map
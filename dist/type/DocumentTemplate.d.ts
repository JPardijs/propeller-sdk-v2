import { LocalizedTemplateContent } from './LocalizedTemplateContent';
import { LocalizedString } from './LocalizedString';
/**
 Object class for DocumentTemplate
 */
export declare class DocumentTemplate {
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
    /** File name to use when rendering a document template per given language, supports handlebars variables */
    private _fileNames;
    /** Indicates whether the template is used for default order PDF generation */
    private _isDefaultOrderPdf;
    /** Indicates whether the template is used for default quote PDF generation */
    private _isDefaultQuotePdf;
    /**
     Creates a new instance of DocumentTemplate
     */
    constructor(data?: Partial<DocumentTemplate>);
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
     File name to use when rendering a document template per given language, supports handlebars variables
     */
    get fileNames(): LocalizedString[];
    /**
     File name to use when rendering a document template per given language, supports handlebars variables
     */
    set fileNames(value: LocalizedString[]);
    /**
     Indicates whether the template is used for default order PDF generation
     */
    get isDefaultOrderPdf(): boolean;
    /**
     Indicates whether the template is used for default order PDF generation
     */
    set isDefaultOrderPdf(value: boolean);
    /**
     Indicates whether the template is used for default quote PDF generation
     */
    get isDefaultQuotePdf(): boolean;
    /**
     Indicates whether the template is used for default quote PDF generation
     */
    set isDefaultQuotePdf(value: boolean);
}
//# sourceMappingURL=DocumentTemplate.d.ts.map
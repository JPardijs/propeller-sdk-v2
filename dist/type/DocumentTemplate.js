"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTemplate = void 0;
/**
 Object class for DocumentTemplate
 */
class DocumentTemplate {
    /**
     Creates a new instance of DocumentTemplate
     */
    constructor(data = {}) {
        this._id = data.id;
        this._contents = data.contents;
        this._names = data.names;
        this._content = data.content;
        this._customQuery = data.customQuery;
        this._queryVariables = data.queryVariables;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._createdBy = data.createdBy;
        this._lastModifiedBy = data.lastModifiedBy;
        this._fileNames = data.fileNames;
        this._isDefaultOrderPdf = data.isDefaultOrderPdf;
        this._isDefaultQuotePdf = data.isDefaultQuotePdf;
    }
    /**
     A unique identifier for the template
     */
    get id() {
        return this._id;
    }
    /**
     A unique identifier for the template
     */
    set id(value) {
        this._id = value;
    }
    /**
     Uploaded handlebars template content, per given language
     */
    get contents() {
        return this._contents;
    }
    /**
     Uploaded handlebars template content, per given language
     */
    set contents(value) {
        this._contents = value;
    }
    /**
     The name of the template per given language
     */
    get names() {
        return this._names;
    }
    /**
     The name of the template per given language
     */
    set names(value) {
        this._names = value;
    }
    /**
     The content of the template
     */
    get content() {
        return this._content;
    }
    /**
     The content of the template
     */
    set content(value) {
        this._content = value;
    }
    /**
     GraphQL query to be executed before rendering the template to fetch additional data not in the original event payload.
     */
    get customQuery() {
        return this._customQuery;
    }
    /**
     GraphQL query to be executed before rendering the template to fetch additional data not in the original event payload.
     */
    set customQuery(value) {
        this._customQuery = value;
    }
    /**
     Variables that are use in the custom query, can use handlebars variables. Has to be a valid JSON string after rendering
     */
    get queryVariables() {
        return this._queryVariables;
    }
    /**
     Variables that are use in the custom query, can use handlebars variables. Has to be a valid JSON string after rendering
     */
    set queryVariables(value) {
        this._queryVariables = value;
    }
    /**
     The creation date of this Template
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     The creation date of this Template
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     The last modified date of this Template
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     The last modified date of this Template
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     ID of the user who created this Template
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     ID of the user who created this Template
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     ID of the user who last modified this Template
     */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }
    /**
     ID of the user who last modified this Template
     */
    set lastModifiedBy(value) {
        this._lastModifiedBy = value;
    }
    /**
     File name to use when rendering a document template per given language, supports handlebars variables
     */
    get fileNames() {
        return this._fileNames;
    }
    /**
     File name to use when rendering a document template per given language, supports handlebars variables
     */
    set fileNames(value) {
        this._fileNames = value;
    }
    /**
     Indicates whether the template is used for default order PDF generation
     */
    get isDefaultOrderPdf() {
        return this._isDefaultOrderPdf;
    }
    /**
     Indicates whether the template is used for default order PDF generation
     */
    set isDefaultOrderPdf(value) {
        this._isDefaultOrderPdf = value;
    }
    /**
     Indicates whether the template is used for default quote PDF generation
     */
    get isDefaultQuotePdf() {
        return this._isDefaultQuotePdf;
    }
    /**
     Indicates whether the template is used for default quote PDF generation
     */
    set isDefaultQuotePdf(value) {
        this._isDefaultQuotePdf = value;
    }
}
exports.DocumentTemplate = DocumentTemplate;
//# sourceMappingURL=DocumentTemplate.js.map
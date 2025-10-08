"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateService = void 0;
const BaseService_1 = require("./BaseService");
const DocumentTemplate_1 = require("../type/DocumentTemplate");
const EmailTemplate_1 = require("../type/EmailTemplate");
const TemplateResponse_1 = require("../type/TemplateResponse");
/**
 Service for managing document and email templates
 * @extends BaseService
 */
class TemplateService extends BaseService_1.BaseService {
    /**
     Retrieves a specific document template
     * @param id Document template ID
     * @returns Promise<DocumentTemplate> Document template data
     */
    async getDocumentTemplate(id) {
        const variables = { id };
        const result = await this.executeQuery('documentTemplate', variables);
        return new DocumentTemplate_1.DocumentTemplate(result.data.documentTemplate);
    }
    /**
     Retrieves a specific email template
     * @param id Email template ID
     * @returns Promise<EmailTemplate> Email template data
     */
    async getEmailTemplate(id) {
        const variables = { id };
        const result = await this.executeQuery('emailTemplate', variables);
        return new EmailTemplate_1.EmailTemplate(result.data.emailTemplate);
    }
    /**
     Fetches a list of templates with search criteria
     * @param input Template search input parameters
     * @returns Promise<TemplateResponse> The templates response data
     */
    async getTemplates(input) {
        const variables = { input };
        const result = await this.executeQuery('templates', variables);
        return new TemplateResponse_1.TemplateResponse(result.data.templates);
    }
    /**
     Creates a new document template
     * @param input Document template creation input
     * @returns Promise<DocumentTemplate> The created document template
     */
    async createDocumentTemplate(input) {
        const variables = { input };
        const result = await this.executeMutation('documentTemplateCreate', variables);
        return new DocumentTemplate_1.DocumentTemplate(result.data.documentTemplateCreate);
    }
    /**
     Updates an existing document template
     * @param input Document template update input
     * @returns Promise<DocumentTemplate> The updated document template
     */
    async updateDocumentTemplate(input) {
        const variables = { input };
        const result = await this.executeMutation('documentTemplateUpdate', variables);
        return new DocumentTemplate_1.DocumentTemplate(result.data.documentTemplateUpdate);
    }
    /**
     Renders a document template to PDF
     * @param input Template render input data
     * @returns Promise<any> The PDF response
     */
    async renderDocumentTemplateToPDF(input) {
        const variables = { input };
        const result = await this.executeMutation('documentTemplateRenderToPDF', variables);
        return result.data.documentTemplateRenderToPDF;
    }
    /**
     Creates a new email template
     * @param input Email template creation input
     * @returns Promise<EmailTemplate> The created email template
     */
    async createEmailTemplate(input) {
        const variables = { input };
        const result = await this.executeMutation('emailTemplateCreate', variables);
        return new EmailTemplate_1.EmailTemplate(result.data.emailTemplateCreate);
    }
    /**
     Updates an existing email template
     * @param input Email template update input
     * @returns Promise<EmailTemplate> The updated email template
     */
    async updateEmailTemplate(input) {
        const variables = { input };
        const result = await this.executeMutation('emailTemplateUpdate', variables);
        return new EmailTemplate_1.EmailTemplate(result.data.emailTemplateUpdate);
    }
    /**
     Adds an attachment to email template
     * @param input Attachment input data
     * @returns Promise<EmailTemplate> The updated email template
     */
    async addAttachmentToEmailTemplate(input) {
        const variables = { input };
        const result = await this.executeMutation('emailTemplateAddAttachment', variables);
        return new EmailTemplate_1.EmailTemplate(result.data.emailTemplateAddAttachment);
    }
    /**
     Removes an attachment from email template
     * @param input Attachment removal input data
     * @returns Promise<EmailTemplate> The updated email template
     */
    async removeAttachmentFromEmailTemplate(input) {
        const variables = { input };
        const result = await this.executeMutation('emailTemplateRemoveAttachment', variables);
        return new EmailTemplate_1.EmailTemplate(result.data.emailTemplateRemoveAttachment);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.TemplateService = TemplateService;
//# sourceMappingURL=TemplateService.js.map
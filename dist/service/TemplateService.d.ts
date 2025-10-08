import { BaseService } from './BaseService';
import { DocumentTemplate } from '../type/DocumentTemplate';
import { EmailTemplate } from '../type/EmailTemplate';
import { TemplateResponse } from '../type/TemplateResponse';
import { TemplateSearchInput } from '../type/TemplateSearchInput';
import { DocumentTemplateCreateInput } from '../type/DocumentTemplateCreateInput';
import { DocumentTemplateUpdateInput } from '../type/DocumentTemplateUpdateInput';
import { EmailTemplateCreateInput } from '../type/EmailTemplateCreateInput';
import { EmailTemplateUpdateInput } from '../type/EmailTemplateUpdateInput';
import { TemplateRenderInput } from '../type/TemplateRenderInput';
/**
 Service for managing document and email templates
 * @extends BaseService
 */
export declare class TemplateService extends BaseService {
    /**
     Retrieves a specific document template
     * @param id Document template ID
     * @returns Promise<DocumentTemplate> Document template data
     */
    getDocumentTemplate(id: number): Promise<DocumentTemplate>;
    /**
     Retrieves a specific email template
     * @param id Email template ID
     * @returns Promise<EmailTemplate> Email template data
     */
    getEmailTemplate(id: number): Promise<EmailTemplate>;
    /**
     Fetches a list of templates with search criteria
     * @param input Template search input parameters
     * @returns Promise<TemplateResponse> The templates response data
     */
    getTemplates(input?: TemplateSearchInput): Promise<TemplateResponse>;
    /**
     Creates a new document template
     * @param input Document template creation input
     * @returns Promise<DocumentTemplate> The created document template
     */
    createDocumentTemplate(input: DocumentTemplateCreateInput): Promise<DocumentTemplate>;
    /**
     Updates an existing document template
     * @param input Document template update input
     * @returns Promise<DocumentTemplate> The updated document template
     */
    updateDocumentTemplate(input: DocumentTemplateUpdateInput): Promise<DocumentTemplate>;
    /**
     Renders a document template to PDF
     * @param input Template render input data
     * @returns Promise<any> The PDF response
     */
    renderDocumentTemplateToPDF(input: TemplateRenderInput): Promise<any>;
    /**
     Creates a new email template
     * @param input Email template creation input
     * @returns Promise<EmailTemplate> The created email template
     */
    createEmailTemplate(input: EmailTemplateCreateInput): Promise<EmailTemplate>;
    /**
     Updates an existing email template
     * @param input Email template update input
     * @returns Promise<EmailTemplate> The updated email template
     */
    updateEmailTemplate(input: EmailTemplateUpdateInput): Promise<EmailTemplate>;
    /**
     Adds an attachment to email template
     * @param input Attachment input data
     * @returns Promise<EmailTemplate> The updated email template
     */
    addAttachmentToEmailTemplate(input: any): Promise<EmailTemplate>;
    /**
     Removes an attachment from email template
     * @param input Attachment removal input data
     * @returns Promise<EmailTemplate> The updated email template
     */
    removeAttachmentFromEmailTemplate(input: any): Promise<EmailTemplate>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=TemplateService.d.ts.map
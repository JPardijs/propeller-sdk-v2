import { BaseService } from './BaseService';
import { TemplateErrorLog } from '../type/TemplateErrorLog';
import { TemplateErrorLogSearchInput } from '../type/TemplateErrorLogSearchInput';
import { TemplateErrorLogResponse } from '../type/TemplateErrorLogResponse';
import { TemplateErrorLogStats } from '../type/TemplateErrorLogStats';
/**
 Service for managing template error logs
 * Provides methods for retrieving, searching, and analyzing template error logs including individual error details, paginated search results, and statistical summaries for monitoring and debugging purposes.
 */
export declare class TemplateErrorLogService extends BaseService {
    /**
     Retrieve a specific template error log by ID
     * @param id - Unique identifier for the error log
     * @returns Promise resolving to the template error log
     */
    getTemplateErrorLog(id: string): Promise<TemplateErrorLog>;
    /**
     Search for template error logs with filtering and pagination
     * @param input - Search criteria and pagination parameters
     * @returns Promise resolving to paginated template error log results
     */
    searchTemplateErrorLogs(input: TemplateErrorLogSearchInput): Promise<TemplateErrorLogResponse>;
    /**
     Retrieve statistical summary of template error logs
     * @returns Promise resolving to template error log statistics
     */
    getTemplateErrorLogStats(): Promise<TemplateErrorLogStats>;
}
//# sourceMappingURL=TemplateErrorLogService.d.ts.map
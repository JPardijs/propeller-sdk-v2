"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateErrorLogService = void 0;
const BaseService_1 = require("./BaseService");
const TemplateErrorLog_1 = require("../type/TemplateErrorLog");
/**
 Service for managing template error logs
 * Provides methods for retrieving, searching, and analyzing template error logs including individual error details, paginated search results, and statistical summaries for monitoring and debugging purposes.
 */
class TemplateErrorLogService extends BaseService_1.BaseService {
    /**
     Retrieve a specific template error log by ID
     * @param id - Unique identifier for the error log
     * @returns Promise resolving to the template error log
     */
    async getTemplateErrorLog(id) {
        const query = `
      query templateErrorLog($id: String!) {
        templateErrorLog(id: $id) {
          id
          stackTrace
          createdAt
          eventInstance
          topicName
          errorType
          errorMessage
          templateId
          fieldName
        }
      }
    `;
        const result = await this.client.query(query, { id });
        return new TemplateErrorLog_1.TemplateErrorLog(result.templateErrorLog);
    }
    /**
     Search for template error logs with filtering and pagination
     * @param input - Search criteria and pagination parameters
     * @returns Promise resolving to paginated template error log results
     */
    async searchTemplateErrorLogs(input) {
        const query = `
      query templateErrorLogs($input: TemplateErrorLogSearchInput!) {
        templateErrorLogs(input: $input) {
          items {
            id
            stackTrace
            createdAt
            eventInstance
            topicName
            errorType
            errorMessage
            templateId
            fieldName
          }
          itemsFound
          page
          offset
          pages
          start
          end
        }
      }
    `;
        const result = await this.client.query(query, { input });
        return {
            ...result.templateErrorLogs,
            items: result.templateErrorLogs.items.map((item) => new TemplateErrorLog_1.TemplateErrorLog(item))
        };
    }
    /**
     Retrieve statistical summary of template error logs
     * @returns Promise resolving to template error log statistics
     */
    async getTemplateErrorLogStats() {
        const query = `
      query templateErrorLogStats {
        templateErrorLogStats {
          totalCount
          renderErrorCount
          customQueryErrorCount
          oldestEntry
          newestEntry
        }
      }
    `;
        const result = await this.client.query(query);
        return result.templateErrorLogStats;
    }
}
exports.TemplateErrorLogService = TemplateErrorLogService;
//# sourceMappingURL=TemplateErrorLogService.js.map
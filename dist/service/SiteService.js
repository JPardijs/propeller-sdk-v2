"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteService = void 0;
const BaseService_1 = require("./BaseService");
const Site_1 = require("../type/Site");
/**
 Service class for Site-related GraphQL operations
 */
class SiteService extends BaseService_1.BaseService {
    /**
     Fetches site information
     * @returns Promise<Site> The site data
     */
    async getSite() {
        const variables = {};
        const result = await this.executeQuery('site', variables);
        return new Site_1.Site(result.data.site);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.SiteService = SiteService;
//# sourceMappingURL=SiteService.js.map
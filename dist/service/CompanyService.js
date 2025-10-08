"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const BaseService_1 = require("./BaseService");
const Company_1 = require("../type/Company");
const CompaniesResponse_1 = require("../type/CompaniesResponse");
/**
 Service for managing companies
 * @extends BaseService
 */
class CompanyService extends BaseService_1.BaseService {
    /**
     Retrieves a specific company
     * @param id Company ID
     * @returns Promise<Company> Company data
     */
    async getCompany(id) {
        const variables = { id };
        const result = await this.executeQuery('company', variables);
        return new Company_1.Company(result.data.company);
    }
    /**
     Retrieves companies with search criteria
     * @param input Search input parameters
     * @returns Promise<CompaniesResponse> Companies response
     */
    async getCompanies(input) {
        const variables = { input };
        const result = await this.executeQuery('companies', variables);
        return new CompaniesResponse_1.CompaniesResponse(result.data.companies);
    }
    /**
     Creates a new company
     * @param input Company creation input
     * @returns Promise<Company> The created company
     */
    async createCompany(input) {
        const variables = { input };
        const result = await this.executeMutation('companyCreate', variables);
        return new Company_1.Company(result.data.companyCreate);
    }
    /**
     Updates an existing company
     * @param input Company update input
     * @returns Promise<Company> The updated company
     */
    async updateCompany(input) {
        const variables = { input };
        const result = await this.executeMutation('companyUpdate', variables);
        return new Company_1.Company(result.data.companyUpdate);
    }
    /**
     Imports companies from CSV file
     * @param input Company CSV import input
     * @returns Promise<Company[]> Array of imported companies
     */
    async importCompaniesCsv(input) {
        const variables = { input };
        const result = await this.executeMutation('companyCsvImport', variables);
        return result.data.companyCsvImport.map((company) => new Company_1.Company(company));
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.CompanyService = CompanyService;
//# sourceMappingURL=CompanyService.js.map
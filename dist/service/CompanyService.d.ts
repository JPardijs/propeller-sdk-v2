import { BaseService } from './BaseService';
import { Company } from '../type/Company';
import { CompaniesResponse } from '../type/CompaniesResponse';
import { CompanySearchInput } from '../type/CompanySearchInput';
import { CreateCompanyInput } from '../type/CreateCompanyInput';
import { UpdateCompanyInput } from '../type/UpdateCompanyInput';
import { CompanyCsvInput } from '../type/CompanyCsvInput';
/**
 Service for managing companies
 * @extends BaseService
 */
export declare class CompanyService extends BaseService {
    /**
     Retrieves a specific company
     * @param id Company ID
     * @returns Promise<Company> Company data
     */
    getCompany(id: number): Promise<Company>;
    /**
     Retrieves companies with search criteria
     * @param input Search input parameters
     * @returns Promise<CompaniesResponse> Companies response
     */
    getCompanies(input?: CompanySearchInput): Promise<CompaniesResponse>;
    /**
     Creates a new company
     * @param input Company creation input
     * @returns Promise<Company> The created company
     */
    createCompany(input: CreateCompanyInput): Promise<Company>;
    /**
     Updates an existing company
     * @param input Company update input
     * @returns Promise<Company> The updated company
     */
    updateCompany(input: UpdateCompanyInput): Promise<Company>;
    /**
     Imports companies from CSV file
     * @param input Company CSV import input
     * @returns Promise<Company[]> Array of imported companies
     */
    importCompaniesCsv(input: CompanyCsvInput): Promise<Company[]>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=CompanyService.d.ts.map
import { BaseService } from './BaseService';
import { Tender } from '../type/Tender';
import { TenderStartInput } from '../type/TenderStartInput';
import { TenderUpdateInput } from '../type/TenderUpdateInput';
import { TenderUpdateAddressInput } from '../type/TenderUpdateAddressInput';
import { TenderUpdateItemInput } from '../type/TenderUpdateItemInput';
import { TenderAddItemInput } from '../type/TenderAddItemInput';
import { TenderAddItemsInput } from '../type/TenderAddItemsInput';
import { TenderProcessResponse } from '../type/TenderProcessResponse';
/**
 Service class for Tender-related GraphQL operations
 */
export declare class TenderService extends BaseService {
    /**
     Fetches a single tender by ID
     * @param id Tender ID to fetch
     * @returns Promise<Tender> The tender data
     */
    getTender(id: number): Promise<Tender>;
    /**
     Starts a new tender
     * @param input Tender start input data
     * @returns Promise<Tender> The started tender
     */
    startTender(input: TenderStartInput): Promise<Tender>;
    /**
     Updates an existing tender
     * @param input Tender update input data
     * @returns Promise<Tender> The updated tender
     */
    updateTender(input: TenderUpdateInput): Promise<Tender>;
    /**
     Updates a tender address
     * @param input Tender update address input data
     * @returns Promise<Tender> The updated tender
     */
    updateTenderAddress(input: TenderUpdateAddressInput): Promise<Tender>;
    /**
     Adds an item to a tender
     * @param input Tender add item input data
     * @returns Promise<Tender> The updated tender
     */
    addItemToTender(input: TenderAddItemInput): Promise<Tender>;
    /**
     Adds multiple items to a tender
     * @param input Tender add items input data
     * @returns Promise<Tender> The updated tender
     */
    addItemsToTender(input: TenderAddItemsInput): Promise<Tender>;
    /**
     Updates an item in a tender
     * @param input Tender update item input data
     * @returns Promise<Tender> The updated tender
     */
    updateTenderItem(input: TenderUpdateItemInput): Promise<Tender>;
    /**
     Deletes an item from a tender
     * @param input Delete item input data
     * @returns Promise<Tender> The updated tender
     */
    deleteTenderItem(input: any): Promise<Tender>;
    /**
     Updates tender discount
     * @param input Tender discount input data
     * @returns Promise<Tender> The updated tender
     */
    updateTenderDiscount(input: any): Promise<Tender>;
    /**
     Updates tender payment
     * @param input Tender payment input data
     * @returns Promise<Tender> The updated tender
     */
    updateTenderPayment(input: any): Promise<Tender>;
    /**
     Updates tender postage
     * @param input Tender postage input data
     * @returns Promise<Tender> The updated tender
     */
    updateTenderPostage(input: any): Promise<Tender>;
    /**
     Updates tender invoice user
     * @param input Tender invoice user input data
     * @returns Promise<Tender> The updated tender
     */
    updateTenderInvoiceUser(input: any): Promise<Tender>;
    /**
     Applies incentives to a tender
     * @param input Apply incentives input data
     * @returns Promise<Tender> The updated tender
     */
    applyIncentivesToTender(input: any): Promise<Tender>;
    /**
     Processes a tender (checkout)
     * @param input Tender process input data
     * @returns Promise<TenderProcessResponse> The process response
     */
    processTender(input: any): Promise<TenderProcessResponse>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=TenderService.d.ts.map
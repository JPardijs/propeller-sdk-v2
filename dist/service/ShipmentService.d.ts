import { BaseService } from './BaseService';
import { Shipment } from '../type/Shipment';
import { ShipmentResponse } from '../type/ShipmentResponse';
import { ShipmentSearchInput } from '../type/ShipmentSearchInput';
import { ShipmentCreateInput } from '../type/ShipmentCreateInput';
import { ShipmentUpdateInput } from '../type/ShipmentUpdateInput';
import { ShipmentItem } from '../type/ShipmentItem';
import { ShipmentItemResponse } from '../type/ShipmentItemResponse';
import { ShipmentItemSearchInput } from '../type/ShipmentItemSearchInput';
import { ShipmentItemCreateInput } from '../type/ShipmentItemCreateInput';
import { ShipmentItemUpdateInput } from '../type/ShipmentItemUpdateInput';
/**
 Service for managing shipments and shipment items
 * @extends BaseService
 */
export declare class ShipmentService extends BaseService {
    /**
     Retrieves a specific shipment
     * @param id Shipment ID
     * @returns Promise<Shipment> Shipment data
     */
    getShipment(id: number): Promise<Shipment>;
    /**
     Retrieves shipments with search criteria
     * @param input Search input parameters
     * @returns Promise<ShipmentResponse> Shipments response
     */
    getShipments(input?: ShipmentSearchInput): Promise<ShipmentResponse>;
    /**
     Creates a new shipment
     * @param input Shipment creation input
     * @returns Promise<Shipment> The created shipment
     */
    createShipment(input: ShipmentCreateInput): Promise<Shipment>;
    /**
     Updates an existing shipment
     * @param input Shipment update input
     * @returns Promise<Shipment> The updated shipment
     */
    updateShipment(input: ShipmentUpdateInput): Promise<Shipment>;
    /**
     Deletes a shipment
     * @param id Shipment ID
     * @returns Promise<boolean> Success status
     */
    deleteShipment(id: number): Promise<boolean>;
    /**
     Retrieves a specific shipment item
     * @param id Shipment item ID
     * @returns Promise<ShipmentItem> Shipment item data
     */
    getShipmentItem(id: number): Promise<ShipmentItem>;
    /**
     Retrieves shipment items with search criteria
     * @param input Search input parameters
     * @returns Promise<ShipmentItemResponse> Shipment items response
     */
    getShipmentItems(input?: ShipmentItemSearchInput): Promise<ShipmentItemResponse>;
    /**
     Creates a new shipment item
     * @param input Shipment item creation input
     * @returns Promise<ShipmentItem> The created shipment item
     */
    createShipmentItem(input: ShipmentItemCreateInput): Promise<ShipmentItem>;
    /**
     Updates an existing shipment item
     * @param input Shipment item update input
     * @returns Promise<ShipmentItem> The updated shipment item
     */
    updateShipmentItem(input: ShipmentItemUpdateInput): Promise<ShipmentItem>;
    /**
     Deletes a shipment item
     * @param id Shipment item ID
     * @returns Promise<boolean> Success status
     */
    deleteShipmentItem(id: number): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=ShipmentService.d.ts.map
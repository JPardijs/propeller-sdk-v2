"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparePartService = void 0;
const BaseService_1 = require("./BaseService");
const SparePart_1 = require("../type/SparePart");
const SparePartsResponse_1 = require("../type/SparePartsResponse");
/**
 Service for managing spare parts
 * @extends BaseService
 */
class SparePartService extends BaseService_1.BaseService {
    /**
     Retrieves a specific spare part
     * @param id Spare part ID
     * @returns Promise<SparePart> Spare part data
     */
    async getSparePart(id) {
        const variables = { id };
        const result = await this.executeQuery('sparePart', variables);
        return new SparePart_1.SparePart(result.data.sparePart);
    }
    /**
     Retrieves all spare parts
     * @returns Promise<SparePartsResponse> Spare parts response
     */
    async getSpareParts() {
        const variables = {};
        const result = await this.executeQuery('spareParts', variables);
        return new SparePartsResponse_1.SparePartsResponse(result.data.spareParts);
    }
    /**
     Creates a new spare part
     * @param input Spare part creation input
     * @returns Promise<SparePart> The created spare part
     */
    async createSparePart(input) {
        const variables = { input };
        const result = await this.executeMutation('sparePartCreate', variables);
        return new SparePart_1.SparePart(result.data.sparePartCreate);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.SparePartService = SparePartService;
//# sourceMappingURL=SparePartService.js.map
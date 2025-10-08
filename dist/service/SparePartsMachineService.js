"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparePartsMachineService = void 0;
const BaseService_1 = require("./BaseService");
const SparePartsMachine_1 = require("../type/SparePartsMachine");
const SparePartsMachineResponse_1 = require("../type/SparePartsMachineResponse");
/**
 Service for managing spare parts machines
 * @extends BaseService
 */
class SparePartsMachineService extends BaseService_1.BaseService {
    /**
     Retrieves a specific spare parts machine
     * @param id Spare parts machine ID
     * @returns Promise<SparePartsMachine> Spare parts machine data
     */
    async getSparePartsMachine(id) {
        const variables = { id };
        const result = await this.executeQuery('sparePartsMachine', variables);
        return new SparePartsMachine_1.SparePartsMachine(result.data.sparePartsMachine);
    }
    /**
     Retrieves spare parts machines with search criteria
     * @param input Search input parameters
     * @returns Promise<SparePartsMachineResponse> Spare parts machines response
     */
    async getSparePartsMachines(input) {
        const variables = { input };
        const result = await this.executeQuery('sparePartsMachines', variables);
        return new SparePartsMachineResponse_1.SparePartsMachineResponse(result.data.sparePartsMachines);
    }
    /**
     Creates a new spare parts machine
     * @param input Spare parts machine creation input
     * @returns Promise<SparePartsMachine> The created spare parts machine
     */
    async createSparePartsMachine(input) {
        const variables = { input };
        const result = await this.executeMutation('sparePartsMachineCreate', variables);
        return new SparePartsMachine_1.SparePartsMachine(result.data.sparePartsMachineCreate);
    }
    /**
     Updates an existing spare parts machine
     * @param input Spare parts machine update input
     * @returns Promise<SparePartsMachine> The updated spare parts machine
     */
    async updateSparePartsMachine(input) {
        const variables = { input };
        const result = await this.executeMutation('sparePartsMachineUpdate', variables);
        return new SparePartsMachine_1.SparePartsMachine(result.data.sparePartsMachineUpdate);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.SparePartsMachineService = SparePartsMachineService;
//# sourceMappingURL=SparePartsMachineService.js.map
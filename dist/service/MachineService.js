"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineService = void 0;
const BaseService_1 = require("./BaseService");
const SparePartsMachine_1 = require("../type/SparePartsMachine");
const SparePartsMachineResponse_1 = require("../type/SparePartsMachineResponse");
/**
 Service for managing machines (spare parts machines)
 * @extends BaseService
 */
class MachineService extends BaseService_1.BaseService {
    /**
     Retrieves a specific machine
     * @param id Machine ID
     * @returns Promise<SparePartsMachine> Machine data
     */
    async getMachine(id) {
        const variables = { id };
        const result = await this.executeQuery('machine', variables);
        return new SparePartsMachine_1.SparePartsMachine(result.data.machine);
    }
    /**
     Retrieves machines with search criteria
     * @param input Search input parameters
     * @returns Promise<SparePartsMachineResponse> Machines response
     */
    async getMachines(input) {
        const variables = { input };
        const result = await this.executeQuery('machines', variables);
        return new SparePartsMachineResponse_1.SparePartsMachineResponse(result.data.machines);
    }
    /**
     Creates a new machine
     * @param input Machine creation input
     * @returns Promise<SparePartsMachine> The created machine
     */
    async createMachine(input) {
        const variables = { input };
        const result = await this.executeMutation('machineCreate', variables);
        return new SparePartsMachine_1.SparePartsMachine(result.data.machineCreate);
    }
    /**
     Updates an existing machine
     * @param input Machine update input
     * @returns Promise<SparePartsMachine> The updated machine
     */
    async updateMachine(input) {
        const variables = { input };
        const result = await this.executeMutation('machineUpdate', variables);
        return new SparePartsMachine_1.SparePartsMachine(result.data.machineUpdate);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.MachineService = MachineService;
//# sourceMappingURL=MachineService.js.map
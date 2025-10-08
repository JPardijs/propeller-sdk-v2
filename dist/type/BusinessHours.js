"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessHours = void 0;
/**
 Object class for BusinessHours
 */
class BusinessHours {
    /**
     Creates a new instance of BusinessHours
     */
    constructor(data = {}) {
        this._dayOfWeek = data.dayOfWeek;
        this._openingTime = data.openingTime;
        this._closingTime = data.closingTime;
        this._lunchBeakStartTime = data.lunchBeakStartTime;
        this._lunchBeakEndTime = data.lunchBeakEndTime;
    }
    /**
     dayOfWeek field
     */
    get dayOfWeek() {
        return this._dayOfWeek;
    }
    /**
     dayOfWeek field
     */
    set dayOfWeek(value) {
        this._dayOfWeek = value;
    }
    /**
     openingTime field
     */
    get openingTime() {
        return this._openingTime;
    }
    /**
     openingTime field
     */
    set openingTime(value) {
        this._openingTime = value;
    }
    /**
     closingTime field
     */
    get closingTime() {
        return this._closingTime;
    }
    /**
     closingTime field
     */
    set closingTime(value) {
        this._closingTime = value;
    }
    /**
     lunchBeakStartTime field
     */
    get lunchBeakStartTime() {
        return this._lunchBeakStartTime;
    }
    /**
     lunchBeakStartTime field
     */
    set lunchBeakStartTime(value) {
        this._lunchBeakStartTime = value;
    }
    /**
     lunchBeakEndTime field
     */
    get lunchBeakEndTime() {
        return this._lunchBeakEndTime;
    }
    /**
     lunchBeakEndTime field
     */
    set lunchBeakEndTime(value) {
        this._lunchBeakEndTime = value;
    }
}
exports.BusinessHours = BusinessHours;
//# sourceMappingURL=BusinessHours.js.map
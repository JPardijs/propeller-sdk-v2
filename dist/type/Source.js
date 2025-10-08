"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source = void 0;
/**
 Object class for Source
 */
class Source {
    /**
     Creates a new instance of Source
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
    }
    /**
     Source ID
     */
    get id() {
        return this._id;
    }
    /**
     Source ID
     */
    set id(value) {
        this._id = value;
    }
    /**
     Name of the source
     */
    get name() {
        return this._name;
    }
    /**
     Name of the source
     */
    set name(value) {
        this._name = value;
    }
}
exports.Source = Source;
//# sourceMappingURL=Source.js.map
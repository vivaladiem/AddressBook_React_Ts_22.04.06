"use strict";
//ClassyName.ts
Object.defineProperty(exports, "__esModule", { value: true });
class ClassyName {
    /**
     *
     * @param baseName : a block name or an block__element-name.
     */
    constructor(baseName) {
        this.result = baseName;
        this.base = baseName;
    }
    setElementDelimiter(delimiter) {
        this.result = this.result.replace(new RegExp(ClassyName.elementDelimiter, "g"), delimiter);
        ClassyName.elementDelimiter = delimiter;
    }
    setModifierDelimiter(delimiter) {
        this.result = this.result.replace(new RegExp(ClassyName.modifierDelimiter, "g"), delimiter);
        ClassyName.modifierDelimiter = delimiter;
    }
    element(element) {
        this.result += ClassyName.elementDelimiter + element;
        this.base = this.result;
        return this;
    }
    modifier(modifierName, modifierValue) {
        this.result += " " + this.base + ClassyName.modifierDelimiter + modifierName;
        if (modifierValue) {
            this.result += ClassyName.modifierDelimiter + modifierValue;
        }
        return this;
    }
    externalClassName(className) {
        this.result += " " + className;
        return this;
    }
    getResult() {
        return this.result;
    }

}

ClassyName.elementDelimiter = "__";
ClassyName.modifierDelimiter = "--";
exports.default = ClassyName;
//# sourceMappingURL=ClassyName.js.map
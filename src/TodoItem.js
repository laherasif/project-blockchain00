"use strict";
exports.__esModule = true;
exports.TodoItem = void 0;
var TodoItem = /** @class */ (function () {
    function TodoItem(id, name, publish) {
        this.id = id;
        this.name = name;
        this.publish = publish;
    }
    TodoItem.prototype.printDetail = function () {
        console.log(" ".concat(this.id, " \t ").concat(this.name, " \t  ").concat(this.publish));
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;

"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung S5", "Telefon", 10000), new Product_1.Product(2, "Samsung S6", "Telefon", 30000), new Product_1.Product(3, "Samsung S7", "Telefon", 50000), new Product_1.Product(4, "Samsung S8", "Telefon", 70000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
var p = new SimpleDataSource();

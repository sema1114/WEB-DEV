"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) {
            _this.products.push(p);
        });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0]; //yukardaki id ye karşılık gelen ilk id
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (pruduct) {
        if (pruduct.id == 0 || pruduct.id == null) {
            pruduct.id = this.generateId();
            this.products.push(pruduct);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === pruduct.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, pruduct);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;

"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuesto1 = new _impuesto["default"](1200000, 200000);
var cliente1 = new _cliente["default"]('Sebastian', impuesto1);
cliente1.impuesto = impuesto1;
console.log(cliente1.calcularImpuesto());
impuesto1.montoBrutoAnual = 2000000;
impuesto1.deducciones = 400000;
console.log(cliente1.calcularImpuesto());
console.log(cliente1.nombre);
cliente1.nombre = 'Ignacio';
console.log(cliente1.nombre);
console.log(impuesto1.montoBrutoAnual);
console.log(impuesto1.deducciones);
console.log(impuesto1.montoBrutoAnual);
console.log(impuesto1.deducciones);
/**
 * Created by albertin on 07/06/14.
 */

var currency = require('./modules/currency');

console.log('50 CAD = ' + currency.canadianToUS(50) + ' USD.');

console.log('30 USD = ' + currency.USToCanadian(30) + ' CAD.');

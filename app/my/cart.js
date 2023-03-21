define(function (require, exports) {
  let cart = [];
  exports.add = function (goods) {
    cart.push(goods)
  }
});
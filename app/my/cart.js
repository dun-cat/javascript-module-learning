define(function (require, exports, module) {
  let cart = [];
  module.exports = {
    add: function (goods) {
      console.log("goods added!")
      cart.push(goods)
    }
  }
});
define(function (require, exports) {
  const myCart = require('app/my/cart');
  const myInventory = require('app/my/inventory');
  return {
    id: 0,
    color: "black",
    size: "unisize",
    addToCart: function () {
      myInventory.decrement(this);
      myCart.add(this);
    }
  }
});
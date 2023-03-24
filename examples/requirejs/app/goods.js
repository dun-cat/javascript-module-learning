define(function (require, exports) {

  const myCart = require('app/my/cart');
  console.log("myCart", myCart);
  const myInventory = require('app/my/inventory');
  console.log("myInventory", myInventory);


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
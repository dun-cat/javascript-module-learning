define(function (require, exports) {
  let productList = [];
  //  ...
  exports.decrement = function (goods) {

    const product = productList.find(item => {
      item.id === goods.id
    })
    if (product) {
      product.stock--;
    } else {
      console.log("goods not found!")
    }
  }
});
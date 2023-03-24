define(function (require, exports) {
  let productList = [{ id: 0, stock: 100 }];
  //  ...
  exports.decrement = function (goods) {

    const product = productList.find(item => {
      return item.id === goods.id
    })
    if (product) {
      product.stock--;
      console.log(product)
    } else {
      console.log("goods not found!")
    }
  }
});
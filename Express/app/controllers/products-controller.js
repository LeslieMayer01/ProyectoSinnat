const repository = require("../db/product-repository");

let addProduct = async(req, res) => {
  repository.addProduct(req.body)
      .then(() => {
        return res.status(200).json({
          status: "register ok",
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let updateProduct = async(req, res) => {
  repository.updateProduct(req.params.productId, req.body)
      .then(() => {
        return res.status(200).json({
          productId: req.params.productId,
          updated: true
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let deleteProduct = async(req, res) => {
  repository.deleteProduct(req.params.productId)
      .then(() => {
        return res.status(200).json({
          productId: req.params.productId,
          deleted: true
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let getProduct = async(req, res) => {
  repository.getProduct(req.params.productId)
      .then((result) => {
        return res.status(200).json({
          articulos: result,
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let listProducts = async(req, res) => {
  repository.listProducts()
      .then((result) => {
        return res.status(200).json({
          articulos: result,
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  listProducts
}
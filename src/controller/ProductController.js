const ProductSchema = require("../model/schemas/ProductSchema");
const ProdutoSchema = require("../model/schemas/ProductSchema")

class ProductController {


  async getAllProducts(req, res) {
    const response = await ProdutoSchema.find();
     return res.status(200).json(response);
  }

  async getProductById(req, res) {
    const id = req.params.id;

    const response = await ProductSchema.findById(id);

    if(!response){
      return res.status(404).json({message: "item não encontrado"})
    }

    return res.json(response)
  }

  async creteproduct(req, res) {
    const response = await ProdutoSchema.create(req.body);

    return res.status(201).json(response);
  }

  async updateProducts(req, res) {
    const id = req.params.id;
    const body = req.body;

    const response = await ProductSchema.findByIdAndUpdate({ _id:id }, body);

    return res.json(response)
  }

  async deleteProduct(req, res) {
    const id = req.params.id;
    try {
      await ProductSchema.findOneAndRemove({_id:id});
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json();
    }
  }
}

module.exports = new ProductController();

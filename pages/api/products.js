// import products from "../../static/products.json";
import Product from '../../models/Product'
import connectDb from "../../utils/connectDb";
//why isn't my commits showing on github?????


connectDb();

export default async (req, res) => {
  const products = await Product.find()
  res.status(200).json(products);
};

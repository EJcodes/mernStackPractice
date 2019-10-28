import products from "../../static/products.json";
import connectDb from "../../utils/connectDb";
//why isn't my commits showing on github?????


connectDb();

export default (req, res) => {
  res.status(200).json(products);
};

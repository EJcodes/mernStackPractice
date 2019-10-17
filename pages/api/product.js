import Product from '../../models/Product'

// testing and trying to fix these ghost commits

export default async (req, res) => {
    const { _id } = req.query
    const product = await Product.findOne({ _id })
    res.status(200).json(product)
}
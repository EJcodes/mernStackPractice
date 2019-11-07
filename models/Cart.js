import mongoose from 'mongoose';

const { objectId, Number } = monsgoose.Schma.Types; 

const CartSchema = new mongoose.Schema({
    user: {
        type: objectId,
        ref: "User"
    },
    products: [
        {
            quantity: {
                type: Number,
                default: 1 
            },
            product: {
                type: objectId,
                ref: "Product"
            }
        }
    ]
})

export default mongoose.models.Cart || mongoose.model("Cart") 
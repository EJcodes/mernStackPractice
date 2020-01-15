import Stripe from 'stripe';
import uuidv4 from 'uuid/v4';
import jwt from 'jsonwebtoken';
import cart from '../../models/Cart';
import calculateCartTotal from '../../utils/calculateCartTotal';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

export default async (req,res) => {
    const  { paymentData } = req.body;

    try {
        // 1) Verify and get user id from token
        // 2) Find cart based on user id, populate it
        // 3) Calculate cart totals again from cart products
        // 4) Get email for payment data, see if email is linked w/ existing
    } catch (error) {
        
    }
}
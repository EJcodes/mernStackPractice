import Stripe from 'stripe';
import uuidv4 from 'uuid/v4';
import jwt from 'jsonwebtoken';
import cart from '../../models/Cart';
import calculateCartTotal from '../../utils/calculateCartTotal';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

export default async (req,res) => {
    const 
}
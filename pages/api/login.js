import connectDb from '../../utils/connectDb';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
    const { email, password } = req.body;
    try {
        // 1) check to see if a user exists with the provided in the email field.
        const user = await User.findOne({ email }).select('+password');
        // 2) If not return an error 
        if (!user) {
            return res.status(404).send("No user exists with the email provided")
        }
        // 3) Check to see if user pw matches the one associated w/ pw in DB
        const passwordsMatch = await bcrypt.compare(password, user.password);
        //.compare() is Javascript method not next.js method
        // 4) if so, generate a token 
        if (passwordsMatch) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d'});
        // 5) SEND THAT TOKEN TO CLIENT 
        res.status(200).json(token);
        } else { 
            res.status(401).send("Passwords do not match");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error logging in user");
    }
};
        
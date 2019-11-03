import connectDb from '../../utils/connectDb';
import User from '../../models/User';



connectDb()

export default async (req, res) => {
    const { name, email, password } = req.body;

    try{
        // 1) Check to see if the user already exists in the DB
        const user = await User.findOne({ email })
        if (user) {
            return res.status(422).send(`User already exists with email ${email}`)
        }
        // 2) -- if not , hash their password
        // 3) create user 
        // 4) create a token for the new user
        // 5) send back token 
    } catch (error)  {

    }
}
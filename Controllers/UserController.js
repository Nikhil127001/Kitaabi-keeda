const UserData = require('../Model/UserModel');
const {generateAuthToken} = require('../utils/generateAuthToken');
const {hashPassword, verifyHashedPassword} = require('../utils/hashPassword');




const userLogin = async (req, res, next) => {
    const { email, password } = req.body;

    
        try {
            console.log(req.body)
            const user = await UserData.findOne({ email })

            if (!user) {
                // User with the provided email does not exist
                const err = new Error('User not found');
                return next(err);
            }

            const verifyPassword = verifyHashedPassword(password , user.password);
                
            if (user && verifyPassword) {
                const token = generateAuthToken(user._id, user.email)
                res.json({
                    message: 'logged In',
                    Token: token,
                    User : user 
                })
            } else {
                const err = new Error('invalid Credentials')
                next(err)
            }
            } catch (err) {
            next(err)
        }
}

const createNewUser  = async (req,res , next) => {

    const {email, password , phoneNumber , name} = req.body;

    if(!(email && password && phoneNumber && name )){
        const err = new Error('All fields Required')
        next(err);
    }else{
        try{
            const user = await UserData.findOne({email});

            if(user){
                res.json({ message: 'User already exists' });
            }else{
                const hashedPassword =  hashPassword(password);

                const newUser = await UserData.create({ email: email, password: hashedPassword, phoneNumber : phoneNumber , name : name});
                if (newUser) {
                    res.json({
                        message: 'user added Success',
                        user: newUser
                    })
                } else {
                    const err = new Error('something went Wrong');
                    next(err)
                }
            }
        }catch (err) {
            next(err)
        }
    }

}

const verifyisLoggedIn = async(req,res,next) => {
    const decoded = req.user
    admin = await UserData.findById(decoded._id);
    if(admin){
        res.json({
            message : 'user Logged In'
        })
    }
}

module.exports = {userLogin,createNewUser,verifyisLoggedIn};
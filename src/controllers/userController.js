const User = require('../models/user');
exports.getUserByEmail = async (req, res) => {
    try {
        const body = req.body;
        const user = new User(body);
        const users = await User.find({ email: user.email});
        console.log(user.email)
        if (users.length === 0)
            return res.status(400).json('Ocurrio un error al intentar buscar el usuario.');

        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};
  
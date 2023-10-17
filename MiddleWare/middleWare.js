const regValidator = (req, res, next) => {
    const { name, email, password } = req.body;
    if (!email || !name || !password) {
        return res.status(400).json({ msg: 'All input fields are required' });
    }
    next();
};

const loginValidator = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: 'All fields are required' });
    }
    next();
};

module.exports ={
    regValidator, loginValidator
}
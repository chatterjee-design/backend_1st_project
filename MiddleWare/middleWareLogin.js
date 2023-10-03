exports.loginValidator = (req, res, next) => {

    const {email, password} = req.body

    if (req.body && email && password) {
        next()
    }
    res.status(404).send(
        {msg: 'All fields are required'}
    )
}
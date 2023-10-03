exports.regValidator = (req, res, next) => {

    const {name,email, password} = req.body

    if (req.body && email && password && name) {
        next()
    }
    res.status(404).send(
        {msg: 'All input fields are required'}
    )
}
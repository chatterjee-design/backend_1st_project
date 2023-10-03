const User = require("../userSchema/schema.js");

exports.home = (req, res) => {
  res.send("welcome to the home page");
};

// register a user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !name || !password) {
      throw new Error("All fields are required");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    } else {
      const user = await User.create({ name, email, password });
      console.log("success");
      res.status(200).json({
        success: true,
        message: "User created successfully",
        user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// login a user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("All fields are required");
    }
    const userData = await User.findOne({ email });
    if (userData) {
      if (userData.password === password && userData.email === email) {
        res.status(200).json({
          success: true,
          message: "User Login successfully",
        });
      } else {
        res.status(400).json({
          success: false,
          message: "invalid email or password",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: 'please enter a valid email or password',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

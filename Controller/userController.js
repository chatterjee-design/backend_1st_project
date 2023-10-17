const User = require("../userSchema/schema.js");

 const home = (req, res) => {
  res.send("welcome to the home page");
};

// register a user
const registerUser = async (req, res) => {
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
    
      res.status(200).json({
        success: true,
        message: "User created successfully",
        user,
      });
    }
  } catch (error) {
   
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// login a user
const loginUser = async (req, res) => {
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
        return res.status(400).json({
          success: false,
          message: "invalid email or password",
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: 'please enter a valid email or password',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
 module.exports = { home, registerUser, loginUser}
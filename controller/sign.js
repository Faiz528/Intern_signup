const User = require('../model/user'); // Make sure the path is correct
const bcrypt = require('bcrypt');

exports.PostUser = async (req, res, next) => {
  try {
    const { name, email, pass } = req.body;
    const hashedPassword = await bcrypt.hash(pass, 10);

    const newUser = new User({
      Username: name,
      Email: email,
      Password: hashedPassword,
       // Use a boolean value instead of a string
    });

    const result = await newUser.save();

    // User creation successful
    res.status(200).json(result);
  } catch (err) {
    // Check if it's a duplicate key error
    if (err.code === 11000) {
      // Handle duplicate email error
      res.status(409).json({ error: 'Email already exists' });
    } else {
      // Handle other errors
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

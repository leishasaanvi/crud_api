const User = require('./users.model.js')

// GET Users
const getUsers = async(req,res) => {

    try {

        const users = await User.find()

        const response = users

        res.status(200).send(response)
        
    } catch (error) {
        res.status(500).send("Cannot get users!")
    }

}

//POST Users
const addUsers = async(req,res) => {

    try {

        const user = {
            name : req.body.name,
            email : req.body.email,
            role : req.body.role
        }

        await User.create(user)

        res.status(200).send("User created successfully!")
        
    } catch (error) {
        res.status(500).send("Cannot add user!")
    }

}

// PUT User
const updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const updates = req.body;
  
      const user = await User.findByIdAndUpdate(userId, updates, { new: true, runValidators: true });
  
      if (!user) {
        return res.status(404).send("User not found!");
      }
  
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send("Cannot update user!");
    }
  };

  // DELETE User
const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
  
      const user = await User.findByIdAndDelete(userId);
  
      if (!user) {
        return res.status(404).send("User not found!");
      }
  
      res.status(200).send("User deleted successfully!");
    } catch (error) {
      res.status(500).send("Cannot delete user!");
    }
  };
  
  

module.exports = { getUsers, addUsers, updateUser, deleteUser}
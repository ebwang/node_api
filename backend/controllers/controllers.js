import User from '../models/models.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send('Error');
    console.error(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = await User.create({ name, email, age });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send('Error');
    console.error(error);
  }
};

export const searchUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const users = await User.findAll({
      where: { name, email, age }
    });

    if(users.length > 0){
      res.status(200).json(users);
    } else {
      res.status(404).send('No user found');
    }
  } catch (error) {
    res.status(500).send('Error');
    console.error(error);
  }
};

export const removeUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    let user;
    if (name) {
      user = await User.findOne({ where: { name } });
    } else if (email) {
      user = await User.findOne({ where: { email } });
    } else if (age) {
      user = await User.findOne({ where: { age } });
    }

    if(user){
      await user.destroy();
      res.status(200).send('User deleted successfully');
    } else {
      res.status(404).send('No user found');
    }
  } catch (error) {
    res.status(500).send('Error');
    console.error(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = await User.findOne({ where: { name } });

    if(user){
      user.name = name;
      user.email = email;
      user.age = age;

      await user.save();

      res.status(200).json(user);
    } else {
      res.status(404).send('No user found');
    }
  } catch (error) {
    res.status(500).send('Error');
    console.error(error);
  }
};

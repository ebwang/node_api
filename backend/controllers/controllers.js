import client from '../models/models.js';

export const getAllUsers = async (req, res) => {
  try {
    const response = await client.query(`SELECT * FROM users`);

    if(response){
      res.status(200).send(response.rows);
    }

  } catch (error) {
    res.status(500).send('Error');
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const name  = req.body.name;
    const email = req.body.email;
    const age   = req.body.age;

    const response = await client.query(`INSERT INTO users(name, email, age) VALUES ('${name}', '${email}', ${age});`);

    if(response){
      res.status(200).send(req.body);
    }
  } catch (error) {
    res.status(500).send('Error');
    console.log(error);
  }
};

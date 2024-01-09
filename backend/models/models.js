import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('postgres', 'postgres', '615243', {
  host: 'db',
  dialect: 'postgres'
});

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {});

User.sync().then(() => {
  console.log("User table has been successfully created, if one doesn't exist");
})
.catch(error => {
  console.log('This error occured', error);
});

export default User;

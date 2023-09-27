'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: { STRING: any; }) => {
  class user extends Model {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    static associate(models:any) {
      // define association here
    }
  }
  user.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
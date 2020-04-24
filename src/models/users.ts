import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { UsersInstance, UsersAttribute } from './db';
import { UserStatus } from '../constants/users';

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
  return sequelize.define<UsersInstance, UsersAttribute>(
    'users',
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255)
      },
      status: {
        type: DataTypes.STRING(10),
        defaultValue: UserStatus.Active,
        allowNull: true
      },
      teamId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
      },
      contractNumber: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      contractExpDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      }
    },
    {
      tableName: 'users'
    }
  );
};

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class User extends Model {
        static associate({  }) {
            // not including the association here
            // because this is only an auth service
        }
    }

    User.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Not an email address"
                }
            }
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false
    });

    return User;
};

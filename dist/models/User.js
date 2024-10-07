"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class User extends sequelize_1.Model {
}
User.init({
    firstname: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    lastname: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    profile_photo: { type: sequelize_1.DataTypes.STRING, allowNull: true },
}, { sequelize: database_1.default, modelName: 'user' });
exports.default = User;
// import { Model, DataTypes } from 'sequelize';
// import sequelize from '../config/database';
// class User extends Model {
//   public id!: number;
//   public firstName!: string;
//   public lastName!: string;
//   public email!: string;
//   public profilePhoto!: string;
//   public appointmentLetter!: string;
// }
// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     profilePhoto: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     appointmentLetter: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//   },
//   {
//     sequelize,
//     tableName: 'users',
//   }
// );
// export default User;
// // import { DataTypes } from "sequelize";
// // import sequelize from '../config/database';
// // const User = sequelize.define("user",{
// //     id: {
// //         type: DataTypes.INTEGER.UNSIGNED,
// //         autoIncrement: true,
// //         primaryKey: true
// //     },
// //     firstName: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //     },
// //     lastName: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //     },
// //     email: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //     },
// //     profilePhoto: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //     },
// // });
// // export default User;

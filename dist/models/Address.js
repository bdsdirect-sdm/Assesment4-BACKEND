"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
class Address extends sequelize_1.Model {
}
exports.Address = Address;
Address.init({
    company_address: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    company_city: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    company_state: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    company_zip: { type: sequelize_1.DataTypes.STRING(6), allowNull: false },
    home_address: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    home_city: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    home_state: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    home_zip: { type: sequelize_1.DataTypes.STRING(6), allowNull: false },
    appointment_letter: { type: sequelize_1.DataTypes.STRING, allowNull: true }
}, { sequelize: database_1.default, modelName: 'address' });
// Associations
User_1.default.hasOne(Address);
Address.belongsTo(User_1.default);
// import { Model, DataTypes } from 'sequelize';
// import sequelize from '../config/database';
// class Address extends Model {
//   public id!: number;
//   public userId!: number;
//   public addressType!: string; // Home or Company
//   public address!: string;
//   public city!: string;
//   public state!: string;
//   public zip!: string;
// }
// Address.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     addressType: {
//       type: DataTypes.ENUM('Home', 'Company'),
//       allowNull: false,
//     },
//     address: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     city: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     state: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     zip: {
//       type: DataTypes.STRING(6),
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     tableName: 'addresses',
//   }
// );
// export default Address;
// // import { DataTypes } from "sequelize";
// // import sequelize from '../config/database';
// // const Address = sequelize.define("address",{
// //     id: {
// //         type: DataTypes.INTEGER.UNSIGNED,
// //         autoIncrement: true,
// //         primaryKey:true
// //     },
// //     userId: {
// //         type:DataTypes.INTEGER
// //     },
// //     companyAddress: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //     },
// //     companyCity: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //     },
// //     companyZip: {
// //         type: DataTypes.INTEGER,
// //         allowNull: true
// //     },
// //     homeAddress: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //     },
// //     homeCity: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //     },
// //     homeState: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //     },
// //     homeZip: {
// //         type: DataTypes.INTEGER,
// //         allowNull: true
// //     },
// //     appointmentLetter: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //     },
// // });
// // export default Address;

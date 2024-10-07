import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

class Address extends Model {}
Address.init({
  company_address: { type: DataTypes.STRING, allowNull: false },
  company_city: { type: DataTypes.STRING, allowNull: false },
  company_state: { type: DataTypes.STRING, allowNull: false },
  company_zip: { type: DataTypes.STRING(6), allowNull: false },
  home_address: { type: DataTypes.STRING, allowNull: false },
  home_city: { type: DataTypes.STRING, allowNull: false },
  home_state: { type: DataTypes.STRING, allowNull: false },
  home_zip: { type: DataTypes.STRING(6), allowNull: false },
  appointment_letter:{ type: DataTypes.STRING, allowNull: true }
}, 
{ sequelize, modelName: 'address' }
);

// Associations
User.hasOne(Address);
Address.belongsTo(User);

export { User, Address };






















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


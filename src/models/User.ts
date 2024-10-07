import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {
    id?: number;
    profile_photo: any;
}
User.init({
  firstname: { type: DataTypes.STRING, allowNull: false },
  lastname: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  profile_photo: { type: DataTypes.STRING, allowNull: true },
}, 
{ sequelize, modelName: 'user' }
);

export default User;

















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

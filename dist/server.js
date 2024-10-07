"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use('/uploads', express_1.default.static('uploads'));
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Routes
app.use('/', userRoutes_1.default);
// Sync database
database_1.default.sync()
    .then(() => {
    console.log('Database synchronized');
})
    .catch((err) => {
    console.error('Database synchronization failed:', err);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
exports.default = app;
// import express from 'express';
// import bodyParser from 'body-parser';
// import sequelize from './config/database';
// import userRoutes from './routes/userRoutes';
// import cors from 'cors';
// const app = express();
// const PORT = 5000;
// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use('/api/users', userRoutes);
// // Sync database and start the server
// const startServer = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Database connection established successfully.');
//     await sequelize.sync();
//     console.log('Database synced.');
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// };
// startServer();
// import sequelize from './config/database';
// import express from 'express';
// import User from './models/User';
// import Address from './models/Address';
// const app = express();
// const port = 4000;
// User.sync().then(()=>{
//     console.log('User table sync')
// });
// Address.sync().then(()=>{
//     console.log('Address table sync');
// })
// sequelize.sync().then(() => {
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}.`);
//     });
//   }).catch(err => console.error("Unable to connect to the database:", err));

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import sequelize from './config/database';

const app = express();
const PORT = process.env.PORT || 5000;
app.use('/uploads', express.static('uploads'))
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', userRoutes);

// Sync database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((err:any) => {
    console.error('Database synchronization failed:', err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;



















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
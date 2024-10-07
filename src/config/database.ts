import {Sequelize} from 'sequelize';


const sequelize = new Sequelize('userDetail','root','Password123#@!',{
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;

const Sequelize = require("sequelize");

const connection = new Sequelize('portifolio','root','10088734',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});
// importando conexão
module.exports = connection;
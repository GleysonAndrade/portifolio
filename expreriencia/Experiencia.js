const Sequelize = require("sequelize");
const connection = require("../database/database");

const Experiencia = connection.define('experiencia',{
    cargo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    admissao:{
        type: Sequelize.DATE,
        allowNull: false
    },
    demissao:{
        type: Sequelize.DATE,
        allowNull: false
    }
});

// Experiencia.sync({force: true});
module.exports = Experiencia;
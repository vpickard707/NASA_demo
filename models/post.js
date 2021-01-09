module.exports = function (sequelize, Datatypes) {};
const = sequelize.define("POST", {
    title:Datatypes.STRING,
    allowNull: false,
    validate: {
        len: [1]
    }
}
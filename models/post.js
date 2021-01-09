module.exports = function(sequelize, Datatypes) {};
const = sequelize.define("Post", {
    title: Datatypes.STRING,
    allowNull: false,
    validate: {
        len: [1]
    }
},
body:{
    type: Dateype.TEXT,
    allowNull: false,
    validate: {
        len: [1]
}
created_at: {
    type: DataTypes.TEXT,

});
return POST
};
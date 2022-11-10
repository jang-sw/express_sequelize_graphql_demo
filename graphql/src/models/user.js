module.exports = (sequelize, DataTypes) =>{
    var user = sequelize.define('user',{
       id:{
            type: DataTypes.STRING(100),
            allowNull: false,
            primaryKey: true
       },
       pwd:{
           type: DataTypes.STRING(100),
           allowNull: false,
       },
       email:{
        type: DataTypes.STRING(100),
        allowNull: false,
    }
    },{
        timestamps: false 
    });
    user.associate = (models) => {
        user.hasMany(models.board,  {foreignKey: "user_id", sourceKey: 'id'})
    }

    return user;
};
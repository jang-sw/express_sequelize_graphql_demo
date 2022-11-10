module.exports = (sequelize, DataTypes) =>{
    var board = sequelize.define('board',{
        seq:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    });

    board.associate = (models) => {
        board.belongsTo(models.user, {
            foreignKey: "user_id", 
            sourceKey: "id",
        });
    };
    return board;
};
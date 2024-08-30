module.exports = function (sequelize, DataTypes) {
    var notes = sequelize.define("notes", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, // primary key
            autoIncrement: true // auto incrementing
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false // not null
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false // not null
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false, // not null
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP") // default value to current timestamp
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false, // not null
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP") // default value to current timestamp
        }
    });
    return notes;
}
export default function(sequelize, DataTypes){

  const Tools = sequelize.define('Tools', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description:{
        type: DataTypes.STRING,
        allowNull: false
      },
      tags:{
        type: DataTypes.STRING,
        allowNull: false
      },
  })

  return Tools
}

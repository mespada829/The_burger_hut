const connection = require("../config/connection");


var orm = {
   selectAll: (table, callback) => {
       var queryString = "SELECT * FROM " + table + ";";
       connection.query(queryString, (err, result)=>{
            if(err){
                throw err;
            }
            callback(result)
       })
   },
   insertOne: (table,name, callback) =>{
       var queryString = "INSERT INTO " + table + "(burger_name, devoured) VALUES (?, ?)";

       connection.query(queryString, [name, 0], (err, result)=>{
           if (err){
               throw err;
           }
           callback(result);
       })
   },
    updateOne: (table, devoured, id, callback) =>{
        var queryString = "Update " + table;
        queryString += " SET devoured = ? WHERE id =?";

        connection.query(queryString, [devoured, id], (err, result)=>{
            if(err) {
                throw err;
            }
            callback(result)
        })
    }
};

module.exports = orm;
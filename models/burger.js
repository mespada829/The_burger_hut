const orm = require("../config/orm");

var burger ={
    selectAll: cb =>{
        orm.selectAll("burgers", res=>{
            cb(res);
        })
    },
    insertOne: (name, cb) =>{
        orm.insertOne("burgers", name, res=>{
            cb(res);
        })
    },
    updateOne: (devoured, id, cb) =>{
        orm.updateOne("burgers", devoured, id, res=>{
            cb(res)
        })
    }
}


module.exports = burger;
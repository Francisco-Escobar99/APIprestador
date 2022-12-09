import conn from "../database.js"
import bcrypt from 'bcrypt'

    function getAllProductssDAO(callback){
        let sql = 'SELECT * FROM prestadores'
        conn.query(sql, (err, data) => {
            if (err) throw err
            console.log(err)

            if (data.length > 0)
                callback(data)
            else
                callback(null)
        })
    };

    function clienteDAO( correo ,callback){
        let sql = 'SELECT * FROM prestadores WHERE email =?'
        conn.query(sql,correo, (err, data) => {
            if (err) throw err
            console.log(err)

            if (data.length > 0)
                callback(data)
            else
                callback(null)
        })
    };

    export function postUsersDAO(user2,callback){
        let sql = 'INSERT INTO prestadores set ?'
        console.log(conn)
        conn.query(sql,user2,(err, data) => {
            if(err)
                return null
            else
                callback(data)    
        })
    };

    deleteUsersDAO: (idusers, callback) => {
        console.log("Metodo dao para eliminar")
        let sql = 'DELETE FROM prestadores WHERE idprestadores = ?'
        conn.query(sql, idusers, (err, data) => {
            console.log(err);
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    };

    updateUserDAO:(user,idusers,callback)=>{
        console.log("Metodo UpdateDAO")
        let sql = 'UPDATE prestadores ? WHERE idprestadores= ?'
        conn.query(sql, [user, idusers], function (err, data) {
            if (err) throw err;
            return callback(data);
        });
    };
    
